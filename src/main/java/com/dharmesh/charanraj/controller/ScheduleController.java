package com.dharmesh.charanraj.controller;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.charanraj.service.ScheduleService;

@CrossOrigin
@RestController
@RequestMapping("/schedule")
public class ScheduleController {
	@Autowired
	private ScheduleService scheduleService;

	@RequestMapping(value = "/download", produces = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	public byte[] download() throws FileNotFoundException, IOException {
		return scheduleService.generate();
	}
}
