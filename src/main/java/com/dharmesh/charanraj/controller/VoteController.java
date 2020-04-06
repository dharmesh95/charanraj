package com.dharmesh.charanraj.controller;

import com.dharmesh.charanraj.model.VoteModel;
import com.dharmesh.charanraj.model.Week;
import com.dharmesh.charanraj.service.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

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
	public void addVote(@RequestBody VoteModel voteModel) {
		voteService.addVote(voteModel);
	}
}
