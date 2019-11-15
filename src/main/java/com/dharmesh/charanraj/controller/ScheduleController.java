package com.dharmesh.charanraj.controller;

import java.io.FileNotFoundException;
import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.charanraj.service.ScheduleService;

@CrossOrigin
@RestController
@RequestMapping("/api/schedule")
public class ScheduleController {

	@Autowired
	private ScheduleService scheduleService;

	@RequestMapping(value = "/download")
	public String download(HttpServletResponse response) throws FileNotFoundException, IOException {

		byte[] byteArray = scheduleService.generate();

		return Base64.encodeBase64String(byteArray);
		
		
		/*
		 * for downloading file direct
		 * InputStream inputStream = new
		 * ByteArrayInputStream(byteArray); response.setContentType(
		 * "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
		 * response.setHeader("Content-Disposition", "attachment; filename=" +
		 * "New Schedule.xlsx"); IOUtils.copy(inputStream, response.getOutputStream());
		 * response.flushBuffer(); inputStream.close();
		 */

	}

}
