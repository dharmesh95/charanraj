package com.dharmesh.charanraj.controller;

import com.dharmesh.charanraj.dto.GroceryDTO;
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
    public List<GroceryItem> addItem(@RequestBody GroceryDTO groceryDTO) {
        groceryService.addItem(groceryDTO.getGroceryItem());
        return getItems(groceryDTO);
    }

    @PostMapping("/get")
    public List<GroceryItem> getItems(@RequestBody GroceryDTO groceryDTO) {
        return groceryService.getItems(groceryDTO.getLastWeekStartDate(),
                groceryDTO.getGroceryItem().getUser().getHouseId());
    }

}
