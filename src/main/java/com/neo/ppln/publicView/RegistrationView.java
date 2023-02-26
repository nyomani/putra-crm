package com.neo.ppln.publicView;

import com.neo.ppln.entity.Voter;
import com.neo.ppln.event.CloseEvent;
import com.neo.ppln.event.DeleteEvent;
import com.neo.ppln.event.SaveEvent;
import com.neo.ppln.service.CrmService;
import com.neo.ppln.views.MainLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("prototype")
@Route(value = "registration", layout = MainLayout.class)
@PageTitle("Voter Registration | PPLN Chicago")
@AnonymousAllowed
public class RegistrationView extends VerticalLayout {
    private AbstractForm<Voter> voterForm;
    private TextField passportSearch = new TextField("Cari");
    private H2 error = new H2("Data yang dicari tidak ketemu. Silahkan mendaftar sebagai pemilih baru");
    private Button mendaftar = new Button("Form Pendaftaran sebagai pemilih");
    private Paragraph paragraph = new Paragraph();
    private final CrmService crmService;
    public RegistrationView(final CrmService crmService)
    {
        setWidthFull();
        this.crmService = crmService;
        this.voterForm = new VoterForm(crmService);
        HorizontalLayout searchLayout = new HorizontalLayout(passportSearch, mendaftar);
        searchLayout.setAlignItems(Alignment.BASELINE);
        searchLayout.setWidth("50%");
        mendaftar.setWidthFull();
        passportSearch.setWidthFull();
        passportSearch.setPlaceholder("Nomor Passport");
        paragraph.setText("Kalau data anda tidak ditemukan melalui pencarian dengan nomor passport, silahkan mendaftar sebagai pemilih baru");
        add(paragraph, searchLayout, voterForm, error);
        voterForm.setVisible(false);
        error.setVisible(false);
        passportSearch.addValueChangeListener(v -> search(v.getValue()));
        mendaftar.addClickListener(click -> {
            voterForm.setVisible(true);
            Voter voter = new Voter();
            voterForm.setEntity(voter);
            error.setVisible(false);
        });
        voterForm.addListener(SaveEvent.class, this::save);
        voterForm.addListener(DeleteEvent.class, this::delete);
        voterForm.addListener(CloseEvent.class, e -> closeEditor());

    }

    private  void save(SaveEvent t) {
        crmService.save(voterForm.getEntity());
    }

    private void delete(DeleteEvent t) {
    }

    private void closeEditor() {
        voterForm.setVisible(false);
    }


    private void search(final String passport)
    {
        final Voter p = crmService.findVoterByPassport(passport);
        voterForm.setVisible(p !=null);
        voterForm.setEntity(p);
        error.setVisible(p == null);
    }
}
