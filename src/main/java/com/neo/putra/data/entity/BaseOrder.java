package com.neo.putra.data.entity;

import com.neo.putra.data.AbstractEntity;
import com.neo.putra.data.OrderState;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

import javax.persistence.MappedSuperclass;
import javax.persistence.Transient;
import java.time.LocalDate;
import java.util.Date;

@Data
@MappedSuperclass
public class BaseOrder extends AbstractEntity {
    @Setter(AccessLevel.NONE)
    private OrderState orderState = OrderState.PO;
    private LocalDate orderDate;
    private String invoiceId;
    private String soId;
    private String taxInvoiceId;
    private double purchasePrice;
    private double purchaseQuantity;
    private LocalDate deliveryDate;
    private double discountValue;
    private double deliveredPrice;
    private double deliveredQuantity;
    private double returnQuantity;
    private double returnPrice;

    @Transient
    private double costBasis;

    public void setOrderState(final OrderState newState)
    {
        this.orderState = newState;
    }
}
