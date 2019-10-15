package com.dharmesh.charanraj.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dharmesh.charanraj.constants.UserConstants;
import com.dharmesh.charanraj.entity.Access;
import com.dharmesh.charanraj.entity.User;
import com.dharmesh.charanraj.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public List<User> getApprovedUsers() {
		List<String> roles = Arrays.asList(UserConstants.REJECTED_USER, UserConstants.UNKNOWN_USER);
		return userRepository.findByRoleNotIn(roles);
	}

	public User getUser(User userObj) {
		User user = userRepository.findOneByEmail(userObj.getEmail());
		if (user == null) {
			/* set role */
			userObj.setRole(UserConstants.NORMAL_USER);

			/* set access permissions */
			Access access = new Access();
			access.setFood(true);
			access.setGrocery(true);
			access.setCleaning(true);
			access.setSchedule(true);
			userObj.setAccess(access);

			userRepository.save(userObj);
			return userObj;
		}
		userRepository.save(user);
		return user;
	}

}
