package com.dharmesh.charanraj.dto;

import lombok.Data;

import java.util.Date;

@Data
public class GroceryFetchDTO {
    private String houseId;
    private Date   lastWeekStartDate;
}
