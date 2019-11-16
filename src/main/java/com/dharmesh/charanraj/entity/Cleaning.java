package com.dharmesh.charanraj.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Data;

@Data
@Document(collection = "cleaning")
public class Cleaning {

	@Id
	private String id;

	@Field("user1")
	private User user1;

	@Field("user2")
	private User user2;

	@Field("date")
	private Date date;

}
