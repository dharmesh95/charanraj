package com.dharmesh.charanraj.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dharmesh.charanraj.entity.Vote;

public interface VoteRepository extends MongoRepository<Vote, String> {

	List<Vote> findByEmailAndDateGreaterThan(String email, Date weekStartDate);

	List<Vote> findByDateGreaterThan(Date date);

	void deleteByEmail(String email);

}
