package com.neo.putra.data.entity;

import com.neo.putra.data.AbstractEntity;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDate;

@Data
@Entity
public class AbstractPayment extends AbstractEntity
{
    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;
    private LocalDate paymentDate;
    private LocalDate settlementDate;
    private Double amount;
}
