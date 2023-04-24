package com.neo.ppln.entity;

import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class PageCategory extends AbstractEntity {
    private String category;
    private int categoryIdx;
}
