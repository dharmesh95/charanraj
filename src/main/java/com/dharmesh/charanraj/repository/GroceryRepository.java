package com.dharmesh.charanraj.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dharmesh.charanraj.entity.Grocery;

public interface GroceryRepository extends MongoRepository<Grocery, String> {

	List<Grocery> findByDateGreaterThanOrderByDateDesc(Date dateObj);

}
