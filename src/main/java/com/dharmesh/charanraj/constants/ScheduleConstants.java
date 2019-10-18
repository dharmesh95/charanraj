package com.dharmesh.charanraj.constants;

import org.apache.poi.ss.usermodel.IndexedColors;

public class ScheduleConstants {

	public static final short HEADER_FONT_SIZE = 36;
	public static final short DAY_FONT_SIZE = 11;
	public static final short DATE_FONT_SIZE = 16;

	public static final short WHITE_COLOR = IndexedColors.WHITE.getIndex();
	public static final short TEAL_COLOR = IndexedColors.TEAL.getIndex();
	public static final short LIME_COLOR = IndexedColors.LIME.getIndex();
	public static final short OLIVE_GREEN_COLOR = IndexedColors.OLIVE_GREEN.getIndex();
	public static final short GREY_COLOR = IndexedColors.LIGHT_TURQUOISE.getIndex();

	public static final int COLUMN_WIDTH = 20 * 256;

	public static final int ROW_HEIGHT = 75;

	public static final String[] WEEKDAYS = new String[] { "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY",
			"SATURDAY", "SUNDAY" };

	public static final String SHEET_NAME = "Schedule";
	public static final String NOTES_HEADER = "Notes:";

}
