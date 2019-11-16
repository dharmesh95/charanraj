package com.dharmesh.charanraj.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Data;

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

}