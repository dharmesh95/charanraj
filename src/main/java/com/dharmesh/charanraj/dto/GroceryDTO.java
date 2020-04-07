package com.dharmesh.charanraj.dto;

import com.dharmesh.charanraj.entity.GroceryItem;
import lombok.Data;

import java.util.Date;

@Data
public class GroceryDTO {
    private GroceryItem groceryItem;
    private Date        lastWeekStartDate;
}
