package com.neo.putra.views.list;

import com.neo.putra.components.LabeledValue;
import com.neo.putra.data.OrderState;
import com.neo.putra.data.Pnl;
import com.neo.putra.data.entity.SupplierPurchaseOrder;
import com.neo.putra.data.service.CrmService;
import com.neo.putra.views.MainLayout;
import com.vaadin.flow.component.grid.ColumnTextAlign;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;
import java.util.List;
import java.util.stream.Collectors;

@Component
@Scope("prototype")
@Route(value = "supplierDeliveredOrders", layout = MainLayout.class)
@PageTitle("Supplier Delivered Orders | PT. Makmur Jaya")
@PermitAll

public class SupplierDeliveredOrderView extends SupplierAbstractPurchaseOrderView {
    private CrmService service;
    private LabeledValue realizedPNL;
    private LabeledValue unrealizedPNL;
    private LabeledValue purchasePrice;
    private LabeledValue salePrice;
    private LabeledValue payment;
    public SupplierDeliveredOrderView(CrmService service) {
        super(service, "Stock Barang",
                filters -> {
                    filters.add(
                            (root, query, cb) -> cb.equal(root.<OrderState>get("orderState"), OrderState.DO));
                    return service.searchSupplierPurchaseOrders(filters);
                });
        this.service = service;
        disableAddition();
    }

    private void addPNL() {
        HorizontalLayout pnlLayout = new HorizontalLayout(purchasePrice, salePrice, payment,
                realizedPNL, unrealizedPNL);
        add(pnlLayout);
    }


    protected SupplierPurchaseOrder newEntity() {
        final SupplierPurchaseOrder po = new SupplierPurchaseOrder();
        return po;
    }

    protected void configureGrid() {
        grid.addClassNames("contact-grid");
        grid.setSizeFull();
        grid.setColumns();
        grid.addColumn(order -> date(order.getOrderDate())).setHeader("Date");
        grid.addColumn(order -> order.getProduct().getBrand()).setHeader("Brand");
        grid.addColumn(order -> order.getStockId()).setHeader("Stock ID");
        grid.addColumn(order -> order.getPurchaseQuantity()).setHeader("Jumlah pesanan");
        grid.addColumn(order -> rupiah(order.getPurchasePrice())).setHeader("Harga pesanan")
                .setTextAlign(ColumnTextAlign.END);;
        grid.addColumn(order -> rupiah(order.getDeliveredPrice())).setHeader("Harga perunit")
                .setTextAlign(ColumnTextAlign.END);;
        grid.addColumn(order -> order.getDeliveredQuantity()).setHeader("Jumlah stock awal");
        grid.addColumn(order -> rupiah(order.getCostBasis())).setHeader("Total harga pembelian")
                .setTextAlign(ColumnTextAlign.END);
        grid.addColumn(order -> order.getDeliveredQuantity() - order.getTotalSellQty()).setHeader("Sisa stock");
        grid.addColumn(order -> order.getTotalSellQty()).setHeader("Jumlah penjualan");
        grid.addColumn(order -> rupiah(order.getTotalSellPrice())).setHeader("Total harga penjualan")
                .setTextAlign(ColumnTextAlign.END);
        grid.addColumn(order -> rupiah(order.getCustomerOrders().stream()
                    .mapToDouble(co -> co.getPayments().stream().mapToDouble(p -> p.getTransaction().getAmount()).sum()).sum()
        )).setHeader("Terbayar").setTextAlign(ColumnTextAlign.END);
        grid.getColumns().forEach(col -> col.setAutoWidth(true));
    }

    @Override
    protected void save(SupplierPurchaseOrder entity) {
        service.saveSupplierPurchaseOrder(entity);
        service.save(entity.getProduct());
    }

    @Override
    protected void delete(SupplierPurchaseOrder entity) {
        service.delete(entity);
    }

    protected void updateList() {
        if (purchasePrice == null) {
            purchasePrice = new LabeledValue("Purchase Price");
            salePrice = new LabeledValue("Sale Price");
            payment = new LabeledValue("Total Payment");
            realizedPNL = new LabeledValue("Realized PNL");
            unrealizedPNL = new LabeledValue("unrealized PNL");
            addPNL();
        }
        List<SupplierPurchaseOrder> orders = getContent();
        grid.setItems(orders);
        Pnl pnl = orders.stream().map(e -> {
               e.getCustomerOrders().stream().collect(
                        Collectors.teeing(
                                Collectors.summingDouble(t -> t.getDeliveredQuantity()),
                                Collectors.summingDouble(t -> t.getDeliveredQuantity() * t.getDeliveredPrice()),
                                (q, p) -> {
                                    e.setTotalSellQty(q);
                                    e.setTotalSellPrice(p);
                                    e.setCostBasis(e.getPurchasePrice() * e.getPurchaseQuantity());
                                    return e;
                                }));
            return e;
        }).collect(Collectors.teeing(
                Collectors.summingDouble(o -> o.getCostBasis()),
                Collectors.summingDouble(SupplierPurchaseOrder::getTotalSellPrice),
                Pnl::new)
        );

        double terbayar = orders.stream().mapToDouble(o ->
                o.getCustomerOrders().stream().mapToDouble(co ->
                        co.getPayments().stream().mapToDouble(p -> p.getTransaction().getAmount()).sum()).sum()).sum();
        purchasePrice.setText(rupiah(pnl.getTotalCost()));
        salePrice.setText(rupiah(pnl.getTotalSale()));
        unrealizedPNL.setText(rupiah(pnl.unrealizedPnl()));
        realizedPNL.setText(rupiah(pnl.realizedPnl(terbayar)));
        payment.setText(rupiah(terbayar));
    }

}
