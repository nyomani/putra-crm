package com.neo.ppln.views;

import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("prototype")
@Route(value = "home", layout = MainLayout.class)
@PageTitle("Voter Registration | PPLN Chicago")
@AnonymousAllowed

public class HomeView extends VerticalLayout {
}
