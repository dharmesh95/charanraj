package com.dharmesh.charanraj.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class AdminServiceTest {
	
	@Autowired
	private AdminService adminService;

	@DisplayName("Test Spring @Autowired Integration")
	@Test
	void testGet() {
		assertEquals("Hello JUnit 5", adminService.getRequests());
	}
}
