package com.dharmesh.charanraj.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Data
@Document(collection = "grocery")
public class GroceryItem {

	@Id
	private String id;

	@Field("user")
	private User user;

	@Field("date")
	private Date date;

	@Field("item-name")
	private String itemName;

}
