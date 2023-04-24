package com.neo.ppln.entity;

import com.neo.ppln.dataType.SnailMailStatus;
import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class SnailMail extends AbstractEntity{
    private SnailMailStatus status;
    private String note;
}
