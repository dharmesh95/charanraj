package com.dharmesh.charanraj.controller;

import com.dharmesh.charanraj.entity.Recommendation;
import com.dharmesh.charanraj.model.Week;
import com.dharmesh.charanraj.service.RecommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@CrossOrigin
@RestController
@RequestMapping("/api/recommendation")
public class RecommendationController {

    @Autowired
    private RecommendationService recommendationService;

    @PostMapping
    public void createRecommendation(@RequestBody Recommendation recommendationObj) {
        recommendationService.addRecommendation(recommendationObj);
    }

    @DeleteMapping("/{id}")
    public void deleteRecommendation(@PathVariable String id) {
        recommendationService.deleteRecommendation(id);
    }

    @DeleteMapping
    public void deleteAllRecommendations() {
        recommendationService.deleteAllRecommendations();
    }

    @RequestMapping("/getAllRecommendations")
    public HashMap<String, Recommendation> getAllRecommendations(@RequestBody Week week) {
        return recommendationService.getAllRecommendations(week.getWeekStartDate(), week.getWeekEndDate());
    }

}
