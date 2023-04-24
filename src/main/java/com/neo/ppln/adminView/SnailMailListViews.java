package com.neo.ppln.adminView;

import com.neo.ppln.components.ColumnFilter;
import com.neo.ppln.dataType.SnailMailStatus;
import com.neo.ppln.entity.Voter;
import com.neo.ppln.publicView.AbstractListView;
import com.neo.ppln.service.CrmService;
import com.neo.ppln.views.MainLayout;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import lombok.extern.slf4j.Slf4j;

import javax.annotation.security.PermitAll;

import java.util.Arrays;

import static com.neo.ppln.query.VoterSpecifications.hasName;
import static com.neo.ppln.query.VoterSpecifications.hasMailingStatus;

@Route(value = "admin-snail-mail", layout = MainLayout.class)
@PageTitle("Snail Mail | PPLN Chicago")
@PermitAll
@Slf4j

public class SnailMailListViews extends AbstractListView<Voter> {
    private CrmService service;
    private final TextField nama = new TextField("Nama");
    private final ComboBox<SnailMailStatus> mailingStatus = new ComboBox("Mailing Status");

    public SnailMailListViews(CrmService service) {
        super("Snail Mailing", new Grid<>(Voter.class), new SnailMailForm(), s -> service.findAllVoter(s));
        this.service = service;
        disableAddition();
        addFilter(new ColumnFilter<>(nama, nama::getValue, p -> hasName(p)));
        addFilter(new ColumnFilter<>(mailingStatus, mailingStatus::getValue, p -> hasMailingStatus(p)));
        nama.addValueChangeListener(v -> updateList());
        mailingStatus.addValueChangeListener(v -> updateList());
        mailingStatus.setItems(Arrays.asList(
                SnailMailStatus.OK,
                SnailMailStatus.RETURNED_TO_SENDER,
                SnailMailStatus.INVALID_ADDRESS));

    }

    @Override
    protected void configureGrid() {
        grid.addClassNames("voter-grid");
        grid.setSizeFull();
        grid.setColumns();
        grid.addColumn(v -> v.getNama()).setHeader("Name").setResizable(true).setWidth("20%");
        grid.addColumn(v -> v.getStreet()).setHeader("Address").setResizable(true).setWidth("20%");
        grid.addColumn(v -> v.getCity()).setHeader("City").setResizable(true);
        grid.addColumn(v -> v.getState()).setHeader("State").setResizable(true);
        grid.addColumn(v -> v.getMailingStatus() == null ? "" : v.getMailingStatus().getStatus())
                .setHeader("Mail status").setResizable(true);
        grid.addColumn(v -> v.getMailingStatus() == null ? "" : v.getMailingStatus().getNote())
                .setHeader("Notes").setResizable(true).setWidth("30%");

    }

    @Override
    protected void save(Voter entity) {
        service.save(entity);
    }

    @Override
    protected void delete(Voter entity) {
    }

    @Override
    protected Voter newEntity() {
        return new Voter();
    }
}
