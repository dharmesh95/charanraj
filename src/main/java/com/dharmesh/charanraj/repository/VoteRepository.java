package com.dharmesh.charanraj.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dharmesh.charanraj.entity.Vote;

public interface VoteRepository extends MongoRepository<Vote, String> {

	void deleteByEmail(String email);

	List<Vote> findByDateBetween(Date weekStartDate, Date weekEndDate);

	List<Vote> findByEmailAndDateBetween(String email, Date weekStartDate, Date weekEndDate);

}
