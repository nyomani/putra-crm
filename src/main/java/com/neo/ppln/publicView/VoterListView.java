package com.neo.ppln.publicView;

import com.neo.ppln.components.ColumnFilter;
import com.neo.ppln.dataType.VotingMode;
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

import java.time.LocalDate;

import static com.neo.ppln.query.VoterSpecifications.*;
@Component
@Scope("prototype")
@Route(value = "voter-search", layout = MainLayout.class)
@PageTitle("Voter Registration | PPLN Chicago")
@AnonymousAllowed
public class VoterListView extends AbstractListView<Voter> {
    private final CrmService crmService;
    private final TextField name = new TextField("Nama");
    private final TextField state = new TextField("State");
    private final TextField passport = new TextField("Passport");

    public VoterListView(final CrmService crmService) {
        super("Daftar Pemilih", new Grid<>(Voter.class), new VoterForm(crmService), s -> crmService.findAllVoter(s));
        this.crmService = crmService;
        addFilter(new ColumnFilter<>(name, name::getValue, p -> hasName(p)));
        addFilter(new ColumnFilter<>(state, state::getValue, p -> hasState(p)));
        addFilter(new ColumnFilter<>(passport, passport::getValue, p -> hasPassport(p)));
        name.addValueChangeListener(v -> updateList());
        state.addValueChangeListener(v -> updateList());
        passport.addValueChangeListener(v -> updateList());
    }

    @Override
    protected void configureGrid() {
        grid.addClassNames("voter-grid");
        grid.setSizeFull();
        grid.setColumns();
        grid.addColumn(v -> v.getNama()).setHeader("Nama").setSortable(true).setWidth("50%").setFlexGrow(0);
        grid.addColumn(v -> v.getZipCode()).setHeader("Zip Code").setSortable(true).setResizable(true);
        grid.addColumn(v -> v.getState()).setHeader("State").setSortable(true).setResizable(true);
        grid.addColumn(v -> v.getMethode() == null ? "TPS": v.getMethode()).setHeader("Metode Pemilihan").setSortable(true).setAutoWidth(true);
    }

    @Override
    protected void save(Voter entity) {
        if (entity != null && entity.getBirthDay() == null && entity.getTglLahir() != null)
        {
            try {
                LocalDate localDate = LocalDate.parse(entity.getTglLahir(), dateFormat);
                entity.setBirthDay(localDate);
            }
            catch (Exception e)
            {
                e.printStackTrace();
            }
        }

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
