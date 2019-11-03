package com.dharmesh.charanraj.helper;

import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

import com.dharmesh.charanraj.constants.GoogleAPIConstants;

public class DateHelper {

	public static Date getTime(Date date, int hourOfDay, int minutes, int seconds, int milliseconds) {
		Calendar cal = Calendar.getInstance(TimeZone.getTimeZone(GoogleAPIConstants.TZ_DB_NAME));

		cal.setTime(date);

		cal.set(Calendar.HOUR_OF_DAY, hourOfDay);
		cal.set(Calendar.MINUTE, minutes);
		cal.set(Calendar.SECOND, seconds);
		cal.set(Calendar.MILLISECOND, milliseconds);

		return cal.getTime();
	}
}
