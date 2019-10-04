package com.dharmesh.charanraj.controller;

import java.io.ByteArrayInputStream;
import java.io.IOException;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.charanraj.service.ScheduleService;

@CrossOrigin
@RestController
@RequestMapping("/schedule")
public class ScheduleController {
	@Autowired
	private ScheduleService scheduleService;

	@RequestMapping("/download")
	public ResponseEntity<ByteArrayInputStream> download() {
		try {
			ByteArrayInputStream excel = scheduleService.getExcel();
			HttpHeaders headers = new HttpHeaders();
			// set filename in header
			headers.add("Content-Disposition", "attachment; filename=users.xlsx");
			return ResponseEntity.ok().headers(headers).body(excel);
		} catch (InvalidFormatException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
}
