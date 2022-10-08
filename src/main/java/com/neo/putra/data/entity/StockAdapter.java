package com.neo.putra.data.entity;


public class StockAdapter {
    private SupplierPurchaseOrder po;

    public StockAdapter(
            final SupplierPurchaseOrder po,
            final Double costBasis,
            final Double totalDeliveredQty,
            final Double totalDeliveredPrice,
            final Double totalSellQty,
            final Double totalSellPrice)
    {
        this.po = po;
        this.po.setCostBasis(costBasis == null ? 0 : costBasis);
        this.po.setTotalDeliveredQty(totalDeliveredQty == null ? 0 : totalDeliveredQty);
        this.po.setTotalDeliveredPrice(totalDeliveredPrice == null ? 0 : totalDeliveredPrice);
        this.po.setTotalSellQty(totalSellQty == null ? 0 : totalSellQty);
        this.po.setTotalSellPrice(totalSellPrice == null ? 0 : totalSellPrice);
    }

    public SupplierPurchaseOrder get()
    {
        return po;
    }
}
