package com.neo.ppln.publicView;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.neo.ppln.adminView.GeolocationUtil;
import com.neo.ppln.components.*;
import com.neo.ppln.dataType.*;
import com.neo.ppln.entity.Voter;
import com.neo.ppln.service.CrmService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.BeanValidationBinder;
import lombok.extern.slf4j.Slf4j;
import okhttp3.Call;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;

@Component
@Slf4j
@Scope("prototype")
public class VoterForm extends AbstractForm<Voter> {
    DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    ObjectMapper objectMapper = new ObjectMapper();

    private ComboBox<VotingMode> votingMode = new ComboBox<>("Cara memilih");
    private TextField nomor = new TextField("Nomor");
    private TextField nik = new TextField("nik");
    private TextField nama = new TextField("name");
    private TextField alamat = new TextField("alamat");
    private TextField passport= new TextField("No Passport");
    private TextField street= new TextField("Address");
    private TextField city= new TextField("City");
    private ComboBox<String> state= new ComboBox<>("State");
    private TextField zipCode= new TextField("Zip Code");

    private ComboBox<MarriageStatus> maritalStatus = new ComboBox<>("Status Perkawinan");
    private TextField tempatLahir= new TextField("Tempat Lahir");
    private DatePicker birthDay= new DatePicker("Tgl. Lahir");
    private ComboBox<Gender> gender = new ComboBox<>("Jenis Kelamin");
    private ComboBox<Disability> disabilitas = new ComboBox("Jenis Cacat");
    private TextField telp = new TextField("No Telp");
    private EmailField email = new EmailField("Email");
    private final TextArea notes = new TextArea("Note");
    Button validateAddress = new Button("Detect Address");
    GeoCodeView geoCodeView = new GeoCodeView();
    ComboBox<VotingStatus> votingStatus = new ComboBox<>("Voting Status");

    public VoterForm(final CrmService service) {
        super(new BeanValidationBinder<>(Voter.class));
        setClassName("pemilih-form");
        HorizontalLayout buttonLayout = createButtonsLayout();
        delete.setVisible(false);
        buttonLayout.add(validateAddress);
        add(nomor, nik, nama, passport, street, city, state, zipCode, maritalStatus,
                tempatLahir, birthDay, gender, telp, email,
                votingMode, votingStatus, notes, buttonLayout);
        votingMode.setItems(Arrays.asList(VotingMode.POS, VotingMode.TPS, VotingMode.UNKNOWN));
        maritalStatus.setItems(Arrays.asList(MarriageStatus.SUDAH, MarriageStatus.BELUM, MarriageStatus.PERNAH, MarriageStatus.UNKNOWN));
        gender.setItems(Arrays.asList(Gender.LAKILAKI, Gender.PEREMPUAN, Gender.UNKOWN));
        votingStatus.setItems(Arrays.asList(VotingStatus.OK, VotingStatus.TMS));
        state.setItems(Arrays.asList("ILLINOIS", "INDIANA", "OHIO", "IOWA", "WISCONSIN", "MINNESOTA",
                "MISSOURI", "MICHIGAN", "KENTUCKY", "OKLAHOMA", "SOUTH DAKOTA", "NORTH DAKOTA", "NEBRASKA"));
        disabilitas.setItems(Arrays.asList(Disability.NONE, Disability.FISIK, Disability.INTELTUAL, Disability.MENTAL,
                Disability.RUNGU, Disability.WICARA, Disability.NETRA));
        notes.setVisible(false);

        validateAddress.addClickListener(event -> {
            GeoCodeResult result = GeolocationUtil.detectAddress(getEntity());
            if (result != null){
                geoCodeView.set(result);
                geoCodeView.setVisible(true);
                service.save(getEntity());
            }
        });
        geoCodeView.setVisible(false);
        add(new HorizontalLayout(new Label("Google Geo Location"), geoCodeView));
    }

    public void setNoteEnabled(boolean enabled)
    {
        notes.setVisible(enabled);
    }

    public void setEntity(Voter entity) {
        super.setEntity(entity);
        if (entity.getGeoCode() != null)
        {
            GeoCodeResult result = null;
            try {
                result = objectMapper.readValue(entity.getGeoCode(), GeoCodeResult.class);
                geoCodeView.set(result);
                geoCodeView.setVisible(true);
            } catch (JsonProcessingException e) {
            }
        }
        else {
            geoCodeView.setVisible(false);
        }
    }
}
