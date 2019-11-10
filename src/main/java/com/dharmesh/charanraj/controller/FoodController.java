package com.dharmesh.charanraj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.charanraj.model.VoteModel;
import com.dharmesh.charanraj.service.FoodModel;
import com.dharmesh.charanraj.service.FoodService;

@CrossOrigin
@RestController
@RequestMapping("/api/food")
public class FoodController {

	@Autowired
	private FoodService foodService;

	@RequestMapping("/getVoteData")
	public List<FoodModel> getAllRecommendations(@RequestBody VoteModel voteObj) {
		return foodService.getVoteData(voteObj);
	}
}
