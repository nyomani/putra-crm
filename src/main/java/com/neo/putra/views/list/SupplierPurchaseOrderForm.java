package com.neo.putra.views.list;

import com.neo.putra.data.entity.Product;
import com.neo.putra.data.entity.SupplierPurchaseOrder;
import com.neo.putra.data.service.CrmService;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.BeanValidationBinder;

public class SupplierPurchaseOrderForm extends PurchaseOrderForm<SupplierPurchaseOrder> {
    private ComboBox<Product> product;
    private TextField invoiceId;

    public SupplierPurchaseOrderForm(CrmService service) {
        super(new BeanValidationBinder<>(SupplierPurchaseOrder.class));
        product.setItems(service.findAllProducts(null));
        product.setItemLabelGenerator(p -> p.getBrand());
    }

    @Override
    protected void beforeBaseComponent() {
        product = new ComboBox<>("Product");
        add(product);
        invoiceId = new TextField("Invoice Id");
        add(invoiceId);
    }
}
