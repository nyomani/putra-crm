package com.neo.putra.views.list;

import com.neo.putra.data.ContactType;
import com.neo.putra.data.entity.Contact;
import com.neo.putra.data.entity.CustomerPurchaseOrder;
import com.neo.putra.data.entity.SupplierPurchaseOrder;
import com.neo.putra.data.service.CrmService;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.data.binder.BeanValidationBinder;

import java.util.Arrays;


public class CustomerPurchaseOrderForm extends PurchaseOrderForm<CustomerPurchaseOrder> {
    private ComboBox<SupplierPurchaseOrder> stock;
    private ComboBox<Contact> contact;
    private ComboBox<Contact> sales;
    public CustomerPurchaseOrderForm(final CrmService service) {
        super(new BeanValidationBinder<>(CustomerPurchaseOrder.class));
        stock.setItems(service.findStocks());
        stock.setItemLabelGenerator(item -> item.getStockId());
        contact.setItems(service.searchContacts(
                Arrays.asList((root, query, criteriaBuilder) ->
                        criteriaBuilder.equal(root.<ContactType>get("contactType"), ContactType.CUSTOMER))));
        contact.setItemLabelGenerator(e -> e.getName());

        sales.setItems(service.searchContacts(
                Arrays.asList((root, query, criteriaBuilder) ->
                        criteriaBuilder.equal(root.<ContactType>get("contactType"), ContactType.SALES))));
        sales.setItemLabelGenerator(e -> e.getName());
    }

    @Override
    protected void beforeBaseComponent() {
        stock = new ComboBox<>("Stock");
        contact = new ComboBox<>("Client");
        sales = new ComboBox<>("Sales");
        add(contact, sales, stock);
    }
}
