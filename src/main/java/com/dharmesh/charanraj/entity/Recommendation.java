package com.dharmesh.charanraj.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Data
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

	public Recommendation(String email, Date date, String foodName) {
		this.email = email;
		this.date = date;
		this.foodName = foodName;
	}
}