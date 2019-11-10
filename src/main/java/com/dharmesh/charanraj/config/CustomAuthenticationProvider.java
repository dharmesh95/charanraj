package com.dharmesh.charanraj.config;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import com.dharmesh.charanraj.constants.UserConstants;
import com.dharmesh.charanraj.entity.User;
import com.dharmesh.charanraj.service.UserService;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

	@Autowired
	private UserService userService;

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		String email = authentication.getName();

		if (checkUser(email)) {
			return new UsernamePasswordAuthenticationToken(email, new ArrayList<>());
		} else {
			return null;
		}
	}

	private boolean checkUser(String email) {
		User user = userService.getUserByEmail(email);
		if (null != user)
			return UserConstants.NOT_APPROVED_ROLES.stream().noneMatch(role -> role.equals(user.getRole()));
		return false;
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}

}