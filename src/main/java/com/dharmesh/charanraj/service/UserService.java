package com.dharmesh.charanraj.service;

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

	public User getUser(User userObj) {
		User user = userRepository.findOneByEmail(userObj.getEmail());
		if (user == null) {
			/* set role */
			userObj.setRole(UserConstants.UNKNOWN_USER);

			/* set access permissions */
			Access access = new Access();
			userObj.setAccess(access);

			userRepository.save(userObj);
			return userObj;
		}
		return user;
	}

}
