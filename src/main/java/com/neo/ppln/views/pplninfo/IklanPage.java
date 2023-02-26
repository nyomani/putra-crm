package com.neo.ppln.views.pplninfo;

import com.neo.ppln.security.SecurityService;
import com.neo.ppln.service.CrmService;
import com.neo.ppln.views.MainLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("prototype")
@Route(value = "iklan", layout = MainLayout.class)
@PageTitle("Iklan Pemilu | PPLN Chicago")
@AnonymousAllowed

public class IklanPage extends ArticleView{

    public IklanPage(CrmService crmService, SecurityService securityService) {
        super(crmService, securityService, "Iklan Pemilu");
    }
}
