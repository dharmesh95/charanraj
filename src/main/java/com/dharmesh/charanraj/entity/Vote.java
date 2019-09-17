package com.dharmesh.charanraj.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

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

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getRecommendationId() {
		return recommendationId;
	}

	public void setRecommendationId(String recommendationId) {
		this.recommendationId = recommendationId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public double getPoints() {
		return points;
	}

	public void setPoints(double points) {
		this.points = points;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Vote [id=" + id + ", recommendationId=" + recommendationId + ", email=" + email + ", points=" + points
				+ ", date=" + date + "]";
	}

}
