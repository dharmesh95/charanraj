package com.dharmesh.charanraj.controller;

import java.util.Date;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.charanraj.entity.Vote;
import com.dharmesh.charanraj.service.VoteService;

@CrossOrigin
@RestController
@RequestMapping("/vote")
public class VoteController {

	@Autowired
	private VoteService voteService;

	@RequestMapping("/getAllVotesByEmail")
	public HashMap<String, Vote> getAllVotesByEmail(@RequestBody Vote voteObj) {
		return voteService.getAllVotesByEmail(voteObj.getEmail(), voteObj.getDate());
	}

	@RequestMapping("/getAllVotes")
	public HashMap<String, Double> getAllVotes(@RequestBody Date weekStartDate) {
		return voteService.getAllVotes(weekStartDate);
	}

	@RequestMapping("/addVote")
	public void addVote(@RequestBody Vote voteObj) {
		voteService.addVote(voteObj);
	}
}
