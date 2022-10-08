package com.neo.putra.views.list;

import com.neo.putra.data.PaymentType;
import com.neo.putra.data.TransactionType;
import com.neo.putra.data.entity.Account;
import com.neo.putra.data.entity.Transaction;
import com.neo.putra.data.service.CrmService;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.data.binder.BeanValidationBinder;

import java.util.Arrays;

public class TransactionForm extends AbstractForm<Transaction> {

    private ComboBox<Account> account = new ComboBox<>("Account");
    private ComboBox<TransactionType> type = new ComboBox<>("Debit/Credit");
    private DatePicker paymentDate = new DatePicker("Tanggal Transaksi");
    private DatePicker settlementDate = new DatePicker("Tanggal Clear");
    private NumberField amount = new NumberField("Jumlah");

    public TransactionForm(CrmService service) {
        super(new BeanValidationBinder<>(Transaction.class));
        addClassName("contact-form");
        add(account, type, amount, paymentDate, settlementDate, createButtonsLayout());
        type.setItems(Arrays.asList(TransactionType.DEBIT, TransactionType.CREDIT));
        type.setItemLabelGenerator(t -> t.name());
        account.setItems(service.allAccounts());
        account.setItemLabelGenerator(a -> a.getName());
    }
}
