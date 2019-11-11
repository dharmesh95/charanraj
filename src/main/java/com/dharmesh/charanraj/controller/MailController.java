package com.dharmesh.charanraj.controller;

import java.io.IOException;
import java.security.GeneralSecurityException;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.charanraj.constants.GoogleAPIConstants;
import com.dharmesh.charanraj.service.MailService;
import com.google.api.services.gmail.Gmail;

@CrossOrigin
@RestController
@RequestMapping("/api/mail")
public class MailController {

	@Autowired
	private MailService mailService;

	@RequestMapping("/send")
	public void sendMail() {
		String to = "dharmesh.dhaval95@gmail.com";

		try {
			Gmail gService = mailService.getService();
			MimeMessage email = mailService.createEmail(to, GoogleAPIConstants.FROM,
					GoogleAPIConstants.CLEANING_SUBJECT, GoogleAPIConstants.CLEANING_BODY_TEXT);
			mailService.sendMessage(gService, GoogleAPIConstants.USER_ID, email);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (GeneralSecurityException e) {
			e.printStackTrace();
		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}
}
