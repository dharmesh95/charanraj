package com.dharmesh.charanraj.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "food_recommendation")
public class Recommendation {

	@Id
	private String id;

	@Field("email")
	private String email;

	@Field("date")
	private Date date;

	@Field("food_name")
	private String foodName;

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

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getFoodName() {
		return foodName;
	}

	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}

	@Override
	public String toString() {
		return "Recommendation [id=" + id + ", email=" + email + ", date=" + date + ", foodName=" + foodName + "]";
	}

}