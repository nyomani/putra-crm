package com.neo.ppln.publicView;

import com.neo.ppln.entity.Voter;
import com.neo.ppln.event.CloseEvent;
import com.neo.ppln.event.DeleteEvent;
import com.neo.ppln.event.SaveEvent;
import com.neo.ppln.security.SecurityService;
import com.neo.ppln.service.CrmService;
import com.neo.ppln.views.MainLayout;
import com.neo.ppln.views.pplninfo.ArticleView;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.time.format.DateTimeFormatter;

@Component
@Scope("prototype")
@Route(value = "registration", layout = MainLayout.class)
@PageTitle("Voter Registration | PPLN Chicago")
@AnonymousAllowed
public class RegistrationView extends ArticleView {
    private AbstractForm<Voter> voterForm;
    private TextField passportSearch;
    private Button search;
    private TextField tglLahir = new TextField("Tgl Lahir (DD/MM/YYYY");
    private Label error;
    private Button mendaftar = new Button("Form Pendaftaran sebagai pemilih");
    private Paragraph paragraph = new Paragraph();
    private final CrmService crmService;
    DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("MM/dd/yyyy");

    public RegistrationView(final CrmService crmService, final SecurityService securityService)
    {
        super(crmService, securityService, "Registration");
        this.crmService = crmService;
        paragraph.setText("Pastikan data anda sudah terdaftar sebagai pemilih pada Pemilu 2024, kalau data anda tidak ditemukan silahkan mendaftar sebagai pemilih baru");
        mendaftar = new Button("Mendaftar", e->{
            UI.getCurrent().getPage().open("https://forms.gle/tpFUwQw6Km8E6ks8A");
        });
    }

    public void header() {
        this.error = new Label("Data yang dicari tidak ketemu.");
        error.addClassNames("error-label");
        this.voterForm = new VoterForm(crmService);
        this.passportSearch = new TextField("Passport");
        this.search = new Button("Search");
        HorizontalLayout searchLayout = new HorizontalLayout(passportSearch, search, error);
        searchLayout.setAlignItems(Alignment.BASELINE);
        passportSearch.setPlaceholder("Nomor Passport");
        VerticalLayout layout = new VerticalLayout(searchLayout, voterForm);
        layout.setHorizontalComponentAlignment(Alignment.CENTER, searchLayout, error);
      //  add(layout);
        voterForm.setVisible(false);
        error.setVisible(false);
        search.addClickListener(v -> search());

        voterForm.addListener(SaveEvent.class, this::save);
        voterForm.addListener(DeleteEvent.class, this::delete);
        voterForm.addListener(CloseEvent.class, e -> closeEditor());


    }

    private  void save(SaveEvent t) {
        Voter entity = voterForm.getEntity();
        entity.setSource("ONLINE");
        crmService.save(entity);
        voterForm.setEntity(null);
        voterForm.setVisible(false);
    }

    private void delete(DeleteEvent t) {
    }

    private void closeEditor() {
        voterForm.setVisible(false);
    }


    private void search()
    {
        if (passportSearch.getValue() != null ) {
            final Voter p = crmService.findVoterByPassport(passportSearch.getValue());
            voterForm.setVisible(p != null);
            voterForm.setEntity(p);
            error.setVisible(p == null);
        }
    }
}
