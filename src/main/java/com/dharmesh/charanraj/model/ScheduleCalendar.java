package com.dharmesh.charanraj.model;

import java.util.List;

public class ScheduleCalendar {
	private int noOfLastMonthDays;
	private int noOfCurrentMonthDays;
	private int noOfNextMonthDays;

	private List<List<Integer>> weeks;

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

	public List<List<Integer>> getWeeks() {
		return weeks;
	}

	public void setWeeks(List<List<Integer>> weeks) {
		this.weeks = weeks;
	}

}
