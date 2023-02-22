package com.neo.putra.views.list;

import com.neo.putra.data.OrderState;
import com.neo.putra.data.entity.CustomerPurchaseOrder;
import com.neo.putra.data.service.CrmService;
import com.neo.putra.views.MainLayout;
import com.vaadin.flow.data.renderer.NativeButtonRenderer;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;

@Component
@Scope("prototype")
@Route(value = "customer-purchase-orders", layout = MainLayout.class)
@PageTitle("Customer Purchase Orders | PT. Makmur Jaya")
@PermitAll
public class CustomerPurchaseOrderView extends CustomerAbstractOrderView {
    final CrmService service;
    public CustomerPurchaseOrderView(final CrmService service) {
        super(service, "Purchase Orders",
                s -> service.findAllCustomerPurchaseOrders(s));
        this.service = service;
    }

    @Override
    protected void configureGrid() {
        grid.addClassNames("purchase-order-grid");
        grid.setSizeFull();
        grid.setColumns();
        grid.addColumn(order -> date(order.getOrderDate())).setHeader("Tgl");
        grid.addColumn(order -> order.getId()).setHeader("No Faktur");
        grid.addColumn(order -> order.getContact().getName()).setHeader("Nama");
        grid.addColumn(order -> order.getContact().getAddress()).setHeader("Alamat");
        grid.addColumn(order -> order.getStock().getStockId()).setHeader("Stock ID");
        grid.addColumn(order -> order.getStock().getProduct().getName()).setHeader("Product");
        grid.addColumn(order -> order.getPurchaseQuantity()).setHeader("Banyak");
        grid.addColumn(order -> rupiah(order.getPurchasePrice())).setHeader("Harga");
        grid.addColumn(order -> rupiah(order.getPurchaseQuantity() * order.getPurchasePrice())).setHeader("Jumlah");
        grid.addColumn(new NativeButtonRenderer<>(o -> rupiah(o.getPayments()
                .stream().mapToDouble(p -> p.getTransaction().getAmount().doubleValue()).sum()), click-> {
                 payment(click);
                }))
                .setHeader("Terbayar");
        grid.getColumns().forEach(col -> col.setAutoWidth(true));

    }

    @Override
    protected void save(CustomerPurchaseOrder entity) {
        service.save(entity);
    }

    @Override
    protected void delete(CustomerPurchaseOrder entity) {
        service.delete(entity);
    }

    protected CustomerPurchaseOrder newEntity() {
        final CustomerPurchaseOrder po = new CustomerPurchaseOrder();
        po.setOrderState(OrderState.PO);
        return po;
    }

}
