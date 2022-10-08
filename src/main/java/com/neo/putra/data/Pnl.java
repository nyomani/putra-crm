package com.neo.putra.data;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Pnl {
    private double totalCost;
    private double totalSale;

    public double realizedPnl(double totalPayment)
    {
        return totalPayment - totalCost;
    }

    public double unrealizedPnl()
    {
        return totalSale - totalCost;
    }
}
