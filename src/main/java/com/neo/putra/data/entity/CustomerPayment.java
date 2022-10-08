package com.neo.putra.data.entity;

import com.neo.putra.data.AbstractEntity;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Data
@Entity
public class CustomerPayment extends AbstractEntity
{
    @ManyToOne
    @JoinColumn(name = "order_id")
    private CustomerPurchaseOrder purchaseOrder;
    @OneToOne
    private Transaction transaction;

    public int hashCode() {
        if (getId() != null) {
            return getId().hashCode();
        }
        return super.hashCode();
    }

    public String toString()
    {
        return getId() + "" + purchaseOrder.getContact() + purchaseOrder.getStock() +
                transaction.getTransactionLog().getPaymentDate() + transaction.getTransactionLog().getAmount();
    }

}
