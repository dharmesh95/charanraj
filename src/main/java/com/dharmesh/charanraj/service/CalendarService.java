package com.dharmesh.charanraj.service;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.GeneralSecurityException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;

import org.springframework.stereotype.Service;

import com.dharmesh.charanraj.constants.GoogleAPIConstants;
import com.dharmesh.charanraj.helper.DateHelper;
import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.DateTime;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.calendar.Calendar;
import com.google.api.services.calendar.model.Event;
import com.google.api.services.calendar.model.EventAttendee;
import com.google.api.services.calendar.model.EventDateTime;

@Service
public class CalendarService {
	private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();
	private static final String TOKENS_DIRECTORY_PATH = "tokens";

	/**
	 * Global instance of the scopes required by this quickstart. If modifying these
	 * scopes, delete your previously saved tokens/ folder.
	 */
	private static final String CREDENTIALS_FILE_PATH = "/credentials.json";

	/**
	 * Creates an authorized Credential object.
	 * 
	 * @param HTTP_TRANSPORT
	 *            The network HTTP Transport.
	 * @return An authorized Credential object.
	 * @throws IOException
	 *             If the credentials.json file cannot be found.
	 */
	private static Credential getCredentials(final NetHttpTransport HTTP_TRANSPORT) throws IOException {
		// Load client secrets.
		InputStream in = CalendarService.class.getResourceAsStream(CREDENTIALS_FILE_PATH);
		if (in == null) {
			throw new FileNotFoundException("Resource not found: " + CREDENTIALS_FILE_PATH);
		}
		GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));

		// Build flow and trigger user authorization request.
		GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(HTTP_TRANSPORT, JSON_FACTORY,
				clientSecrets, GoogleAPIConstants.SCOPES)
						.setDataStoreFactory(new FileDataStoreFactory(new java.io.File(TOKENS_DIRECTORY_PATH)))
						.setAccessType("offline").build();
		LocalServerReceiver receiver = new LocalServerReceiver.Builder().setPort(8888).build();
		return new AuthorizationCodeInstalledApp(flow, receiver).authorize("user");
	}

	public Calendar getService() throws IOException, GeneralSecurityException {
		// Build a new authorized API client service.
		final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
		Calendar service = new Calendar.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
				.setApplicationName(GoogleAPIConstants.APPLICATION_NAME).build();
		return service;
	}

	public void sendEventInvites(String to, Date date) {
		Date startDate = DateHelper.getTime(date, 20, 15, 0, 0);
		Date endDate = DateHelper.getTime(date, 21, 15, 0, 0);

		try {
			Calendar cService = this.getService();
			Event event = new Event().setSummary(GoogleAPIConstants.SUMMARY).setLocation(GoogleAPIConstants.LOCATION)
					.setDescription(GoogleAPIConstants.DESCRIPTION);

			DateTime startDateTime = new DateTime(
					new SimpleDateFormat(GoogleAPIConstants.DATE_TIME_FORMAT).format(startDate));
			EventDateTime start = new EventDateTime().setTimeZone(GoogleAPIConstants.TZ_DB_NAME)
					.setDateTime(startDateTime);
			event.setStart(start);

			DateTime endDateTime = new DateTime(
					new SimpleDateFormat(GoogleAPIConstants.DATE_TIME_FORMAT).format(endDate));
			EventDateTime end = new EventDateTime().setTimeZone(GoogleAPIConstants.TZ_DB_NAME).setDateTime(endDateTime);
			event.setEnd(end);

			EventAttendee[] attendees = new EventAttendee[] { new EventAttendee().setEmail(to) };
			event.setAttendees(Arrays.asList(attendees));

			event = cService.events().insert(GoogleAPIConstants.CALENDAR_ID, event).execute();
			/* System.out.printf("Event created: %s\n", event.getHtmlLink()); */
		} catch (IOException e) {
			e.printStackTrace();
		} catch (GeneralSecurityException e) {
			e.printStackTrace();
		}
	}
}
