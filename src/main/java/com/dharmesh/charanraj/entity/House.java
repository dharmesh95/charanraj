package com.dharmesh.charanraj.entity;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Document(collection = "house")
public class House {

    @Field("house_name")
    private String houseName;

}
