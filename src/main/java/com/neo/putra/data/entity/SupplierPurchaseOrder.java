package com.neo.putra.data.entity;

import com.neo.putra.data.OrderState;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Data
@ToString(exclude = "customerOrders")
public class SupplierPurchaseOrder extends BaseOrder
{
    @ManyToOne
    @JoinColumn(name = "product_id")
    @NotNull
    private Product product;
    private String stockId;
    private LocalDate deliveryDate;
    private double discountValue;
    private double deliveredPrice;
    private double deliveredQuantity;
    @OneToMany(mappedBy = "stock", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private List<CustomerPurchaseOrder> customerOrders;

    @OneToMany(mappedBy = "purchaseOrder", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private List<SupplierPayment> payments;
    @Transient
    private double totalDeliveredQty;
    @Transient private double totalDeliveredPrice;
    @Transient private double totalSellQty;
    @Transient private double totalSellPrice;


    public void setOrderState(final OrderState newState)
    {
        if ((getOrderState() != newState) && newState == OrderState.DO)
        {
            super.setOrderState(newState);
            setStockId(product.generateStockId());
            product.incrementStockId();
        }
    }
}
