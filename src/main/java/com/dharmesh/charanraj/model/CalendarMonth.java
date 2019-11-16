package com.dharmesh.charanraj.model;

import java.util.List;

import lombok.Data;

@Data
public class CalendarMonth {
	private int noOfLastMonthDays;
	private int noOfCurrentMonthDays;
	private int noOfNextMonthDays;

	private List<List<ScheduleCell>> weeks;

}
