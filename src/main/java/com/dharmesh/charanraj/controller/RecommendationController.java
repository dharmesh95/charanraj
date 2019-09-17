package com.dharmesh.charanraj.controller;

import java.util.Date;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.charanraj.entity.Recommendation;
import com.dharmesh.charanraj.service.RecommendationService;

@CrossOrigin
@RestController
@RequestMapping("/recommendation")
public class RecommendationController {

	@Autowired
	private RecommendationService recommendationService;

	@RequestMapping("/addRecommendation")
	public void recommend(@RequestBody Recommendation recommendationObj) {
		recommendationService.addRecommendation(recommendationObj);
	}

	@RequestMapping("/getAllRecommendations")
	public HashMap<String, Recommendation> getAllRecommendations(@RequestBody Date weekStartDate) {
		return recommendationService.getAllRecommendations(weekStartDate);
	}

}
