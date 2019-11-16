package com.dharmesh.charanraj.model;

import lombok.Data;

@Data
public class ExcelPointer {
	private int rowIndex;
	private int colIndex;

	public ExcelPointer() {
		super();
		this.rowIndex = 0;
		this.colIndex = 0;
	}

	public ExcelPointer(int rowIndex, int colIndex) {
		super();
		this.rowIndex = rowIndex;
		this.colIndex = colIndex;
	}

	public int postIncrementRow() {
		return this.rowIndex++;
	}

	public int postDecrementRow() {
		return this.rowIndex--;
	}

	public int postIncrementCol() {
		return this.colIndex++;
	}

	public int postDecrementCol() {
		return this.colIndex--;
	}

}
