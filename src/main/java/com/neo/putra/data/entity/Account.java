package com.neo.putra.data.entity;

import com.neo.putra.data.AbstractEntity;
import com.neo.putra.data.AccountType;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Data
@Entity
@EqualsAndHashCode(exclude = {"contact"})
public class Account extends AbstractEntity {
    private AccountType type;
    @ManyToOne
    private Contact contact;
    private String name;
    private String accountNumber;
    private double balance;
    private double initialBalance;
    public void debit(Double amount) {
        balance -= amount;
    }

    public void credit(Double amount) {
        balance += amount;
    }
}
