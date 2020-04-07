package com.dharmesh.charanraj.repository;

import com.dharmesh.charanraj.entity.GroceryItem;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface GroceryRepository extends MongoRepository<GroceryItem, String> {

	List<GroceryItem> findByDateGreaterThanOrderByDateDesc(Date dateObj);

}
