package com.dharmesh.charanraj.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.dharmesh.charanraj.constants.UserConstants;
import com.dharmesh.charanraj.entity.User;
import com.dharmesh.charanraj.repository.UserRepository;

@SpringBootTest
public class AdminServiceMockTest {

	@Mock
	private UserRepository userRepository;

	@InjectMocks
	private AdminService adminService = new AdminService();

	@BeforeEach
	void setMockOutput() {
		List<User> users = new ArrayList<User>();
		users.add(new User());
		when(userRepository.findByRole(UserConstants.UNKNOWN_USER)).thenReturn(users);
	}

	@DisplayName("Test Mock adminService + userRepository")
	@Test
	void testGetRequests() {
		List<User> users = new ArrayList<User>();
		users.add(new User());
		assertEquals(users, adminService.getRequests());
	}

}
