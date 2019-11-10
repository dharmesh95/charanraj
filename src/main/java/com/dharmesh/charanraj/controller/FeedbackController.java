package com.dharmesh.charanraj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.charanraj.entity.Feedback;
import com.dharmesh.charanraj.service.FeedbackService;

@CrossOrigin
@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

	@Autowired
	private FeedbackService feedbackService;

	@RequestMapping("/addFeedback")
	public void addFeedback(@RequestBody Feedback feedbackObj) {
		feedbackService.addFeedback(feedbackObj);
	}

	@RequestMapping("/getFeedback")
	public List<Feedback> getFeedback() {
		return feedbackService.getFeedback();
	}

}
