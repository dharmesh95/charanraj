package com.dharmesh.charanraj.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dharmesh.charanraj.entity.Cleaning;
import com.dharmesh.charanraj.entity.User;
import com.dharmesh.charanraj.repository.CleaningRepository;

@Service
public class CleaningService {

	@Autowired
	private CleaningRepository cleaningRepository;

	public void deleteAll() {
		cleaningRepository.deleteAll();
	}

	public void saveCleaningSchedule(List<Cleaning> cleaningSchedule) {
		deleteAll();
		cleaningRepository.saveAll(cleaningSchedule);
	}

	public List<Cleaning> getCleaningSchedule(User user) {
		return cleaningRepository.findByUser1IdOrUser2Id(user.getId(), user.getId());
	}

}
