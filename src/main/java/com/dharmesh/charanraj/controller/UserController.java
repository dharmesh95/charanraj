package com.dharmesh.charanraj.controller;

import com.dharmesh.charanraj.entity.User;
import com.dharmesh.charanraj.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	private UserService userService;

	@RequestMapping("/getUser")
	public User getUserByEmail(@RequestBody User userObj) {
		return userService.getUserByEmailAndUpdate(userObj);
	}

	@RequestMapping("/getApprovedUsers")
	public List<User> getApprovedUsers() {
		return userService.getApprovedUsers();
	}

}
