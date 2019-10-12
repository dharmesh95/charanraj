package com.dharmesh.charanraj.service;

import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.time.Month;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.ss.util.RegionUtil;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dharmesh.charanraj.constants.ScheduleConstants;
import com.dharmesh.charanraj.entity.Cleaning;
import com.dharmesh.charanraj.model.ExcelPointer;
import com.dharmesh.charanraj.model.ScheduleCalendar;

@Service
public class ScheduleService {

	@Autowired
	private CleaningService cleaningService;

	public byte[] generate() throws FileNotFoundException, IOException {
		Workbook workbook = new XSSFWorkbook();
		Sheet sheet = workbook.createSheet(ScheduleConstants.SHEET_NAME);

		/* set year, month name, weekdays name */
		setHeaders(workbook);

		/* fetch dates in the calendar */
		ScheduleCalendar scheduleCalendar = getScheduleCalendar();
		/* fetch cleaning schedule data */
		List<Cleaning> fullCleaningSchedule = cleaningService.getFullCleaningSchedule();

		/* set dates */
		ExcelPointer pointer = new ExcelPointer(2, 0);
		for (List<Integer> week : scheduleCalendar.getWeeks()) {
			Row row = sheet.createRow(pointer.postIncrementRow());
			pointer.setColIndex(0);
			for (Integer date : week) {
				Cell cell = row.createCell(pointer.postIncrementCol());
				cell.setCellValue(date);
				cell.setCellStyle(getDateCellStyle(workbook));
			}
			row = sheet.createRow(pointer.postIncrementRow());
			row.setHeightInPoints(ScheduleConstants.ROW_HEIGHT);
			pointer.setColIndex(0);
			for (int i = 0; i < 7; i++) {
				Cell cell = row.createCell(pointer.postIncrementCol());
				/* Wednesday */
				if (i == 2)
					cell.setCellStyle(getDataCellStyle(workbook, true));
				else
					cell.setCellStyle(getDataCellStyle(workbook, false));
			}
		}

		/* add footer for notes */
		pointer.setRowIndex(pointer.getRowIndex() - 2);
		pointer.setColIndex(pointer.getColIndex() - 5);
		Row secondLastRow = sheet.getRow(pointer.getRowIndex());
		Cell cell = secondLastRow.createCell(pointer.getColIndex());
		cell.setCellValue(ScheduleConstants.NOTES_HEADER);
		CellRangeAddress cellRangeAddress = new CellRangeAddress(pointer.getRowIndex(), pointer.getRowIndex(),
				pointer.getColIndex(), pointer.getColIndex() + 4);
		sheet.addMergedRegion(cellRangeAddress);
		setBordersCellStyle(cellRangeAddress, sheet, workbook);

		pointer.postIncrementRow();
		sheet.addMergedRegion(new CellRangeAddress(pointer.getRowIndex(), pointer.getRowIndex(), pointer.getColIndex(),
				pointer.getColIndex() + 4));

		/* set styles */
		setStyles(workbook);

		/* convert workbook to byte array */
		try (ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {
			workbook.write(outputStream);
			return outputStream.toByteArray();
		}
	}

	private void setHeaders(Workbook workbook) {
		Sheet sheet = workbook.getSheet(ScheduleConstants.SHEET_NAME);
		Row row0 = sheet.createRow(0);
		Cell cell0 = row0.createCell(0);
		cell0.setCellStyle(getYearCellStyle(workbook));
		cell0.setCellStyle(workbook.createCellStyle());
		cell0.setCellValue(Calendar.getInstance().get(Calendar.YEAR));
		Cell cell1 = row0.createCell(1);
		cell1.setCellValue(new SimpleDateFormat("MMMM").format(Calendar.getInstance().getTime()));

		Row row1 = sheet.createRow(1);
		int columnCount = 0;
		for (String header : ScheduleConstants.WEEKDAYS) {
			Cell cell = row1.createCell(columnCount++);
			cell.setCellValue(header);
		}
	}

	private ScheduleCalendar getScheduleCalendar() {
		List<Integer> dates = new ArrayList<Integer>();

		Calendar cal = Calendar.getInstance();
		int noOfDaysInCurrentMonth = Month.of(cal.get(Calendar.MONTH) + 1).maxLength();
		int noOfDaysInPreviousMonth = Month.of(cal.get(Calendar.MONTH)).maxLength();

		cal.set(Calendar.DATE, 1);
		int noOfPreviousMonthDays = cal.get(Calendar.DAY_OF_WEEK) == 1 ? 6 : cal.get(Calendar.DAY_OF_WEEK) - 2;

		cal.set(Calendar.DATE, noOfDaysInCurrentMonth);
		int noOfDaysLeftInWeek = cal.get(Calendar.DAY_OF_WEEK) == 1 ? 0 : 8 - cal.get(Calendar.DAY_OF_WEEK);

		int noOfNextMonthDays = noOfDaysLeftInWeek >= 5 ? 7 - noOfDaysLeftInWeek : cal.get(Calendar.DAY_OF_WEEK) - 2;

		int startPrevious = noOfDaysInPreviousMonth - noOfPreviousMonthDays + 1;
		int endPrevious = noOfDaysInPreviousMonth;
		int startNext = 1;
		int endNext = noOfNextMonthDays >= 5 ? noOfNextMonthDays - 5 : noOfNextMonthDays + 2;

		/* last month */
		for (int i = startPrevious; i <= endPrevious; i++) {
			dates.add(i);
		}
		/* current month */
		for (int i = 1; i <= noOfDaysInCurrentMonth; i++) {
			dates.add(i);
		}
		/* next month */
		for (int i = startNext; i <= endNext; i++) {
			dates.add(i);
		}
		List<List<Integer>> weeks = divideInWeeks(dates);

		ScheduleCalendar calendar = new ScheduleCalendar();
		calendar.setNoOfLastMonthDays(endPrevious - startPrevious + 1);
		calendar.setNoOfCurrentMonthDays(noOfDaysInCurrentMonth);
		calendar.setNoOfNextMonthDays(endNext - startNext + 1);
		calendar.setWeeks(weeks);
		return calendar;
	}

	private List<List<Integer>> divideInWeeks(List<Integer> dates) {
		List<List<Integer>> weeks = new ArrayList<List<Integer>>();
		List<Integer> week = null;
		for (int i = 0; i < dates.size(); i++) {
			if (i % 7 == 0) {
				week = new ArrayList<Integer>();
				weeks.add(week);
			}
			week.add(dates.get(i));
		}
		return weeks;
	}

	private void setStyles(Workbook workbook) {
		Sheet sheet = workbook.getSheet(ScheduleConstants.SHEET_NAME);
		Row row0 = sheet.getRow(0);
		row0.setHeightInPoints(50);

		row0.getCell(0).setCellStyle(getYearCellStyle(workbook));
		row0.getCell(1).setCellStyle(getMonthCellStyle(workbook));

		CellRangeAddress cellRangeAddress = new CellRangeAddress(0, 0, 1, 6);
		sheet.addMergedRegion(cellRangeAddress);
		setBordersCellStyle(cellRangeAddress, sheet, workbook);

		Row row1 = sheet.getRow(1);
		for (int i = 0; i < 7; i++) {
			row1.getCell(i).setCellStyle(getHeaderCellStyle(workbook,
					i % 2 == 0 ? ScheduleConstants.LIME_COLOR : ScheduleConstants.TEAL_COLOR));
			sheet.setColumnWidth(i, ScheduleConstants.COLUMN_WIDTH);
		}
	}

	private CellStyle getHeaderCellStyle(Workbook wb, short color) {
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

	private CellStyle getMonthCellStyle(Workbook wb) {
		CellStyle style = wb.createCellStyle();
		style.setFont(getMonthFont(wb));
		style.setFillForegroundColor(ScheduleConstants.WHITE_COLOR);
		style.setFillPattern(CellStyle.SOLID_FOREGROUND);
		style.setAlignment(CellStyle.ALIGN_CENTER);
		return style;
	}

	private CellStyle getYearCellStyle(Workbook wb) {
		CellStyle style = wb.createCellStyle();
		style.setFont(getYearFont(wb));
		style.setFillForegroundColor(ScheduleConstants.TEAL_COLOR);
		style.setFillPattern(CellStyle.SOLID_FOREGROUND);
		style.setAlignment(CellStyle.ALIGN_CENTER);
		return style;
	}

	private CellStyle getDataCellStyle(Workbook wb, boolean isWednesday) {
		CellStyle style = wb.createCellStyle();
		if (isWednesday) {
			style.setFillForegroundColor(ScheduleConstants.GREY_COLOR);
			style.setFillPattern(CellStyle.SOLID_FOREGROUND);
		}
		style.setBorderLeft(CellStyle.BORDER_THIN);
		style.setBorderRight(CellStyle.BORDER_THIN);
		style.setBorderBottom(CellStyle.BORDER_THIN);
		return style;
	}

	private CellStyle getDateCellStyle(Workbook wb) {
		CellStyle style = wb.createCellStyle();
		style.setFont(getDateFont(wb, false));
		style.setAlignment(CellStyle.ALIGN_LEFT);
		style.setBorderTop(CellStyle.BORDER_THIN);
		style.setBorderLeft(CellStyle.BORDER_THIN);
		style.setBorderRight(CellStyle.BORDER_THIN);
		return style;
	}

	private void setBordersCellStyle(CellRangeAddress cellRangeAddress, Sheet sheet, Workbook workbook) {
		RegionUtil.setBorderTop(CellStyle.BORDER_THIN, cellRangeAddress, sheet, workbook);
		RegionUtil.setBorderLeft(CellStyle.BORDER_THIN, cellRangeAddress, sheet, workbook);
		RegionUtil.setBorderRight(CellStyle.BORDER_THIN, cellRangeAddress, sheet, workbook);
	}

	private Font getDateFont(Workbook wb, boolean isBold) {
		Font dateFont = wb.createFont();
		dateFont.setFontHeightInPoints(ScheduleConstants.DATE_FONT_SIZE);
		if (isBold) {
			dateFont.setBoldweight(XSSFFont.BOLDWEIGHT_BOLD);
		}
		return dateFont;
	}

	private Font getYearFont(Workbook wb) {
		Font yearFont = wb.createFont();
		yearFont.setBoldweight(XSSFFont.BOLDWEIGHT_BOLD);
		yearFont.setColor(ScheduleConstants.WHITE_COLOR);
		yearFont.setFontHeightInPoints(ScheduleConstants.HEADER_FONT_SIZE);
		return yearFont;
	}

	private Font getMonthFont(Workbook wb) {
		Font monthFont = wb.createFont();
		monthFont.setBoldweight(Font.BOLDWEIGHT_BOLD);
		monthFont.setColor(ScheduleConstants.TEAL_COLOR);
		monthFont.setFontHeightInPoints(ScheduleConstants.HEADER_FONT_SIZE);
		return monthFont;
	}

	private Font getHeaderFont(Workbook wb) {
		Font headerFont = wb.createFont();
		headerFont.setBoldweight(Font.BOLDWEIGHT_BOLD);
		headerFont.setColor(ScheduleConstants.WHITE_COLOR);
		headerFont.setFontHeightInPoints(ScheduleConstants.DAY_FONT_SIZE);
		return headerFont;
	}

}
