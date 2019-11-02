package com.dharmesh.charanraj.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import com.dharmesh.charanraj.entity.Recommendation;
import com.dharmesh.charanraj.entity.Vote;

@Service
public class FoodService {

	/* return combined list of recommendations, total points and vote of the user */
	public List<FoodModel> getVoteData(HashMap<String, Recommendation> allRecommendationMap,
			HashMap<String, Vote> allVotesByEmailMap, HashMap<String, Double> allVotesMap) {
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
		Collections.sort(foodList, Collections.reverseOrder());
		return foodList;
	}

}
