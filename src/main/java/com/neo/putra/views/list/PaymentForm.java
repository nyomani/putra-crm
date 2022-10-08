package com.neo.putra.views.list;

import com.neo.putra.data.entity.Account;
import com.neo.putra.data.entity.CustomerPayment;
import com.neo.putra.data.entity.CustomerPurchaseOrder;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.data.binder.BeanValidationBinder;

import java.util.List;
import java.util.function.Supplier;


public class PaymentForm extends AbstractForm<CustomerPayment> {
    private ComboBox<CustomerPurchaseOrder> purchaseOrder = new ComboBox<>("PO");
    private ComboBox<Account> destination = new ComboBox("Account");
    private DatePicker paymentDate = new DatePicker("Tgl Terima");
    private DatePicker settlementDate = new DatePicker("Tgl Cair");
    private NumberField amount = new NumberField("Amount");
    private TextArea note = new TextArea("Catatan");

    public PaymentForm(Supplier<List<CustomerPurchaseOrder>> po,
                       Supplier<List<Account>> accountProvider) {
        super(new BeanValidationBinder<>(CustomerPayment.class));
        addClassName("contact-form");
        binder.forField(destination).bind(
                customerPayment -> customerPayment.getTransaction().getTransactionLog().getCredit(),
                (customerPayment, acct) -> customerPayment.getTransaction().getTransactionLog().setCredit(acct));
        binder.forField(paymentDate).bind(
                customerPayment -> customerPayment.getTransaction().getPaymentDate(),
                (customerPayment, localDate) -> customerPayment.getTransaction().getTransactionLog().setPaymentDate(localDate));
        binder.forField(settlementDate).bind(
                customerPayment -> customerPayment.getTransaction().getSettlementDate(),
                (customerPayment, localDate) -> customerPayment.getTransaction().getTransactionLog().setSettlementDate(localDate));

        binder.forField(amount).bind(
                customerPayment -> customerPayment.getTransaction().getAmount(),
                (customerPayment, amount) -> customerPayment.getTransaction().getTransactionLog().setAmount(amount));
        binder.forField(note).bind(
                customerPayment -> customerPayment.getTransaction().getNotes(),
                (customerPayment, notes) -> customerPayment.getTransaction().setNotes(notes));

        destination.setItems(accountProvider.get());
        destination.setItemLabelGenerator(a -> a.getName());
        purchaseOrder.setItems(po.get());
        purchaseOrder.setItemLabelGenerator(p -> p.getContact().getName() + "-" + p.getStock().getStockId());
        add(purchaseOrder,
            destination,
            paymentDate,
            settlementDate,
            amount,
            note,
            createButtonsLayout());
    }
}

