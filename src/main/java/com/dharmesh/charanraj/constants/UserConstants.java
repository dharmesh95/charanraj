package com.dharmesh.charanraj.constants;

import java.util.Arrays;
import java.util.List;

public class UserConstants {
	public static final String SUPER_ADMIN_USER = "S";
	public static final String ADMIN_USER = "A";
	public static final String NORMAL_USER = "N";
	public static final String REJECTED_USER = "R";
	public static final String UNKNOWN_USER = "U";

	public static final List<String> NOT_APPROVED_ROLES = Arrays.asList(
			UserConstants.REJECTED_USER,
			UserConstants.UNKNOWN_USER);
}
