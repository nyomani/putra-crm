package com.neo.putra.views.list;

import com.neo.putra.components.ColumnFilter;
import com.neo.putra.data.OrderState;
import com.neo.putra.data.entity.Product;
import com.neo.putra.data.entity.SupplierPurchaseOrder;
import com.neo.putra.data.service.CrmService;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.grid.ColumnTextAlign;
import com.vaadin.flow.component.grid.Grid;
import org.springframework.data.jpa.domain.Specification;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;

import static com.neo.putra.data.query.SupplierOrderSpecifications.*;

public class SupplierAbstractPurchaseOrderView extends AbstractListView<SupplierPurchaseOrder> {
    private final CrmService service;
    private final DatePicker dateFilter = new DatePicker("Tanggal Transaksi");
    private final ComboBox<Product> brandFilter = new ComboBox<>("Brand");
    private final ComboBox<OrderState> orderStateFilter = new ComboBox<>("Status Order");

    public SupplierAbstractPurchaseOrderView(final CrmService service, final String title,
                                             final Function<List<Specification<SupplierPurchaseOrder>>,
                                                     List<SupplierPurchaseOrder>> contentProvider) {
        super(title,
                new Grid<>(SupplierPurchaseOrder.class),
                new SupplierPurchaseOrderForm(service),
                contentProvider);
        this.service = service;
        addFilter(new ColumnFilter<>(dateFilter, dateFilter::getValue, p -> hasDate(p)));
        addFilter(new ColumnFilter<>(brandFilter, brandFilter::getValue, p -> hasBrand(p)));
        addFilter(new ColumnFilter<>(orderStateFilter, orderStateFilter::getValue, p -> hasOrderState(p)));
        List<Product> products = service.findAllProducts(null);
        brandFilter.setItems(products);
        brandFilter.setItemLabelGenerator(p -> p == null ? "Not Selected" : p.getBrand());
        orderStateFilter.setItems(Arrays.asList(OrderState.PO, OrderState.DO));
        brandFilter.addValueChangeListener(v -> updateList());
        dateFilter.addValueChangeListener(d -> updateList());
        orderStateFilter.addValueChangeListener(d -> updateList());

        dateFilter.setClearButtonVisible(true);
        brandFilter.setClearButtonVisible(true);
        orderStateFilter.setClearButtonVisible(true);
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
        grid.addColumn(order -> order.getProduct().getName() + "-" + order.getProduct().getBrand()).setHeader("Brand");
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
