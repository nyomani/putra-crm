package com.neo.putra.views;

import com.neo.putra.data.service.CrmService;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.charts.Chart;
import com.vaadin.flow.component.charts.model.ChartType;
import com.vaadin.flow.component.charts.model.DataSeries;
import com.vaadin.flow.component.charts.model.DataSeriesItem;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import javax.annotation.security.PermitAll;

@Route(value = "", layout = MainLayout.class)
@PageTitle("Dashboard | PT Makmur Jaya")
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
        layout.add(todayProfitAndLoss());
        layout.addClassNames("text-xl", "mt-m");
        return layout;
    }

    private Component todayProfitAndLoss() {
        final VerticalLayout layout = new VerticalLayout();
        H1 h1 = new H1("Keuntungan hari ini ");
        H2 h2 = new H2(service.countContacts() + "");
        layout.setAlignItems(Alignment.CENTER);
        layout.setJustifyContentMode(JustifyContentMode.CENTER);
        layout.add(h1, h2);
        return layout;
    }

}