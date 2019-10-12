package com.dharmesh.charanraj.model;

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

	public int getRowIndex() {
		return rowIndex;
	}

	public void setRowIndex(int rowIndex) {
		this.rowIndex = rowIndex;
	}

	public int getColIndex() {
		return colIndex;
	}

	public void setColIndex(int colIndex) {
		this.colIndex = colIndex;
	}

}
