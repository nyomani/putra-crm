package com.neo.putra.data.entity;

import com.neo.putra.data.AbstractEntity;
import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import java.time.LocalDate;

@Entity
@Data
public class TransactionLog extends AbstractEntity {
    @ManyToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.MERGE)
    private Account debit;

    @ManyToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.MERGE)
    private Account credit;

    private LocalDate paymentDate;
    private LocalDate settlementDate;
    private Double amount;
}
