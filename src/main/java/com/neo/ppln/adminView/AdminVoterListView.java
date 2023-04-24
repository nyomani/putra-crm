package com.neo.ppln.adminView;

import com.neo.ppln.components.ColumnFilter;
import com.neo.ppln.components.GeoLocationRenderer;
import com.neo.ppln.dataType.VotingMode;
import com.neo.ppln.dataType.VotingStatus;
import com.neo.ppln.entity.Voter;
import com.neo.ppln.publicView.AbstractListView;
import com.neo.ppln.publicView.VoterForm;
import com.neo.ppln.service.CrmService;
import com.neo.ppln.views.MainLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Scope;

import javax.annotation.security.PermitAll;
import java.util.Arrays;

import static com.neo.ppln.query.VoterSpecifications.hasName;
import static com.neo.ppln.query.VoterSpecifications.hasPassport;

@org.springframework.stereotype.Component
@Scope("prototype")
@Route(value = "admin-voter-search", layout = MainLayout.class)
@PageTitle("Voter Registration | PPLN Chicago")
@PermitAll
@Slf4j
public class AdminVoterListView extends AbstractListView<Voter> {
    private final CrmService crmService;
    private final TextField nama = new TextField("Nama");
    private final TextField passport = new TextField("Passport");
    private final Button migrate = new Button("Migrate");
    public AdminVoterListView(final CrmService crmService, final VoterForm form) {
        super("Daftar Pemilih", new Grid<>(Voter.class), form, s -> crmService.findAllVoter(s));
        this.crmService = crmService;
        addFilter(new ColumnFilter<>(nama, nama::getValue, p -> hasName(p)));
        addFilter(new ColumnFilter<>(passport, passport::getValue, p -> hasPassport(p)));
//        addFilter(new ColumnFilter(migrate, () -> "", p -> null));
        passport.addValueChangeListener(v -> updateList());
        nama.addValueChangeListener(v -> updateList());
        form.setNoteEnabled(true);
        migrate.addClickListener(v -> migrate());
    }

    private void migrate() {
    }


    @Override
    protected void configureGrid() {
        grid.addClassNames("voter-grid");
        grid.setSizeFull();
        grid.setColumns();
        grid.addColumn(v -> v.getNomor()).setHeader("Nomor").setResizable(true).setWidth("5%");
        grid.addColumn(v -> v.getNama()).setHeader("Nama").setResizable(true).setWidth("10%");
        grid.addColumn(v -> v.getPassport()).setHeader("Passport").setResizable(true).setWidth("5%");
        grid.addColumn(v -> v.getBirthDay()).setHeader("Tgl Lahir").setResizable(true).setWidth("5%");
        grid.addColumn(v -> v.getStreet()).setHeader("Street").setResizable(true).setWidth("15%");
        grid.addColumn(v -> v.getCity()).setHeader("City").setResizable(true).setWidth("5%");
        grid.addColumn(v -> v.getState()).setHeader("State").setResizable(true).setWidth("5%");
        grid.addColumn(new ComponentRenderer<>(ComboBox<VotingMode>::new, (cb, v) ->{
            cb.setItems(Arrays.asList(VotingMode.POS, VotingMode.TPS, VotingMode.UNKNOWN));
            cb.addValueChangeListener(e -> {
                v.setVotingMode(cb.getValue());
                save(v);
            });
            if (v.getVotingMode() != null) {
                cb.setValue(v.getVotingMode());
            }
        })).setHeader("Cara Memilih").setResizable(true).setWidth("5%");

        grid.addColumn(new ComponentRenderer<>(ComboBox<VotingStatus>::new, (cb, v) ->{
            cb.setItems(Arrays.asList(VotingStatus.OK, VotingStatus.TMS));
            cb.addValueChangeListener(e -> {
                v.setVotingStatus(cb.getValue());
                save(v);
            });
           if (v.getVotingStatus() != null) {
               cb.setValue(v.getVotingStatus());
           }
        })).setHeader("Status").setResizable(true).setWidth("5%");
        grid.addColumn(new GeoLocationRenderer(v ->crmService.save(v), grid))
                .setHeader("Geo location").setWidth("20%").setResizable(true);
        grid.addColumn(new ComponentRenderer<>(TextField::new, (f, v) -> {
            f.setValue(v.getNotes() == null ? "" : v.getNotes());
            f.addValueChangeListener(e -> {
                v.setNotes(f.getValue());
                save(v);
            });
        })).setHeader("Notes").setWidth("10%");

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
