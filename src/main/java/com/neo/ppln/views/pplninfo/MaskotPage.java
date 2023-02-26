package com.neo.ppln.views.pplninfo;

import com.neo.ppln.security.SecurityService;
import com.neo.ppln.service.CrmService;
import com.neo.ppln.views.MainLayout;
import com.vaadin.flow.component.Unit;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.StreamResource;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("prototype")
@Route(value = "maskot", layout = MainLayout.class)
@PageTitle("Maskot Pemilu | PPLN Chicago")
@AnonymousAllowed

public class MaskotPage extends ArticleView{

    public MaskotPage(CrmService crmService, SecurityService securityService) {
        super(crmService, securityService, "SURA & SULU – Maskot Pemilu 2024");
    }

    @Override
    protected void logo() {
        StreamResource imageResource = new StreamResource("logo-sepasang-.png",
                () -> getClass().getResourceAsStream("/images/logo-sepasang-.png"));
        Image image = new Image(imageResource, "Sura & Sulu - Maskot");
        image.setWidth(800, Unit.PIXELS);
        image.setHeight(800, Unit.PIXELS);
        add(image);
        setHorizontalComponentAlignment(Alignment.CENTER,image);

    }

}
