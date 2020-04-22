package com.dharmesh.charanraj.controller;

import com.dharmesh.charanraj.dto.GroceryFetchDTO;
import com.dharmesh.charanraj.entity.GroceryItem;
import com.dharmesh.charanraj.service.GroceryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/grocery")
public class GroceryController {

    @Autowired
    private GroceryService groceryService;

    @PostMapping
    public void addItem(@RequestBody GroceryItem groceryItem) {
        groceryService.addItem(groceryItem);
    }

    @PostMapping("/get")
    public List<GroceryItem> getItems(@RequestBody GroceryFetchDTO dto) {
        return groceryService.getItems(dto.getLastWeekStartDate(),
                dto.getHouseId());
    }

    @DeleteMapping
    public void deleteAllGroceryItems() {
        groceryService.deleteAllGroceryItems();
    }

}
