package com.neo.putra.views.list;

import com.neo.putra.data.entity.Contact;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.BeanValidationBinder;

public class ContactForm extends AbstractForm<Contact> {
    TextField name = new TextField("Company Name");
    TextField firstName = new TextField("First Name");
    TextField lastName = new TextField("Last Name");
    TextField address = new TextField("Address");
    EmailField email = new EmailField("Email");
    TextField telp = new TextField("Telp.");
    TextField taxId = new TextField("NPWP");


    public ContactForm() {
        super(new BeanValidationBinder(Contact.class));
        add(name, firstName, lastName, address, email, telp, taxId, createButtonsLayout());
    }
}
