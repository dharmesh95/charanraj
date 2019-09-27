package com.dharmesh.charanraj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.charanraj.entity.User;
import com.dharmesh.charanraj.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	@RequestMapping("/getUser")
	public User getUser(@RequestBody User userObj) {
		return userService.getUser(userObj);
	}

	@RequestMapping("/getApprovedUsers")
	public List<User> getApprovedUsers() {
		return userService.getApprovedUsers();
	}

}
