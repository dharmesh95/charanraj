package com.dharmesh.charanraj.controller;

import com.dharmesh.charanraj.entity.Recommendation;
import helper.URLHelper;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Calendar;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class RecommendationControllerTests {

    @LocalServerPort
    private int port;

    static HttpHeaders httpHeaders = new HttpHeaders();

    TestRestTemplate testRestTemplate = new TestRestTemplate();

    @BeforeClass
    public static void beforeClassMethod() {
        httpHeaders.set("Authorization", "Basic OTVkaGFybWVzaEBnbWFpbC5jb206");
    }

    @Test
    public void testCreateRecommendation() {
        Recommendation recommendation = new Recommendation("95dharmesh@gmail.com", Calendar.getInstance().getTime(), "Pav Bhaji");

        HttpEntity<Recommendation> entity = new HttpEntity<>(recommendation, httpHeaders);

        ResponseEntity<String> responseEntity = testRestTemplate.postForEntity(
                URLHelper.createURLWithPort("/api/recommendation", port),
                entity,
                String.class
        );

        Assert.assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }

}
