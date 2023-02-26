package com.neo.ppln.entity;

import com.neo.ppln.dataType.Gender;
import com.neo.ppln.dataType.MarriageStatus;
import com.neo.ppln.dataType.VotingMode;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import java.time.LocalDate;

@Data
@Entity
public class Voter extends AbstractEntity {
    private String firstName="";
    private String lastName="";
    private String passport="";
    private String street="";
    private String city="";
    private String state="IL";
    private String zipCode="";
    private MarriageStatus statusPerkawinan=MarriageStatus.SUDAH;
    private String tempatLahir="";
    private LocalDate tglLahir= LocalDate.now();
    private Gender jenisKelamin;
    private String pekerjaan="";
    private String jenisCacat="Tidak Ada";
    private String alamatDiIndonesia="";
    private String noTelp="";
    private String email="";
    private Boolean mendaftar=false;
    private String  notes="";
    private VotingMode votingMode = VotingMode.TPS;
    private Boolean reject=false;
    private String activationCode="PPLN";
    private Boolean confirmed=true;
    private Boolean onlineRegistration=false;
    private Boolean pindah=false;
    private String noted;
    @OneToOne
    private Document  alnCopy;
    @OneToOne
    private Document passportCopy;
    private boolean documentNeeded;
    private boolean verified;
    @ManyToOne
    private User verifiedBy;
    private boolean possibleDuplicate;
}
