package com.neo.putra.data.entity;

import com.neo.putra.data.AbstractEntity;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
@Data
public class SupplierPayment extends AbstractEntity
{
    @ManyToOne
    private SupplierPurchaseOrder purchaseOrder;
    @OneToOne
    private Transaction transaction;

    public String toString()
    {
        return getId() + "" + purchaseOrder.getProduct().getSupplier().getName() + purchaseOrder.getInvoiceId() +
                transaction.getTransactionLog().getPaymentDate() + transaction.getTransactionLog().getAmount();
    }

}
