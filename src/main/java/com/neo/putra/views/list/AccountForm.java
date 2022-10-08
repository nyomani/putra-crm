package com.neo.putra.views.list;

import com.neo.putra.data.entity.Account;
import com.neo.putra.data.entity.Contact;
import com.neo.putra.data.service.CrmService;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.BeanValidationBinder;

public class AccountForm extends AbstractForm<Account> {
    private ComboBox<Contact> contact = new ComboBox<>("Kontak");
    private TextField name = new TextField("Nama Bank");
    private TextField accountNumber = new TextField("Rekening");
    private NumberField balance = new NumberField("Saldo Awal");

    public AccountForm(final CrmService service) {
        super(new BeanValidationBinder<>(Account.class));
        setClassName("account-form");
        add(contact, name, accountNumber, balance, createButtonsLayout());
        contact.setItems(service.searchContacts(null));
        contact.setItemLabelGenerator(c -> c.getName());
    }
}
