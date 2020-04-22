package com.dharmesh.charanraj.controller;

import com.dharmesh.charanraj.constants.DataInitializationConstants;
import com.dharmesh.charanraj.entity.GroceryItem;
import com.dharmesh.charanraj.entity.Recommendation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/data")
public class DataController {

    @Autowired
    private RecommendationController recommendationController;

    @Autowired
    private GroceryController groceryController;

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

    @PostMapping("/grocery")
    public void initGroceryItems() {
        List<GroceryItem> groceryItems = DataInitializationConstants.getGroceryItems();

        groceryItems.forEach(groceryItem -> {
//            groceryController.addItem(groceryItem);
        });
    }

    @DeleteMapping("/grocery")
    public void deleteGroceryItems() {
        groceryController.deleteAllGroceryItems();
    }

}
