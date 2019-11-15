package com.dharmesh.charanraj.model;

import java.util.List;

public class CalendarMonth {
	private int noOfLastMonthDays;
	private int noOfCurrentMonthDays;
	private int noOfNextMonthDays;

	private List<List<ScheduleCell>> weeks;

	public int getNoOfLastMonthDays() {
		return noOfLastMonthDays;
	}

	public void setNoOfLastMonthDays(int noOfLastMonthDays) {
		this.noOfLastMonthDays = noOfLastMonthDays;
	}

	public int getNoOfCurrentMonthDays() {
		return noOfCurrentMonthDays;
	}

	public void setNoOfCurrentMonthDays(int noOfCurrentMonthDays) {
		this.noOfCurrentMonthDays = noOfCurrentMonthDays;
	}

	public int getNoOfNextMonthDays() {
		return noOfNextMonthDays;
	}

	public void setNoOfNextMonthDays(int noOfNextMonthDays) {
		this.noOfNextMonthDays = noOfNextMonthDays;
	}

	public List<List<ScheduleCell>> getWeeks() {
		return weeks;
	}

	public void setWeeks(List<List<ScheduleCell>> weeks) {
		this.weeks = weeks;
	}

}
