package com.neo.putra.data.entity;

import com.neo.putra.data.AbstractEntity;
import com.neo.putra.data.Unit;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Data
public class Product extends AbstractEntity
{
    private String name;
    private String brand;
    private String productCode;
    private Unit unit;
    @ManyToOne
    @JoinColumn(name = "supplier_id")
    private Contact supplier;
    private int lastStockId;

    public void incrementStockId() {
        lastStockId ++;
    }

    public String generateStockId() {
        return productCode + "-" + lastStockId;
    }
}
