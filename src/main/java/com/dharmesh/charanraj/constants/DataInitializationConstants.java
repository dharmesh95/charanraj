package com.dharmesh.charanraj.constants;

import com.dharmesh.charanraj.entity.Recommendation;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

public class DataInitializationConstants {

    public static List<Recommendation> getRecommendationList() {
        List<Recommendation> recommendationList = new ArrayList<>();

        Recommendation recommendation1 = new Recommendation("95dharmesh@gmail.com", Calendar.getInstance().getTime(), "Pani Puri");
        Recommendation recommendation2 = new Recommendation("95dharmesh@gmail.com", Calendar.getInstance().getTime(), "Vaal");
        Recommendation recommendation3 = new Recommendation("95dharmesh@gmail.com", Calendar.getInstance().getTime(), "Paneer");
        Recommendation recommendation4 = new Recommendation("95dharmesh@gmail.com", Calendar.getInstance().getTime(), "Choli");
        Recommendation recommendation5 = new Recommendation("95dharmesh@gmail.com", Calendar.getInstance().getTime(), "Pav Bhaji");

        recommendationList.add(recommendation1);
        recommendationList.add(recommendation2);
        recommendationList.add(recommendation3);
        recommendationList.add(recommendation4);
        recommendationList.add(recommendation5);

        return recommendationList;
    }

}
