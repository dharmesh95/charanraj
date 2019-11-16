package com.dharmesh.charanraj.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Data;

@Data
@Document(collection = "feedback")
public class Feedback {

	@Id
	private String id;

	@Field("user")
	private User user;

	@Field("date")
	private Date date;

	@Field("feedback")
	private String feedback;

}
