package com.dharmesh.charanraj.controller;

import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpHeaders;
import org.springframework.test.context.junit4.SpringRunner;

import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = RANDOM_PORT)
public class GroceryControllerTests {

	@LocalServerPort
	private int port;

	static HttpHeaders httpHeaders = new HttpHeaders();

	TestRestTemplate testRestTemplate = new TestRestTemplate();

	@BeforeClass
	public static void beforeClassMethod() {
		httpHeaders.set("Authorization", "Basic OTVkaGFybWVzaEBnbWFpbC5jb206");
	}

	@Test
	public void testCreateGroceryItem() {
		/*Recommendation recommendation = new Recommendation("95dharmesh@gmail.com", Calendar.getInstance().getTime(), "Pav Bhaji");

		HttpEntity<Recommendation> entity = new HttpEntity<>(recommendation, httpHeaders);

		ResponseEntity<String> responseEntity = testRestTemplate.postForEntity(
				URLHelper.createURLWithPort("/api/recommendation", port),
				entity,
				String.class
		);

		Assert.assertEquals(HttpStatus.OK, responseEntity.getStatusCode());*/
	}

}
