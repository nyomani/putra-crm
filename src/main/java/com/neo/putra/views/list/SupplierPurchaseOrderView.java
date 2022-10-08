package com.neo.putra.views.list;

import com.neo.putra.data.OrderState;
import com.neo.putra.data.entity.SupplierPurchaseOrder;
import com.neo.putra.data.service.CrmService;
import com.neo.putra.views.MainLayout;
import com.vaadin.flow.component.grid.ColumnTextAlign;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;

@Component
@Scope("prototype")
@Route(value = "supplierPurchaseOrders", layout = MainLayout.class)
@PageTitle("Supplier Purchase Orders | PT. Makmur Jaya")
@PermitAll

public class SupplierPurchaseOrderView extends SupplierAbstractPurchaseOrderView {
    private final CrmService service;
    public SupplierPurchaseOrderView(CrmService service) {
        super(service, "Purchased Order - PO",
                s -> service.searchSupplierPurchaseOrders(s));
        this.service = service;
    }

    protected SupplierPurchaseOrder newEntity() {
        final SupplierPurchaseOrder po = new SupplierPurchaseOrder();
        po.setOrderState(OrderState.PO);
        return po;
    }

    protected void configureGrid() {
        grid.addClassNames("contact-grid");
        grid.setSizeFull();
        grid.setColumns();
        grid.addColumn(order -> date(order.getOrderDate())).setHeader("Tgl Invoice");
        grid.addColumn(order -> order.getProduct().getSupplier().getName()).setHeader("Supplier");
        grid.addColumn(order -> order.getProduct().getName() + "-" + order.getProduct().getBrand()).setHeader("Produk");
        grid.addColumn(order -> order.getSoId()).setHeader("Nomor SO");
        grid.addColumn(order -> order.getInvoiceId()).setHeader("No. Invoice");
        grid.addColumn(order -> order.getTaxInvoiceId()).setHeader("No. Faktur Pajak");
        grid.addColumn(order -> order.getProduct().getUnit()).setHeader("Unit");
        grid.addColumn(order -> rupiah(order.getPurchasePrice())).setHeader("Unit Price")
                .setTextAlign(ColumnTextAlign.END);
        grid.addColumn(order -> order.getPurchaseQuantity()).setHeader("Quantity");
        grid.getColumns().forEach(col -> col.setAutoWidth(true));
    }

    @Override
    protected void save(SupplierPurchaseOrder entity) {
        service.saveSupplierPurchaseOrder(entity);
    }

    @Override
    protected void delete(SupplierPurchaseOrder entity) {
        service.delete(entity);
    }

}
