package com.neo.ppln.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Entity
public class VoterFeedback extends AbstractEntity {
    @ManyToOne
    private Voter voterData;
    private String reporter;
    private String notes;
    private LocalDate reportDate;
    private LocalTime time;
}
