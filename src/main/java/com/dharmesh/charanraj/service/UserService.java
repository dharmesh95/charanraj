package com.dharmesh.charanraj.service;

import com.dharmesh.charanraj.constants.UserConstants;
import com.dharmesh.charanraj.entity.User;
import com.dharmesh.charanraj.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getApprovedUsers() {
        return userRepository.findByRoleNotIn(UserConstants.NOT_APPROVED_ROLES);
    }

    public User getUserByEmailAndUpdate(User newUserObj) {
        User existingUser = userRepository.findOneByEmail(newUserObj.getEmail());
        if (null == existingUser) {
            /* set role */
            newUserObj.setRole(UserConstants.UNKNOWN_USER);
            userRepository.save(newUserObj);
            return newUserObj;
        } else {
            // todo remove house if hardcoded
            existingUser.setHouses(new String[]{"5dd0f0c31c9d440000c6ad3d"});
            existingUser.setHouseId("5dd0f0c31c9d440000c6ad3d");

            userRepository.save(existingUser);
            return existingUser;
        }
    }

    public User getUserByEmailAndById(String email, String id) {
        return userRepository.findOneByEmailAndId(email, id);
    }

    public User getUserByEmail(String email) {
        return userRepository.findOneByEmail(email);
    }

}
