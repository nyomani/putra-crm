package com.neo.putra.data.entity;

import com.neo.putra.data.AbstractEntity;
import lombok.Data;

import javax.persistence.Entity;
import java.time.LocalDate;

@Entity
@Data
public class Inventory extends AbstractEntity {
    private String name;
    private String brand;
    private LocalDate purchaseDate;
    private int total;
    private double pricePerUnit;
    private String notes;

    public double value()
    {
        return total * pricePerUnit;
    }
}
