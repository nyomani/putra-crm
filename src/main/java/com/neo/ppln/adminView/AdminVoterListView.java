package com.neo.ppln.adminView;

import com.neo.ppln.components.ColumnFilter;
import com.neo.ppln.entity.Voter;
import com.neo.ppln.publicView.AbstractListView;
import com.neo.ppln.publicView.VoterForm;
import com.neo.ppln.service.CrmService;
import com.neo.ppln.views.MainLayout;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;

import static com.neo.ppln.query.VoterSpecifications.*;

@Component
@Scope("prototype")
@Route(value = "admin-voter-search", layout = MainLayout.class)
@PageTitle("Voter Registration | PPLN Chicago")
@PermitAll
public class AdminVoterListView extends AbstractListView<Voter> {
    private final CrmService crmService;
    private final TextField firstName = new TextField("First Name");
    private final TextField lastNName = new TextField("Last Name");
    private final TextField city = new TextField("City");
    private final TextField passport = new TextField("Passport");

    public AdminVoterListView(final CrmService crmService, final VoterForm form) {
        super("Daftar Pemilih", new Grid<>(Voter.class), form, s -> crmService.findAllVoter(s));
        this.crmService = crmService;
        addFilter(new ColumnFilter<>(firstName, firstName::getValue, p -> hasFirstName(p)));
        addFilter(new ColumnFilter<>(lastNName, lastNName::getValue, p -> hasLastName(p)));
        addFilter(new ColumnFilter<>(city, city::getValue, p -> hasCity(p)));
        addFilter(new ColumnFilter<>(passport, passport::getValue, p -> hasCity(p)));
        firstName.addValueChangeListener(v -> updateList());
        lastNName.addValueChangeListener(v -> updateList());
        city.addValueChangeListener(v -> updateList());
        passport.addValueChangeListener(v -> updateList());
        form.setNoteEnabled(true);


    }

        @Override
    protected void configureGrid() {
        grid.addClassNames("voter-grid");
        grid.setSizeFull();
        grid.setColumns();
        grid.addColumn(v -> v.getFirstName()).setHeader("First Name");
        grid.addColumn(v -> v.getLastName()).setHeader("Last Name");
        grid.addColumn(v -> v.getStreet()).setHeader("Alamat");
        grid.addColumn(v -> v.getCity()).setHeader("City");
        grid.addColumn(v -> v.getState()).setHeader("State");
        grid.addColumn(v -> v.getEmail()).setHeader("Email");
        grid.addColumn(v -> v.getNoTelp()).setHeader("Telp");
        grid.addColumn(v -> v.getVotingMode().name()).setHeader("Metode Pemilihan");
    }

    @Override
    protected void save(Voter entity) {
        crmService.save(entity);
    }

    @Override
    protected void delete(Voter entity) {
        // dont allow delete
    }

    @Override
    protected Voter newEntity() {
        final Voter voterInfo = new Voter();
        return voterInfo;
    }

}
