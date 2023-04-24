package com.neo.ppln.publicView.registration;

import com.neo.ppln.dataType.Gender;
import com.neo.ppln.dataType.MarriageStatus;
import com.neo.ppln.entity.Voter;
import com.neo.ppln.publicView.AbstractForm;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.BeanValidationBinder;

public class IdentityForm extends AbstractForm<Voter> {
    private TextField firstName = new TextField("First Name");
    private TextField lastName = new TextField("Last Name");
    private TextField passport= new TextField("No Passport");
    private TextField nik= new TextField("NIK");
    private TextField tempatLahir= new TextField("Tempat Lahir");
    private DatePicker tglLahir= new DatePicker("Tgl. Lahir");
    private ComboBox<Gender> jenisKelamin = new ComboBox<>("Jenis Kelamin");
    private ComboBox<MarriageStatus> maritalStatus = new ComboBox<>("Status Perkawinan");

    public IdentityForm() {
        super(new BeanValidationBinder<>(Voter.class));
    }
}
