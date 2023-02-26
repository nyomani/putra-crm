package com.neo.ppln.publicView;

import com.neo.ppln.dataType.Gender;
import com.neo.ppln.dataType.MarriageStatus;
import com.neo.ppln.entity.Voter;
import com.neo.ppln.dataType.VotingMode;
import com.neo.ppln.service.CrmService;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.BeanValidationBinder;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class VoterForm extends AbstractForm<Voter> {
    private ComboBox<VotingMode> votingMode = new ComboBox<>("Cara memilih");
    private TextField firstName = new TextField("First Name");
    private TextField lastName = new TextField("Last Name");
    private TextField passport= new TextField("No Passport");
    private TextField street= new TextField("Jalan");
    private TextField city= new TextField("Kota");
    private TextField state= new TextField("State");
    private TextField zipCode= new TextField("Zip Code");
    private ComboBox<MarriageStatus> maritalStatus = new ComboBox<>("Status Perkawinan");
    private TextField tempatLahir= new TextField("Tempat Lahir");
    private DatePicker tglLahir= new DatePicker("Tgl. Lahir");
    private ComboBox<Gender> jenisKelamin = new ComboBox<>("Jenis Kelamin");
    private TextField pekerjaan = new TextField("Pekerjaan");
    private TextField jenisCacat = new TextField("Jenis Cacat");
    private TextField alamatDiIndonesia = new TextField("Alamat di Indonesia");
    private TextField noTelp = new TextField("No Telp");
    private EmailField email = new EmailField("Email");
    private final TextArea note = new TextArea("Note");

    public VoterForm(final CrmService service) {
        super(new BeanValidationBinder<>(Voter.class));
        setClassName("pemilih-form");
        add(firstName, lastName, passport, street, city, state, zipCode, maritalStatus,
                tempatLahir, tglLahir, jenisKelamin, pekerjaan, jenisCacat, alamatDiIndonesia, noTelp, email,
                votingMode, note, createButtonsLayout());
        votingMode.setItems(Arrays.asList(VotingMode.POS, VotingMode.TPS));
        maritalStatus.setItems(Arrays.asList(MarriageStatus.BELUM, MarriageStatus.PERNAH, MarriageStatus.SUDAH,
                MarriageStatus.UNKNOWN));
        jenisKelamin.setItems(Arrays.asList(Gender.PEREMPUAN, Gender.PEREMPUAN, Gender.UNKOWN));
        note.setVisible(false);
    }

    public void setNoteEnabled(boolean enabled)
    {
        note.setVisible(enabled);
    }
}
