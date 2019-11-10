package com.dharmesh.charanraj.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.charanraj.entity.Grocery;
import com.dharmesh.charanraj.service.GroceryService;

@CrossOrigin
@RestController
@RequestMapping("/api/grocery")
public class GroceryController {

	@Autowired
	private GroceryService groceryService;

	@RequestMapping("/addItem")
	public void addItem(@RequestBody Grocery groceryObj) {
		groceryService.addItem(groceryObj);
	}

	@RequestMapping("/getItems")
	public List<Grocery> getItems(@RequestBody Date dateObj) {
		return groceryService.getItems(dateObj);
	}

}
