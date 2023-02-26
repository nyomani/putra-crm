package com.neo.ppln.entity;

import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
public class VoterEntryLog extends AbstractEntity {
    @ManyToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.MERGE)
    private Voter voter;
    private String userId;
    private LocalDate date;
    private LocalDateTime time;
    private String notes;
}
