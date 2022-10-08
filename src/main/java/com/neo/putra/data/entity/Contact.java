package com.neo.putra.data.entity;

import com.neo.putra.data.AbstractEntity;
import com.neo.putra.data.ContactType;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.apache.commons.lang3.builder.HashCodeExclude;

import javax.persistence.*;
import javax.validation.constraints.Email;

@Data
@Entity
@Table(name = "Contact")
@ToString(exclude = "account")
@EqualsAndHashCode(exclude = {"account"})
public class Contact extends AbstractEntity {
    private ContactType contactType;
    private String name;
    private String firstName;
    private String lastName;
    private String address;
    @Email
    private String email;
    private String telp;
    private String taxId;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id", referencedColumnName = "id")
    private Account account;
}
