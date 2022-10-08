package com.neo.putra.views.list;

import com.neo.putra.data.OrderState;
import com.neo.putra.data.entity.BaseOrder;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.data.binder.BeanValidationBinder;

import java.util.Arrays;

public abstract class PurchaseOrderForm<T extends BaseOrder> extends AbstractForm<T> {

    protected ComboBox<OrderState> orderState = new ComboBox<>("Order State");
    protected DatePicker orderDate = new DatePicker("Order Date");
    protected NumberField purchasePrice = new NumberField("Unit Price");
    protected NumberField purchaseQuantity = new NumberField("Quantity");
    protected DatePicker deliveryDate = new DatePicker("Delivery Date");
    protected NumberField discountValue = new NumberField("Discount");
    protected NumberField deliveredQuantity = new NumberField("DO Quantity");
    protected NumberField deliveredPrice = new NumberField("DO Price");
    protected NumberField returnQuantity = new NumberField("Return Qty");
    protected Button deliver = new Button("D-O");

    public PurchaseOrderForm(final BeanValidationBinder<T> binder) {
        super(binder);
        addClassName("contact-form");
        final HorizontalLayout orderStateLayout = new HorizontalLayout();
        orderStateLayout.add(orderState, deliver);
        orderStateLayout.setAlignItems(FlexComponent.Alignment.BASELINE);
        orderState.setItems(Arrays.asList(OrderState.PO, OrderState.DO));
        orderState.setEnabled(false);
        beforeBaseComponent();
        add(orderStateLayout,
                orderDate,
                purchasePrice,
                purchaseQuantity,
                deliveryDate,
                deliveredQuantity,
                deliveredPrice,
                discountValue,
                returnQuantity,
                createButtonsLayout());
        deliver.addClickListener(e -> {
            orderState.setValue(OrderState.DO);

        });
        orderState.addValueChangeListener(e -> {
            deliveryDate.setVisible(e.getValue() == OrderState.DO);
            deliveredQuantity.setVisible(e.getValue() == OrderState.DO);
            deliveredPrice.setVisible(e.getValue() == OrderState.DO);
            discountValue.setVisible(e.getValue() == OrderState.DO);
            deliver.setVisible(e.getValue() == OrderState.PO);
        });
    }

    protected abstract void beforeBaseComponent();

}