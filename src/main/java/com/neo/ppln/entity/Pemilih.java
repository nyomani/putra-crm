package com.neo.ppln.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity(name = "data-pemilih")
@Data
public class Pemilih extends AbstractEntity{
    @Column(name = "NKK")
    private String nkk;
    @Column(name = "NIK")
     private String nik;
    @Column(name = "PASPOR / BERLAKU")
     private String passport;
    @Column(name = "NAMA")
     private String nama;
    @Column(name = "TMPLHR")
     private String tempatLahir;
    @Column(name = "TGLLHR")
     private String tglLahir;
    @Column(name = "STS")
     private String statusPernikahan;
    @Column(name = "L/P")
     private String jenisKelamit;
     @Column(name = "ALAMAT")
     private String alamat;
    @Column(name = "DIS")
     private String jenisCacat;
    @Column(name = "EKTP")
     private String ktp;
    @Column(name = "TELP")
     private String telp;
}
