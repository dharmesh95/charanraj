package com.dharmesh.charanraj.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dharmesh.charanraj.entity.Feedback;
import com.dharmesh.charanraj.repository.FeedbackRepository;

@Service
public class FeedbackService {

	@Autowired
	private FeedbackRepository feedbackRepository;

	public void addFeedback(Feedback feedbackObj) {
		feedbackRepository.save(feedbackObj);
	}

	public List<Feedback> getFeedback() {
		return feedbackRepository.findTop10ByOrderByDateDesc();
	}
}
