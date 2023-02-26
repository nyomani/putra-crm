package com.neo.ppln.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Data
@Entity
public class Page extends AbstractEntity{
    private String title;
    private String category;
    @OneToOne
    private Document document;
}
