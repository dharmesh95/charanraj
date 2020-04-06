package com.dharmesh.charanraj.repository;

import com.dharmesh.charanraj.entity.VoteEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface VoteRepository extends MongoRepository<VoteEntity, String> {

	void deleteByEmail(String email);

	List<VoteEntity> findByDateBetween(Date weekStartDate, Date weekEndDate);

	List<VoteEntity> findByEmailAndDateBetween(String email, Date weekStartDate, Date weekEndDate);

}
