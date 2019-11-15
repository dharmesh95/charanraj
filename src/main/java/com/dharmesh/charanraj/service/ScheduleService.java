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
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dharmesh.charanraj.constants.ScheduleConstants;
import com.dharmesh.charanraj.entity.Cleaning;
import com.dharmesh.charanraj.entity.User;
import com.dharmesh.charanraj.helper.ExcelSheetStyleHelper;
import com.dharmesh.charanraj.model.CalendarMonth;
import com.dharmesh.charanraj.model.ExcelPointer;
import com.dharmesh.charanraj.model.ScheduleCell;

@Service
public class ScheduleService {

	@Autowired
	private CleaningService cleaningService;

	public byte[] generate() throws FileNotFoundException, IOException {

		/* fetch cleaning schedule data */
		List<Cleaning> fullCleaningSchedule = cleaningService.getFullCleaningSchedule();

		Workbook workbook = getWorkBook(fullCleaningSchedule);

		/* convert workbook to byte array */
		byte[] byteArray;
		try (ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {
			workbook.write(outputStream);
			byteArray = outputStream.toByteArray();
		}
		return byteArray;
	}

	private Workbook getWorkBook(List<Cleaning> fullCleaningSchedule) throws FileNotFoundException, IOException {
		Workbook workbook = new XSSFWorkbook();
		Sheet sheet = workbook.createSheet(ScheduleConstants.SHEET_NAME);

		/* set year, month name, weekdays name */
		setHeaders(workbook);

		/* fetch dates in the calendar */
		CalendarMonth scheduleCalendar = getScheduleCalendar(fullCleaningSchedule);

		/* set dates */
		ExcelPointer pointer = new ExcelPointer(2, 0);
		for (List<ScheduleCell> week : scheduleCalendar.getWeeks()) {
			Row row = sheet.createRow(pointer.postIncrementRow());
			pointer.setColIndex(0);
			for (ScheduleCell scheduleCell : week) {
				Cell cell = row.createCell(pointer.postIncrementCol());
				cell.setCellValue(scheduleCell.getDateDisplayValue());
				cell.setCellStyle(ExcelSheetStyleHelper.getDateCellStyle(workbook));
			}
			row = sheet.createRow(pointer.postIncrementRow());
			row.setHeightInPoints(ScheduleConstants.ROW_HEIGHT);
			pointer.setColIndex(0);
			for (int i = 0; i < 7; i++) {
				Cell cell = row.createCell(pointer.postIncrementCol());
				if (i < week.size())
					cell.setCellValue(week.get(i).getUserName1() + "\n" + week.get(i).getUserName2());
				/* Wednesday */
				if (i == 2)
					cell.setCellStyle(ExcelSheetStyleHelper.getDataCellStyle(workbook, true));
				else
					cell.setCellStyle(ExcelSheetStyleHelper.getDataCellStyle(workbook, false));
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
		ExcelSheetStyleHelper.setBordersCellStyle(cellRangeAddress, sheet, workbook);

		pointer.postIncrementRow();
		sheet.addMergedRegion(new CellRangeAddress(pointer.getRowIndex(), pointer.getRowIndex(), pointer.getColIndex(),
				pointer.getColIndex() + 4));

		/* set styles */
		setStyles(workbook);

		return workbook;
	}

	private void setHeaders(Workbook workbook) {
		Sheet sheet = workbook.getSheet(ScheduleConstants.SHEET_NAME);
		Row row0 = sheet.createRow(0);
		Cell cell0 = row0.createCell(0);
		cell0.setCellStyle(ExcelSheetStyleHelper.getYearCellStyle(workbook));
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

	private CalendarMonth getScheduleCalendar(List<Cleaning> fullCleaningSchedule) {
		List<ScheduleCell> cells = new ArrayList<ScheduleCell>();

		Calendar cal = Calendar.getInstance();
		int noOfDaysInCurrentMonth = Month.of(cal.get(Calendar.MONTH) + 1).maxLength();
		int noOfDaysInPreviousMonth = Month.of(cal.get(Calendar.MONTH)).maxLength();

		cal.set(Calendar.DATE, 1);
		int noOfPreviousMonthDays = cal.get(Calendar.DAY_OF_WEEK) == 1 ? 6 : cal.get(Calendar.DAY_OF_WEEK) - 2;

		cal.set(Calendar.DATE, noOfDaysInCurrentMonth);
		int noOfDaysLeftInWeek = cal.get(Calendar.DAY_OF_WEEK) == 1 ? 0 : 8 - cal.get(Calendar.DAY_OF_WEEK);

		int noOfNextMonthDays = noOfDaysLeftInWeek >= 5 ? 7 - noOfDaysLeftInWeek : noOfDaysLeftInWeek + 2;

		int startPrevious = noOfDaysInPreviousMonth - noOfPreviousMonthDays + 1;
		int endPrevious = noOfDaysInPreviousMonth;
		int startNext = 1;
		int endNext = noOfNextMonthDays >= 5 ? noOfNextMonthDays - 5 : noOfNextMonthDays + 2;

		/* last month */
		for (int i = startPrevious; i <= endPrevious; i++) {
			cells.add(new ScheduleCell(i));
		}
		/* current month */
		for (int i = 1; i <= noOfDaysInCurrentMonth; i++) {
			if (i <= fullCleaningSchedule.size()) {
				Cleaning cleaningObj = fullCleaningSchedule.get(i - 1);
				if (cleaningObj != null) {
					User user1 = cleaningObj.getUser1();
					User user2 = cleaningObj.getUser2();
					if (user2 != null) {
						cells.add(new ScheduleCell(i, user1.getName(), user2.getName()));
					} else if (user1 != null) {
						cells.add(new ScheduleCell(i, user1.getName()));
					} else {
						cells.add(new ScheduleCell(i));
					}
				} else {
					cells.add(new ScheduleCell(i));
				}
			} else {
				cells.add(new ScheduleCell(i));
			}
		}
		/* next month */
		for (int i = startNext; i <= endNext; i++) {
			cells.add(new ScheduleCell(i));
		}
		List<List<ScheduleCell>> weeks = divideInWeeks(cells);

		CalendarMonth calendar = new CalendarMonth();
		calendar.setNoOfLastMonthDays(endPrevious - startPrevious + 1);
		calendar.setNoOfCurrentMonthDays(noOfDaysInCurrentMonth);
		calendar.setNoOfNextMonthDays(endNext - startNext + 1);
		calendar.setWeeks(weeks);
		return calendar;
	}

	private List<List<ScheduleCell>> divideInWeeks(List<ScheduleCell> cells) {
		List<List<ScheduleCell>> allWeekCells = new ArrayList<List<ScheduleCell>>();
		List<ScheduleCell> weekCells = null;
		for (int i = 0; i < cells.size(); i++) {
			if (i % 7 == 0) {
				weekCells = new ArrayList<ScheduleCell>();
				allWeekCells.add(weekCells);
			}
			weekCells.add(cells.get(i));
		}
		return allWeekCells;
	}

	private void setStyles(Workbook workbook) {
		Sheet sheet = workbook.getSheet(ScheduleConstants.SHEET_NAME);
		Row row0 = sheet.getRow(0);
		row0.setHeightInPoints(50);

		row0.getCell(0).setCellStyle(ExcelSheetStyleHelper.getYearCellStyle(workbook));
		row0.getCell(1).setCellStyle(ExcelSheetStyleHelper.getMonthCellStyle(workbook));

		CellRangeAddress cellRangeAddress = new CellRangeAddress(0, 0, 1, 6);
		sheet.addMergedRegion(cellRangeAddress);
		ExcelSheetStyleHelper.setBordersCellStyle(cellRangeAddress, sheet, workbook);

		Row row1 = sheet.getRow(1);
		for (int i = 0; i < 7; i++) {
			row1.getCell(i).setCellStyle(ExcelSheetStyleHelper.getHeaderCellStyle(workbook,
					i % 2 == 0 ? ScheduleConstants.LIME_COLOR : ScheduleConstants.TEAL_COLOR));
			sheet.setColumnWidth(i, ScheduleConstants.COLUMN_WIDTH);
		}
	}

}
