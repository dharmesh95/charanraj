package com.dharmesh.charanraj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.charanraj.entity.Cleaning;
import com.dharmesh.charanraj.entity.User;
import com.dharmesh.charanraj.service.CleaningService;

@CrossOrigin
@RestController
@RequestMapping("/api/cleaning")
public class CleaningController {

	@Autowired
	private CleaningService cleaningService;

	@RequestMapping("/saveCleaningSchedule")
	public void saveCleaningSchedule(@RequestBody List<Cleaning> cleaningSchedule) {
		cleaningService.saveCleaningSchedule(cleaningSchedule);
	}
	
	@RequestMapping("/updateCleaningSchedule")
	public void updateCleaningSchedule(@RequestBody Cleaning cleaningObj) {
		cleaningService.updateCleaningSchedule(cleaningObj);
	}

	@RequestMapping("/deleteSchedule")
	public void deleteAll() {
		cleaningService.deleteAll();
	}

	@RequestMapping("/getCleaningSchedule")
	public List<Cleaning> getCleaningSchedule(@RequestBody User user) {
		return cleaningService.getCleaningSchedule(user);
	}
	
	@RequestMapping("/getFullCleaningSchedule")
	public List<Cleaning> getFullCleaningSchedule() {
		return cleaningService.getFullCleaningSchedule();
	}

}
