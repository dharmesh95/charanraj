package com.dharmesh.charanraj.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dharmesh.charanraj.entity.Grocery;
import com.dharmesh.charanraj.repository.GroceryRepository;

@Service
public class GroceryService {

	@Autowired
	private GroceryRepository groceryRepository;

	public void addItem(Grocery groceryObj) {
		groceryRepository.save(groceryObj);
	}

	public List<Grocery> getItems(Date dateObj) {
		return groceryRepository.findByDateGreaterThanOrderByDateDesc(dateObj);
	}

}
