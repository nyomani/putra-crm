package com.neo.putra.data.entity;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@ToString(exclude = {"stock", "payments"})
public class CustomerPurchaseOrder extends BaseOrder {
    @ManyToOne
    @JoinColumn(name = "contact_id")
    private Contact contact;
    @ManyToOne
    @JoinColumn(name = "sales_id")
    private Contact sales;
    @ManyToOne
    @JoinColumn(name = "stock_id")
    private SupplierPurchaseOrder stock;
    @OneToMany(mappedBy = "purchaseOrder", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<CustomerPayment> payments;
}
