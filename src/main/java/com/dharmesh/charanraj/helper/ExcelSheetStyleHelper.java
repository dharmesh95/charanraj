package com.dharmesh.charanraj.helper;

import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.ss.util.RegionUtil;
import org.apache.poi.xssf.usermodel.XSSFFont;

import com.dharmesh.charanraj.constants.ScheduleConstants;

public class ExcelSheetStyleHelper {

	public static CellStyle getHeaderCellStyle(Workbook wb, short color) {
		CellStyle style = wb.createCellStyle();
		style.setFont(getHeaderFont(wb));
		style.setFillForegroundColor(color);
		style.setFillPattern(CellStyle.SOLID_FOREGROUND);
		style.setAlignment(CellStyle.ALIGN_CENTER);

		style.setBorderLeft(CellStyle.BORDER_THICK);
		style.setBorderRight(CellStyle.BORDER_THICK);
		style.setLeftBorderColor(ScheduleConstants.WHITE_COLOR);
		style.setRightBorderColor(ScheduleConstants.WHITE_COLOR);

		return style;
	}

	public static CellStyle getMonthCellStyle(Workbook wb) {
		CellStyle style = wb.createCellStyle();
		style.setFont(getMonthFont(wb));
		style.setFillForegroundColor(ScheduleConstants.WHITE_COLOR);
		style.setFillPattern(CellStyle.SOLID_FOREGROUND);
		style.setAlignment(CellStyle.ALIGN_CENTER);
		return style;
	}

	public static CellStyle getYearCellStyle(Workbook wb) {
		CellStyle style = wb.createCellStyle();
		style.setFont(getYearFont(wb));
		style.setFillForegroundColor(ScheduleConstants.TEAL_COLOR);
		style.setFillPattern(CellStyle.SOLID_FOREGROUND);
		style.setAlignment(CellStyle.ALIGN_CENTER);
		return style;
	}

	public static CellStyle getDataCellStyle(Workbook wb, boolean isWednesday) {
		CellStyle style = wb.createCellStyle();
		if (isWednesday) {
			style.setFillForegroundColor(ScheduleConstants.GREY_COLOR);
			style.setFillPattern(CellStyle.SOLID_FOREGROUND);
		}
		style.setWrapText(true);
		style.setVerticalAlignment(CellStyle.VERTICAL_TOP);
		style.setBorderLeft(CellStyle.BORDER_THIN);
		style.setBorderRight(CellStyle.BORDER_THIN);
		style.setBorderBottom(CellStyle.BORDER_THIN);
		return style;
	}

	public static CellStyle getDateCellStyle(Workbook wb) {
		CellStyle style = wb.createCellStyle();
		style.setFont(getDateFont(wb, false));
		style.setAlignment(CellStyle.ALIGN_LEFT);
		style.setBorderTop(CellStyle.BORDER_THIN);
		style.setBorderLeft(CellStyle.BORDER_THIN);
		style.setBorderRight(CellStyle.BORDER_THIN);
		return style;
	}

	public static void setBordersCellStyle(CellRangeAddress cellRangeAddress, Sheet sheet, Workbook workbook) {
		RegionUtil.setBorderTop(CellStyle.BORDER_THIN, cellRangeAddress, sheet, workbook);
		RegionUtil.setBorderLeft(CellStyle.BORDER_THIN, cellRangeAddress, sheet, workbook);
		RegionUtil.setBorderRight(CellStyle.BORDER_THIN, cellRangeAddress, sheet, workbook);
	}

	public static Font getDateFont(Workbook wb, boolean isBold) {
		Font dateFont = wb.createFont();
		dateFont.setFontHeightInPoints(ScheduleConstants.DATE_FONT_SIZE);
		if (isBold) {
			dateFont.setBoldweight(XSSFFont.BOLDWEIGHT_BOLD);
		}
		return dateFont;
	}

	public static Font getYearFont(Workbook wb) {
		Font yearFont = wb.createFont();
		yearFont.setBoldweight(XSSFFont.BOLDWEIGHT_BOLD);
		yearFont.setColor(ScheduleConstants.WHITE_COLOR);
		yearFont.setFontHeightInPoints(ScheduleConstants.HEADER_FONT_SIZE);
		return yearFont;
	}

	public static Font getMonthFont(Workbook wb) {
		Font monthFont = wb.createFont();
		monthFont.setBoldweight(Font.BOLDWEIGHT_BOLD);
		monthFont.setColor(ScheduleConstants.TEAL_COLOR);
		monthFont.setFontHeightInPoints(ScheduleConstants.HEADER_FONT_SIZE);
		return monthFont;
	}

	public static Font getHeaderFont(Workbook wb) {
		Font headerFont = wb.createFont();
		headerFont.setBoldweight(Font.BOLDWEIGHT_BOLD);
		headerFont.setColor(ScheduleConstants.WHITE_COLOR);
		headerFont.setFontHeightInPoints(ScheduleConstants.DAY_FONT_SIZE);
		return headerFont;
	}
}
