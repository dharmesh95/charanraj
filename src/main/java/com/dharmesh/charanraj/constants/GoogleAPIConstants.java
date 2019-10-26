package com.dharmesh.charanraj.constants;

import java.util.Arrays;
import java.util.List;

import com.google.api.services.calendar.CalendarScopes;
import com.google.api.services.gmail.GmailScopes;

public class GoogleAPIConstants {

	public static final String APPLICATION_NAME = "Charanraj";

	/* permission */
	public static final List<String> SCOPES = Arrays.asList(CalendarScopes.CALENDAR_EVENTS, GmailScopes.GMAIL_SEND);

	/* mail */
	public static final String FROM = "95dharmesh@gmail.com";
	public static final String SUBJECT = "Cleaning Turn [Automated] [DO NOT REPLY]";
	public static final String USER_ID = "100050165155570944873"; /* of 95dharmesh@gmail.com */
	public static final String BODY_TEXT = "<html><body>Hi %s,<br /> <br />"
			+ "We would like to notify you that <b>today i.e. %s</b> is your <b>cleaning turn</b>.<br /><br />"
			+ "If you cannot do it due to some reason then please update in WhatsApp group.<br /><br />"
			+ "Thanks,<br />Das na Das Jai Swaminarayan 🙏<br /><br />"
			+ "This is an automatically generated notification from Charanraj App.<br />"
			+ "Please do not reply to this email.</body></html>";

	/* event */
	public static final String LOCATION = "111 Mt Olive Dr, Etobicoke, ON M9V 2E3, Canada";
	public static final String DESCRIPTION = "Hello,\n\nWe would like to notify you that its your Cleaning Turn today. "
			+ "If you cannot do it due to some reason then please update in WhatsApp group.\n\n"
			+ "Thanks,\nDas na Das Jai Swaminarayan 🙏";
	public static final String SUMMARY = "Cleaning";
	public static final String TZ_DB_NAME = "America/Toronto";
	public static final String DATE_TIME_FORMAT = "yyyy-MM-dd'T'HH:mm:ssXXX";
	public static final String CALENDAR_ID = "primary";
	public static final String REMINDER_METHOD = "popup";

}
