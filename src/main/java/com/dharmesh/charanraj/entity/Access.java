package com.dharmesh.charanraj.entity;

public class Access {

	private boolean food;
	private boolean grocery;
	private boolean cleaning;
	private boolean schedule;

	public boolean isFood() {
		return food;
	}

	public void setFood(boolean food) {
		this.food = food;
	}

	public boolean isGrocery() {
		return grocery;
	}

	public void setGrocery(boolean grocery) {
		this.grocery = grocery;
	}

	public boolean isCleaning() {
		return cleaning;
	}

	public void setCleaning(boolean cleaning) {
		this.cleaning = cleaning;
	}

	public boolean isSchedule() {
		return schedule;
	}

	public void setSchedule(boolean schedule) {
		this.schedule = schedule;
	}

}
