package com.dharmesh.charanraj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.charanraj.entity.Cleaning;
import com.dharmesh.charanraj.model.EventInviteModel;
import com.dharmesh.charanraj.service.CalendarService;
import com.dharmesh.charanraj.service.CleaningService;

@CrossOrigin
@RestController
@RequestMapping("/api/calendar")
public class CalendarController {

	@Autowired
	private CalendarService calendarService;

	@Autowired
	private CleaningService cleaningService;

	@RequestMapping("/sendEventInvites")
	public void sendEventInvites(@RequestBody EventInviteModel eventInviteModel) {

		String email = eventInviteModel.getEmail();
		List<Cleaning> cleaningSchedule = cleaningService.getCleaningScheduleByEmail(email);
		cleaningSchedule.parallelStream().forEach(cleaning -> {
			calendarService.sendEventInvites(email, cleaning.getDate());
		});
	}
}
