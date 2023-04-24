package com.neo.ppln.entity;

import com.neo.ppln.dataType.*;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import java.time.LocalDate;

@Data
@Entity(name = "dpsln")
public class Voter extends AbstractEntity {

    private String nkk="";
    private String nik="";
    private String passport="";
    private String nama="";
    @Column(name = "tempat_lahir")
    private String tempatLahir="";
    @Column(name = "tgl_lahir")
    private String tglLahir;
    @Column(name = "bulan_lahir")
    private String bulanLahir;
    @Column(name = "tahun_lahir")
    private String tahunLahir;
    private LocalDate birthDay;
    @Column(name = "kawin")
    private String statusPerkawinan;
    @Column(name = "jenis_kelamin")
    private String jenisKelamin;
    private MarriageStatus maritalStatus;
    private Gender gender;
    private String alamat;
    private String Street;
    private String city;
    private String state;
    @Column(name = "zip_code")
    private String zipCode;
    private String county;
    private Disability disabilitas;
    private String ektp="";
    @Column(name = "methode")
    private String methode;
    @Column(name = "ket")
    private String keterangan="";
    @Column(name = "flag_tps")
    private int flagTtps=0;
    private String negara;
    private String perwakilan;
    @Column(name = "wilayah_id")
    private int wilayahId;
    private String email="";
    private String telp="";
    private String  notes="";
    private VotingMode votingMode = VotingMode.TPS;
    private Boolean reject=false;
    private Boolean pindah=false;
    private String noted;
    @Column(name = "data_source")
    private String source;
    @OneToOne
    private Document  alnCopy;
    @OneToOne
    private Document passportCopy;
    private boolean documentNeeded;
    private boolean verified;
    @ManyToOne
    private User verifiedBy;
    private boolean possibleDuplicate;
    @Column(length=2048)
    private String geoCode;
    private VotingStatus votingStatus;
    private String nomor;
    @OneToOne
    private SnailMail mailingStatus;

}
