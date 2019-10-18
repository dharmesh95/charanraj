package com.dharmesh.charanraj.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dharmesh.charanraj.entity.Cleaning;

public interface CleaningRepository extends MongoRepository<Cleaning, String> {

	List<Cleaning> findByUser1IdOrUser2IdOrderByDate(String userId, String userId2);

	List<Cleaning> findAllByOrderByDate();

}
