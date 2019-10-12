package com.dharmesh.charanraj.model;

public class ScheduleCell {
	private int dateDisplayValue;
	private String userName1;
	private String userName2;

	public ScheduleCell(int dateDisplayValue, String userName1, String userName2) {
		super();
		this.dateDisplayValue = dateDisplayValue;
		this.userName1 = userName1;
		this.userName2 = userName2;
	}

	public ScheduleCell(int dateDisplayValue) {
		super();
		this.dateDisplayValue = dateDisplayValue;
	}

	public ScheduleCell(int dateDisplayValue, String userName1) {
		super();
		this.dateDisplayValue = dateDisplayValue;
		this.userName1 = userName1;
	}

	public int getDateDisplayValue() {
		return dateDisplayValue;
	}

	public void setDateDisplayValue(int dateDisplayValue) {
		this.dateDisplayValue = dateDisplayValue;
	}

	public String getUserName1() {
		if (userName1 == null)
			return "";
		return userName1;
	}

	public void setUserName1(String userName1) {
		this.userName1 = userName1;
	}

	public String getUserName2() {
		if (userName2 == null)
			return "";
		return userName2;
	}

	public void setUserName2(String userName2) {
		this.userName2 = userName2;
	}

}
