package com.dharmesh.charanraj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.charanraj.entity.User;
import com.dharmesh.charanraj.service.AdminService;

@CrossOrigin
@RestController
@RequestMapping("/api/admin")
public class AdminController {

	@Autowired
	private AdminService adminService;

	@RequestMapping("/getRequests")
	public List<User> getRequests() {
		return adminService.getRequests();
	}

	@RequestMapping("/updateUserRole")
	public void updateUserRole(@RequestBody User userObj) {
		adminService.updateUserRole(userObj);
	}

	@RequestMapping("/deleteUser")
	public void deleteUser(@RequestBody User userObj) {
		adminService.deleteUser(userObj);
	}

	@RequestMapping("/updateUser")
	public void updateUser(@RequestBody User userObj) {
		adminService.updateUser(userObj);
	}
}
