package com.dharmesh.charanraj.controller;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.charanraj.constants.GoogleAPIConstants;
import com.dharmesh.charanraj.entity.Feedback;
import com.dharmesh.charanraj.service.FeedbackService;
import com.dharmesh.charanraj.service.MailService;
import com.google.api.services.gmail.Gmail;

@CrossOrigin
@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

	@Autowired
	private FeedbackService feedbackService;

	@Autowired
	private MailService mailService;

	@RequestMapping("/addFeedback")
	public void addFeedback(@RequestBody Feedback feedbackObj) {
		feedbackService.addFeedback(feedbackObj);

		String to = "95dharmesh@gmail.com";
		String subject = "<html><body>" 
				+ "From:<br />" 
				+ "Email: " + feedbackObj.getUser().getEmail() + "<br />"
				+ "Name: " + feedbackObj.getUser().getName() + "<br /><br />"
				+ "Feedback: " + feedbackObj.getFeedback() + "<br />"
				+ "</body></html>";

		try {
			Gmail gService = mailService.getService();
			MimeMessage email = mailService.createEmail(to, GoogleAPIConstants.FROM,
					GoogleAPIConstants.FEEDBACK_SUBJECT, subject);
			mailService.sendMessage(gService, GoogleAPIConstants.USER_ID, email);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (GeneralSecurityException e) {
			e.printStackTrace();
		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping("/getFeedback")
	public List<Feedback> getFeedback() {
		return feedbackService.getFeedback();
	}

}
