package com.dharmesh.charanraj.service;

import java.util.Date;

import com.dharmesh.charanraj.entity.Recommendation;

public class FoodModel implements Comparable<FoodModel> {

	private String id;
	private String email;
	private String foodName;
	private double points;
	private double vote;
	private Date date;

	public FoodModel(Recommendation recommendation) {
		super();
		this.id = recommendation.getId();
		this.email = recommendation.getEmail();
		this.foodName = recommendation.getFoodName();
		this.date = recommendation.getDate();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFoodName() {
		return foodName;
	}

	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}

	public double getPoints() {
		return points;
	}

	public void setPoints(double points) {
		this.points = points;
	}

	public double getVote() {
		return vote;
	}

	public void setVote(double vote) {
		this.vote = vote;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	@Override
	public int compareTo(FoodModel o) {
		return (int) (this.points - o.points);
	}

}
