package com.neo.putra.views.list;

import com.neo.putra.data.entity.Account;
import com.neo.putra.data.entity.SupplierPayment;
import com.neo.putra.data.entity.SupplierPurchaseOrder;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.data.binder.BeanValidationBinder;

import java.util.List;
import java.util.function.Supplier;


public class SupplierPaymentForm extends AbstractForm<SupplierPayment> {
    private ComboBox<SupplierPurchaseOrder> purchaseOrder = new ComboBox<>("PO");
    private ComboBox<Account> source = new ComboBox("Account");
    private DatePicker paymentDate = new DatePicker("Tgl Kirim");
    private DatePicker settlementDate = new DatePicker("Tgl Cair");
    private NumberField amount = new NumberField("Amount");
    private TextArea note = new TextArea("Catatan");

    public SupplierPaymentForm(Supplier<List<SupplierPurchaseOrder>> po,
                               Supplier<List<Account>> accountProvider) {
        super(new BeanValidationBinder<>(SupplierPayment.class));
        addClassName("contact-form");
        binder.forField(source).bind(
                payment -> payment.getTransaction().getTransactionLog().getDebit(),
                (payment, acct) -> payment.getTransaction().getTransactionLog().setDebit(acct));
        binder.forField(paymentDate).bind(
                payment -> payment.getTransaction().getPaymentDate(),
                (payment, localDate) -> payment.getTransaction().getTransactionLog().setPaymentDate(localDate));
        binder.forField(settlementDate).bind(
                payment -> payment.getTransaction().getSettlementDate(),
                (payment, localDate) -> payment.getTransaction().getTransactionLog().setSettlementDate(localDate));

        binder.forField(amount).bind(
                payment -> payment.getTransaction().getAmount(),
                (payment, amount) -> payment.getTransaction().getTransactionLog().setAmount(amount));
        binder.forField(note).bind(
                payment -> payment.getTransaction().getNotes(),
                (payment, notes) -> payment.getTransaction().setNotes(notes));

        source.setItems(accountProvider.get());
        source.setItemLabelGenerator(a -> a.getName() + "-" + a.getAccountNumber());
        purchaseOrder.setItems(po.get());
        purchaseOrder.setItemLabelGenerator(p -> p.getProduct().getSupplier().getName() + "-" + p.getStockId());
        add(purchaseOrder,
                source,
                paymentDate,
                settlementDate,
                amount,
                note,
                createButtonsLayout());
    }
}

