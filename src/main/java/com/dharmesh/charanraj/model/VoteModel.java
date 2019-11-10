package com.dharmesh.charanraj.model;

import com.dharmesh.charanraj.entity.User;

public class VoteModel {
	private User user;
	private Week week;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Week getWeek() {
		return week;
	}

	public void setWeek(Week week) {
		this.week = week;
	}

}
