package com.dharmesh.charanraj.helper;

import java.util.Calendar;
import java.util.Date;

public class DateHelper {

	public static Date getTime(Date date, int hourOfDay, int minutes, int seconds, int milliseconds) {
		Calendar cal = Calendar.getInstance();
		
		cal.setTime(date);
		
		cal.set(Calendar.HOUR_OF_DAY, hourOfDay);
		cal.set(Calendar.MINUTE, minutes);
		cal.set(Calendar.SECOND, seconds);
		cal.set(Calendar.MILLISECOND, milliseconds);

		return cal.getTime();
	}
}
