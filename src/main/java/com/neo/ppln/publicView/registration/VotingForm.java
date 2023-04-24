package com.neo.ppln.publicView.registration;

import com.neo.ppln.dataType.VotingMode;
import com.neo.ppln.entity.Voter;
import com.neo.ppln.publicView.AbstractForm;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.data.binder.BeanValidationBinder;

public class VotingForm extends AbstractForm<Voter> {
    private ComboBox<VotingMode> votingMode = new ComboBox<>("Cara memilih");
    private Button uploadPassport = new Button("Upload Passport/KTP/SPLP");

    public VotingForm() {
        super(new BeanValidationBinder<>(Voter.class));
    }
}
