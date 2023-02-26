package com.neo.ppln.publicView;

import com.neo.ppln.components.ColumnFilter;
import com.neo.ppln.entity.Voter;
import com.neo.ppln.service.CrmService;
import com.neo.ppln.views.MainLayout;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import static com.neo.ppln.query.VoterSpecifications.*;
@Component
@Scope("prototype")
@Route(value = "voter-search", layout = MainLayout.class)
@PageTitle("Voter Registration | PPLN Chicago")
@AnonymousAllowed
public class VoterListView extends AbstractListView<Voter> {
    private final CrmService crmService;
    private final TextField firstName = new TextField("First Name");
    private final TextField lastNName = new TextField("Last Name");
    private final TextField city = new TextField("City");
    private final TextField passport = new TextField("Passport");

    public VoterListView(final CrmService crmService) {
        super("Daftar Pemilih", new Grid<>(Voter.class), new VoterForm(crmService), s -> crmService.findAllVoter(s));
        this.crmService = crmService;
        addFilter(new ColumnFilter<>(firstName, firstName::getValue, p -> hasFirstName(p)));
        addFilter(new ColumnFilter<>(lastNName, lastNName::getValue, p -> hasLastName(p)));
        addFilter(new ColumnFilter<>(city, city::getValue, p -> hasCity(p)));
        addFilter(new ColumnFilter<>(passport, passport::getValue, p -> hasPassport(p)));
        firstName.addValueChangeListener(v -> updateList());
        lastNName.addValueChangeListener(v -> updateList());
        city.addValueChangeListener(v -> updateList());
        passport.addValueChangeListener(v -> updateList());
    }

    @Override
    protected void configureGrid() {
        grid.addClassNames("voter-grid");
        grid.setSizeFull();
        grid.setColumns();
        grid.addColumn(v -> v.getFirstName()).setHeader("First Name");
        grid.addColumn(v -> v.getLastName()).setHeader("Last Name");
        grid.addColumn(v -> v.getCity()).setHeader("City");
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

    public void edit(Voter entity) {

    }
}
