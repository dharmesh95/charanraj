package com.dharmesh.charanraj.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.charanraj.entity.Vote;
import com.dharmesh.charanraj.model.Week;
import com.dharmesh.charanraj.service.VoteService;

@CrossOrigin
@RestController
@RequestMapping("/api/vote")
public class VoteController {

	@Autowired
	private VoteService voteService;

	@RequestMapping("/getAllVotes")
	public HashMap<String, Double> getAllVotes(@RequestBody Week week) {
		return voteService.getAllVotes(week.getWeekStartDate(), week.getWeekEndDate());
	}

	@RequestMapping("/addVote")
	public void addVote(@RequestBody Vote voteObj) {
		voteService.addVote(voteObj);
	}
}
