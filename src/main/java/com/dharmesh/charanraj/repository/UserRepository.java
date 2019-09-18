package com.dharmesh.charanraj.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dharmesh.charanraj.entity.User;

public interface UserRepository extends MongoRepository<User, String> {

	User findOneByEmail(String email);

	List<User> findByRole(String unknownUser);

	List<User> findByRoleNotIn(List<String> roles);

}
