package com.dharmesh.charanraj.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dharmesh.charanraj.constants.UserConstants;
import com.dharmesh.charanraj.entity.Access;
import com.dharmesh.charanraj.entity.User;
import com.dharmesh.charanraj.repository.UserRepository;
import com.dharmesh.charanraj.repository.VoteRepository;

@Service
public class AdminService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private VoteRepository voteRepository;

	public List<User> getRequests() {
		return userRepository.findByRole(UserConstants.UNKNOWN_USER);
	}

	public void updateUserRole(User userObj) {
		if (UserConstants.REJECTED_USER.equals(userObj.getRole())) {
			userRepository.deleteById(userObj.getId());
		} else if (UserConstants.NORMAL_USER.equals(userObj.getRole())) {
			Access access = (null == userObj.getAccess()) ? new Access(true) : userObj.getAccess();
			access.setFood(true);
			userRepository.save(userObj);
		} else {
			userRepository.save(userObj);
		}
	}

	public void deleteUser(User userObj) {
		userRepository.deleteById(userObj.getId());
		voteRepository.deleteByEmail(userObj.getEmail());
	}

	public void updateUser(User userObj) {
		userRepository.save(userObj);
	}

}
