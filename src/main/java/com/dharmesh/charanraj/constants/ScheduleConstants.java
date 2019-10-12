package com.dharmesh.charanraj.constants;

import org.apache.poi.ss.usermodel.IndexedColors;

public class ScheduleConstants {

	public static short HEADER_FONT_SIZE = 36;
	public static short DAY_FONT_SIZE = 11;
	public static short DATE_FONT_SIZE = 16;
	
	public static short WHITE_COLOR = IndexedColors.WHITE.getIndex();
	public static short TEAL_COLOR = IndexedColors.TEAL.getIndex();
	public static short LIME_COLOR = IndexedColors.LIME.getIndex();
	public static short OLIVE_GREEN_COLOR = IndexedColors.OLIVE_GREEN.getIndex();
	public static short GREY_COLOR = IndexedColors.LIGHT_TURQUOISE.getIndex();

	public static int COLUMN_WIDTH = 20 * 256;

	public static int ROW_HEIGHT = 75;

	public static String[] WEEKDAYS = new String[] { "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY",
			"SUNDAY" };

	public static String SHEET_NAME = "Schedule";
	public static String NOTES_HEADER = "Notes:";

}
