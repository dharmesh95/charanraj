package com.dharmesh.charanraj.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dharmesh.charanraj.entity.Recommendation;
import com.dharmesh.charanraj.entity.Vote;
import com.dharmesh.charanraj.model.VoteModel;

@Service
public class FoodService {

	@Autowired
	private RecommendationService recommendationService;
	@Autowired
	private VoteService voteService;

	/* return combined list of recommendations, total points and vote of the user */
	public List<FoodModel> getVoteData(VoteModel voteObj) {

		HashMap<String, Recommendation> allRecommendationMap = recommendationService
				.getAllRecommendations(voteObj.getWeek().getWeekStartDate(), voteObj.getWeek().getWeekEndDate());
		HashMap<String, Vote> allVotesByEmailMap = voteService.getAllVotesByEmail(voteObj.getUser().getEmail(),
				voteObj.getWeek().getWeekStartDate(), voteObj.getWeek().getWeekEndDate());
		HashMap<String, Double> allVotesMap = voteService.getAllVotes(voteObj.getWeek().getWeekStartDate(),
				voteObj.getWeek().getWeekEndDate());

		List<FoodModel> foodList = new ArrayList<FoodModel>();
		allRecommendationMap.keySet().forEach(recommendationKey -> {
			Recommendation recommendation = allRecommendationMap.get(recommendationKey);
			/* create food obj from recommendation */
			FoodModel foodModel = new FoodModel(recommendation);
			/* set user's vote */
			if (allVotesByEmailMap.get(recommendationKey) != null)
				foodModel.setVote(allVotesByEmailMap.get(recommendationKey).getPoints());
			/* set total points for a recommendation */
			if (allVotesMap.get(recommendationKey) != null)
				foodModel.setPoints(allVotesMap.get(recommendationKey));
			foodList.add(foodModel);
		});

		/* sort */
		Collections.sort(foodList, Collections.reverseOrder());

		return foodList;
	}

}
