package com.dharmesh.charanraj.entity;

import lombok.Data;

@Data
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

}
