package com.neo.putra.views.list;

import com.neo.putra.data.ContactType;
import com.neo.putra.data.entity.Account;
import com.neo.putra.data.entity.Transaction;
import com.neo.putra.data.query.AccountSpecifications;
import com.neo.putra.data.service.DataAccess;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.data.binder.BeanValidationBinder;

import java.util.Arrays;
import java.util.List;

public class TransferForm extends AbstractForm<Transaction> {
    private ComboBox<Account> debit = new ComboBox<>("Dari rekening");
    private ComboBox<Account> credit = new ComboBox<>("Ke rekening");

    private DatePicker transferDate = new DatePicker("Tanggal transfer");
    private NumberField transferAmount = new NumberField("Jumlah");
    private TextArea notes = new TextArea("Catatan");

    public TransferForm(DataAccess<Account> accountDataAccess) {
        super(new BeanValidationBinder<>(Transaction.class));
        add(debit, credit, transferDate, transferAmount, notes, createButtonsLayout());
        final List<Account> accounts = accountDataAccess.findAll(
                Arrays.asList(AccountSpecifications.hasContactType(ContactType.OWNER)));
        debit.setItems(accounts);
        credit.setItems(accounts);
        debit.setItemLabelGenerator(a -> a.getName() + "-" + a.getAccountNumber());
        credit.setItemLabelGenerator(a -> a.getName() + "-" + a.getAccountNumber());
        binder.forField(debit).bind(
                t -> t.getTransactionLog().getDebit(),
                (t, acct) -> t.getTransactionLog().setDebit(acct));
        binder.forField(credit).bind(
                t -> t.getTransactionLog().getCredit(),
                (t, acct) -> t.getTransactionLog().setCredit(acct));
        binder.forField(transferDate).bind(
                t -> t.getTransactionLog().getPaymentDate(),
                (t, date) -> t.getTransactionLog().setPaymentDate(date));
        binder.forField(transferAmount).bind(t -> t.getTransactionLog().getAmount(),
                (t, amount) -> t.getTransactionLog().setAmount(amount));
    }
}
