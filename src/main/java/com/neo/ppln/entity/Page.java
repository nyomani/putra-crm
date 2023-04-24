package com.neo.ppln.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Data
@Entity
public class Page extends AbstractEntity{
    private String title;
    private String category;
    private int pageIdx;
    @ManyToOne
    private PageCategory pageCategory;
    @OneToOne
    private Document document;
}
