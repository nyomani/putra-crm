package com.neo.ppln.adminView;

import com.neo.ppln.dataType.SnailMailStatus;
import com.neo.ppln.entity.SnailMail;
import com.neo.ppln.entity.Voter;
import com.neo.ppln.publicView.AbstractForm;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.BeanValidationBinder;

import java.util.Arrays;

public class SnailMailForm extends AbstractForm<Voter> {
    private TextField nama = new TextField("Nama");
    private ComboBox<SnailMailStatus> status = new ComboBox<>("Mail status");
    private TextArea note = new TextArea("Note");

    public SnailMailForm() {
        super(new BeanValidationBinder<>(Voter.class));
        setClassName("mailing-form");
        HorizontalLayout buttonLayout = createButtonsLayout();
        delete.setVisible(false);
        add(nama, status, note, buttonLayout);
        status.setItems(Arrays.asList(SnailMailStatus.OK, SnailMailStatus.RETURNED_TO_SENDER,
                SnailMailStatus.INVALID_ADDRESS));
        binder.forField(status).bind(v -> v.getMailingStatus().getStatus(),
                (k, v) -> k.getMailingStatus().setStatus(v));
        binder.forField(note).bind(v -> v.getMailingStatus().getNote(), (k, v) -> k.getMailingStatus().setNote(v));

    }
    public void setEntity(Voter entity) {
        if (entity.getMailingStatus() == null) {
            SnailMail mailing = new SnailMail();
            mailing.setStatus(SnailMailStatus.OK);
            entity.setMailingStatus(mailing);
        }
        super.setEntity(entity);
    }
}
