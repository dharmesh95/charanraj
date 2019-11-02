package com.dharmesh.charanraj.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.charanraj.entity.Recommendation;
import com.dharmesh.charanraj.entity.Vote;
import com.dharmesh.charanraj.model.VoteModel;
import com.dharmesh.charanraj.service.FoodModel;
import com.dharmesh.charanraj.service.FoodService;
import com.dharmesh.charanraj.service.RecommendationService;
import com.dharmesh.charanraj.service.VoteService;

@CrossOrigin
@RestController
@RequestMapping("/food")
public class FoodController {

	@Autowired
	private RecommendationService recommendationService;
	@Autowired
	private VoteService voteService;
	@Autowired
	private FoodService foodService;

	@RequestMapping("/getVoteData")
	public List<FoodModel> getAllRecommendations(@RequestBody VoteModel voteObj) {
		HashMap<String, Recommendation> allRecommendationMap = recommendationService
				.getAllRecommendations(voteObj.getWeek().getWeekStartDate(), voteObj.getWeek().getWeekEndDate());
		HashMap<String, Vote> allVotesByEmailMap = voteService.getAllVotesByEmail(voteObj.getEmail(),
				voteObj.getWeek().getWeekStartDate(), voteObj.getWeek().getWeekEndDate());
		HashMap<String, Double> allVotesMap = voteService.getAllVotes(voteObj.getWeek().getWeekStartDate(), voteObj.getWeek().getWeekEndDate());
		return foodService.getVoteData(allRecommendationMap, allVotesByEmailMap, allVotesMap);
	}
}
