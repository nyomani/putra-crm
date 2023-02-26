package com.neo.ppln.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;

@Data
@Entity
public class Document extends AbstractEntity {
   private String fileName;
   private String mimeType;
   @Lob
   @Column(length=100000)
   private byte[] document;
   private String url;
}
