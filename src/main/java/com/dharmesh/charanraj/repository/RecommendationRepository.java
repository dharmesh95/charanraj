package com.dharmesh.charanraj.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dharmesh.charanraj.entity.Recommendation;

public interface RecommendationRepository extends MongoRepository<Recommendation, String> {

	List<Recommendation> findByDateBetween(Date weekStartDate, Date weekEndDate);

}
