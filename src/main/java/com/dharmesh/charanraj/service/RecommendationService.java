package com.dharmesh.charanraj.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dharmesh.charanraj.entity.Recommendation;
import com.dharmesh.charanraj.repository.RecommendationRepository;

@Service
public class RecommendationService {

	@Autowired
	private RecommendationRepository recommendationRepository;

	public void addRecommendation(Recommendation recommendationObj) {
		String foodName = recommendationObj.getFoodName().trim();
		recommendationObj.setFoodName(foodName.substring(0, 1).toUpperCase() + foodName.substring(1));
		recommendationRepository.save(recommendationObj);
	}

	public HashMap<String, Recommendation> getAllRecommendations(Date weekStartDate) {
		List<Recommendation> recommendations = recommendationRepository.findByDateGreaterThan(weekStartDate);
		/* hash map has recommendation id as key and object as value */
		HashMap<String, Recommendation> recommendationsHashMap = new HashMap<String, Recommendation>();
		recommendations.forEach(recommendation -> {
			recommendationsHashMap.put(recommendation.getId(), recommendation);
		});
		return recommendationsHashMap;
	}
}
