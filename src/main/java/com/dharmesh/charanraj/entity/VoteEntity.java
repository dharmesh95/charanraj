package com.dharmesh.charanraj.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Data
@Document(collection = "vote")
public class VoteEntity {

	@Id
	private String id;

	@Field("recommendation_id")
	private String recommendationId;

	@Field("email")
	private String email;

	@Field("house_id")
	private String houseId;

	@Field("points")
	private double points;

	@Field("date")
	private Date date;

}
