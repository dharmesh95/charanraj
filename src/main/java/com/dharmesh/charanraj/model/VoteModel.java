package com.dharmesh.charanraj.model;

import com.dharmesh.charanraj.entity.User;
import com.dharmesh.charanraj.entity.VoteEntity;
import lombok.Data;

@Data
public class VoteModel {
    private User user;
    private Week       week;
    private VoteEntity vote;
}
