package com.neo.ppln.publicView.registration;

import com.neo.ppln.entity.Voter;
import com.neo.ppln.publicView.AbstractForm;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.BeanValidationBinder;

public class AdditionalInfo extends AbstractForm<Voter> {
    private TextField pekerjaan = new TextField("Pekerjaan");
    private TextField jenisCacat = new TextField("Jenis Cacat");
    private TextField alamatDiIndonesia = new TextField("Alamat di Indonesia");
    private Button next = new Button("Next");
    public AdditionalInfo() {
        super(new BeanValidationBinder<>(Voter.class));
        add(pekerjaan, jenisCacat, alamatDiIndonesia, next);
    }
}
