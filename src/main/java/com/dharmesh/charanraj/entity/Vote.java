package com.dharmesh.charanraj.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Data;

@Data
@Document(collection = "vote")
public class Vote {

	@Id
	private String id;

	@Field("recommendation_id")
	private String recommendationId;

	@Field("email")
	private String email;

	@Field("points")
	private double points;

	@Field("date")
	private Date date;

}
