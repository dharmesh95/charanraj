package com.dharmesh.charanraj.service;

import com.dharmesh.charanraj.constants.VoteConstants;
import com.dharmesh.charanraj.entity.VoteEntity;
import com.dharmesh.charanraj.model.VoteModel;
import com.dharmesh.charanraj.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

@Service
public class VoteService {

	@Autowired
	private VoteRepository voteRepository;

	public void addVote(VoteModel voteObj) {
		VoteEntity vote = voteObj.getVote();
		vote.setHouseId(voteObj.getUser().getHouseId());
		voteRepository.save(vote);
	}

	/* returns a map with recommendation id as key and total points as value */
	public HashMap<String, Double> getAllVotes(Date weekStartDate, Date weekEndDate) {
		List<VoteEntity> votes = voteRepository.findByDateBetween(weekStartDate, weekEndDate);

		/* hash map has recommendation id & email as key and object as value */
		HashMap<String, VoteEntity> votesHashMap = new HashMap<String, VoteEntity>();

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

	/*
	 * returns a map with all votes for an email id - recommendation id as key and
	 * vote object
	 */
	public HashMap<String, VoteEntity> getAllVotesByEmail(String email, Date weekStartDate, Date weekEndDate) {
		List<VoteEntity> votes = voteRepository.findByEmailAndDateBetween(email, weekStartDate, weekEndDate);
		/* hash map has recommendation id as key and object as value */
		HashMap<String, VoteEntity> votesHashMap = new HashMap<String, VoteEntity>();
		votes.forEach(vote -> {
			votesHashMap.put(vote.getRecommendationId(), vote);
		});
		return votesHashMap;
	}
}
