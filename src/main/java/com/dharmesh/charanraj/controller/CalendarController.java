package com.dharmesh.charanraj.controller;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.charanraj.service.CalendarService;
import com.google.api.client.util.DateTime;
import com.google.api.services.calendar.Calendar;
import com.google.api.services.calendar.model.Event;
import com.google.api.services.calendar.model.EventAttendee;
import com.google.api.services.calendar.model.EventDateTime;
import com.google.api.services.calendar.model.EventReminder;

@CrossOrigin
@RestController
@RequestMapping("/calendar")
public class CalendarController {

	@Autowired
	private CalendarService calendarService;

	@RequestMapping("/invite")
	public void sendInvite() {
		String to = "dharmesh.dhaval95@gmail.com";

		try {
			Calendar cService = calendarService.getService();
			Event event = new Event().setSummary("Invite Testing")
					.setLocation("800 Howard St., San Francisco, CA 94103")
					.setDescription("A chance to hear more about Google's developer products.");

			DateTime startDateTime = new DateTime("2020-05-28T09:00:00-07:00");
			EventDateTime start = new EventDateTime().setDateTime(startDateTime).setTimeZone("America/Los_Angeles");
			event.setStart(start);

			DateTime endDateTime = new DateTime("2020-05-28T17:00:00-07:00");
			EventDateTime end = new EventDateTime().setDateTime(endDateTime).setTimeZone("America/Los_Angeles");
			event.setEnd(end);

			String[] recurrence = new String[] { "RRULE:FREQ=DAILY;COUNT=2" };
			event.setRecurrence(Arrays.asList(recurrence));

			EventAttendee[] attendees = new EventAttendee[] { new EventAttendee().setEmail(to) };
			event.setAttendees(Arrays.asList(attendees));

			EventReminder[] reminderOverrides = new EventReminder[] {
					new EventReminder().setMethod("email").setMinutes(24 * 60),
					new EventReminder().setMethod("popup").setMinutes(10), };
			Event.Reminders reminders = new Event.Reminders().setUseDefault(false)
					.setOverrides(Arrays.asList(reminderOverrides));
			event.setReminders(reminders);

			String calendarId = "primary";
			event = cService.events().insert(calendarId, event).execute();
			System.out.printf("Event created: %s\n", event.getHtmlLink());
		} catch (IOException e) {
			e.printStackTrace();
		} catch (GeneralSecurityException e) {
			e.printStackTrace();
		}
	}
}
