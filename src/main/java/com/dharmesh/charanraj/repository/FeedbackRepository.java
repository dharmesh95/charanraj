package com.dharmesh.charanraj.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dharmesh.charanraj.entity.Feedback;

public interface FeedbackRepository extends MongoRepository<Feedback, String> {

}
