package com.dharmesh.charanraj.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dharmesh.charanraj.constants.VoteConstants;
import com.dharmesh.charanraj.entity.Vote;
import com.dharmesh.charanraj.repository.VoteRepository;

@Service
public class VoteService {

	@Autowired
	private VoteRepository voteRepository;

	public void addVote(Vote voteObj) {
		voteRepository.save(voteObj);
	}

	public HashMap<String, Vote> getAllVotesByEmail(String email, Date weekStartDate) {
		List<Vote> votes = voteRepository.findByEmailAndDateGreaterThan(email, weekStartDate);
		/* hash map has recommendation id as key and object as value */
		HashMap<String, Vote> votesHashMap = new HashMap<String, Vote>();
		votes.forEach(vote -> {
			votesHashMap.put(vote.getRecommendationId(), vote);
		});
		return votesHashMap;
	}

	public HashMap<String, Double> getAllVotes(Date weekStartDate) {
		List<Vote> votes = voteRepository.findByDateGreaterThan(weekStartDate);
		/* hash map has recommendation id & email as key and object as value */
		HashMap<String, Vote> votesHashMap = new HashMap<String, Vote>();
		/* hash map has recommendation id as key and points as value */
		HashMap<String, Double> votesCountHashMap = new HashMap<String, Double>();
		votes.forEach(vote -> {
			votesHashMap.put(vote.getRecommendationId() + VoteConstants.SEPARATOR + vote.getEmail(), vote);
		});
		votesHashMap.forEach((key, vote) -> {
			Double prevPoints = votesCountHashMap.get(vote.getRecommendationId());
			votesCountHashMap.put(vote.getRecommendationId(), (prevPoints != null ? prevPoints : 0) + vote.getPoints());
		});
		return votesCountHashMap;
	}
}
