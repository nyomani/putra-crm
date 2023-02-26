package com.neo.ppln.views;

import com.neo.ppln.security.SecurityService;
import com.neo.ppln.service.CrmService;
import com.neo.ppln.views.pplninfo.ContactUsPage;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;

@Route(value = "", layout = MainLayout.class)
@PageTitle("Dashboard | PPLN Chicago")
@AnonymousAllowed

public class DashboardView extends VerticalLayout {
    private final CrmService service;
    private SecurityService securityService;
    public DashboardView(CrmService service, SecurityService securityService) {
        this.service = service;
        this.securityService = securityService;
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
        H1 h1 = new H1("Panitia Pemilihan Umum Luar Negeri | PPLN Chicago ");
        layout.setAlignItems(Alignment.CENTER);
        layout.setJustifyContentMode(JustifyContentMode.CENTER);
        layout.add(new ContactUsPage(service, securityService));
        return layout;
    }

}