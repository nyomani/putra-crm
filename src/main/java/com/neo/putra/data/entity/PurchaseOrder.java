package com.neo.putra.data.entity;

import com.neo.putra.data.AbstractEntity;
import com.neo.putra.data.OrderState;
import com.neo.putra.data.Side;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Data
public class PurchaseOrder extends AbstractEntity
{
    @ManyToOne
    @JoinColumn(name = "product_id")
    @NotNull
    private Product product;
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Contact contact;
    private Side side;
    private OrderState orderState;
    private LocalDate orderDate;
    private double purchasePrice;
    private double purchaseQuantity;
    private LocalDate deliveryDate;
    private double discountValue;
    private double deliveredPrice;
    private double deliveredQuantity;
    private String stockId = "";
    @Transient private double costBasis;
    @Transient private boolean transitionToDelivered = false;
    @Transient private double totalDeliveredQty;
    @Transient private double totalDeliveredPrice;
    @Transient private double totalSellQty;
    @Transient private double totalSellPrice;

}
