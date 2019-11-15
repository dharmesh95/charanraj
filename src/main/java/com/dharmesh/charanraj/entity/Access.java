package com.dharmesh.charanraj.entity;

public class Access {

	private boolean food;
	private boolean grocery;
	private boolean cleaning;
	private boolean schedule;

	public Access() {
		super();
	}

	public Access(boolean flag) {
		super();
		if (flag) {
			this.food = true;
		}
	}

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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (cleaning ? 1231 : 1237);
		result = prime * result + (food ? 1231 : 1237);
		result = prime * result + (grocery ? 1231 : 1237);
		result = prime * result + (schedule ? 1231 : 1237);
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Access other = (Access) obj;
		if (cleaning != other.cleaning)
			return false;
		if (food != other.food)
			return false;
		if (grocery != other.grocery)
			return false;
		if (schedule != other.schedule)
			return false;
		return true;
	}
	
	

}
