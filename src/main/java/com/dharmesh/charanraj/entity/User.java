package com.dharmesh.charanraj.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Data;

@Data
@Document(collection = "user")
public class User {

	@Id
	private String id;

	@Field("name")
	private String name;

	@Field("email")
	private String email;

	@Field("imageUrl")
	private String imageUrl;

	@Field("role")
	private String role;

	@Field("access")
	private Access access;

	public User() {
		super();
		this.access = new Access(false);
	}

}
