package com.neo.putra.data.entity;

import com.neo.putra.data.AbstractEntity;
import com.neo.putra.data.TransactionType;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@ToString(exclude = "transactionLog")
public class Transaction extends AbstractEntity
{
    private TransactionType type;
    @OneToOne(fetch = FetchType.LAZY,
    cascade = CascadeType.MERGE)
    private TransactionLog transactionLog;
    private String notes;

    public Account getAccount() {
        if (type == TransactionType.DEBIT)
        {
            return transactionLog.getDebit();
        }
        return transactionLog.getCredit();
    }

    public Double getAmount()
    {
        return transactionLog.getAmount();
    }

    public LocalDate getPaymentDate()
    {
        return transactionLog.getPaymentDate();
    }
    public LocalDate getSettlementDate()
    {
        return transactionLog.getSettlementDate();
    }

    public Object getTransactionId() {
        return transactionLog.getId();
    }
}

