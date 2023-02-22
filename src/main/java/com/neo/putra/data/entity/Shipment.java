package com.neo.putra.data.entity;

import com.helger.commons.annotation.MustBeLocked;
import com.neo.putra.data.AbstractEntity;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
@Data
public class Shipment extends AbstractEntity
{
    @ManyToOne
    private Contact contact;
    @OneToOne
    private SupplierPurchaseOrder order;
    private String containerId;
    @OneToOne
    private Transaction transaction;
}
