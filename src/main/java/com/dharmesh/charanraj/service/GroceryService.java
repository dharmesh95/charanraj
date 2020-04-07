package com.dharmesh.charanraj.service;

import com.dharmesh.charanraj.entity.GroceryItem;
import com.dharmesh.charanraj.repository.GroceryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class GroceryService {

	@Autowired
	private GroceryRepository groceryRepository;

	public void addItem(GroceryItem groceryObj) {
		groceryRepository.save(groceryObj);
	}

	public List<GroceryItem> getItems(Date lastWeekStartDate, String houseId) {
		return groceryRepository.findByDateGreaterThanOrderByDateDesc(lastWeekStartDate);
	}

}
