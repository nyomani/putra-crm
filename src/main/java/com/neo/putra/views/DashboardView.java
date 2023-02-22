package com.neo.putra.views;

import com.neo.putra.data.service.CrmService;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import javax.annotation.security.PermitAll;

@Route(value = "", layout = MainLayout.class)
@PageTitle("Dashboard | UD Makmur Jaya Putra")
@PermitAll
public class DashboardView extends VerticalLayout {
    private final CrmService service;

    public DashboardView(CrmService service) {
        this.service = service;
        addClassName("dashboard-view");
        setDefaultHorizontalComponentAlignment(Alignment.CENTER);
        add(getContactStats());
    }

    private Component getContactStats() {
        VerticalLayout layout = new VerticalLayout();
        layout.add(profile());
        layout.addClassNames("text-xl", "mt-m");
        return layout;
    }

    private Component profile() {
        final VerticalLayout layout = new VerticalLayout();
        H1 h1 = new H1("UD Makmur Jaya Putra ");
        Paragraph para = new Paragraph("Distributor minyak dan gula terbesar di Balik Papan dengan kualitas " +
                "dan harga terpercaya");
        layout.setAlignItems(Alignment.CENTER);
        layout.setJustifyContentMode(JustifyContentMode.CENTER);
        layout.add(h1, para);
        return layout;
    }

}