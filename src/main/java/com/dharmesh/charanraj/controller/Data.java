package com.dharmesh.charanraj.controller;

import com.dharmesh.charanraj.constants.DataInitializationConstants;
import com.dharmesh.charanraj.entity.Recommendation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/data")
public class Data {

    @Autowired
    private RecommendationController recommendationController;

    @PostMapping("/recommendation")
    public void initFoodRecommendations() {
        List<Recommendation> recommendationList = DataInitializationConstants.getRecommendationList();

        recommendationList.forEach(recommendation -> {
            recommendationController.createRecommendation(recommendation);
        });
    }

    @DeleteMapping("/recommendation")
    public void deleteRecommendations() {
        recommendationController.deleteAllRecommendations();
    }

}
