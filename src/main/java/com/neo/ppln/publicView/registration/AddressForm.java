package com.neo.ppln.publicView.registration;

import com.neo.ppln.entity.Voter;
import com.neo.ppln.publicView.AbstractForm;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.BeanValidationBinder;

public class AddressForm extends AbstractForm<Voter> {
    private TextField street= new TextField("Jalan");
    private TextField city= new TextField("Kota");
    private TextField state= new TextField("State");
    private TextField zipCode= new TextField("Zip Code");
    private TextField noTelp = new TextField("No Telp");
    private EmailField email = new EmailField("Email");

    public AddressForm() {
        super(new BeanValidationBinder<>(Voter.class));
    }
}
