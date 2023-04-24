package com.neo.ppln.views.pplninfo;

import com.neo.ppln.publicView.RegistrationView;
import com.neo.ppln.security.SecurityService;
import com.neo.ppln.service.CrmService;
import com.neo.ppln.views.MainLayout;
import com.vaadin.flow.component.Unit;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.StreamResource;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("prototype")
@Route(value = "contact", layout = MainLayout.class)
@PageTitle("Contact Us | PPLN Chicago")
@AnonymousAllowed

public class ContactUsPage extends ArticleView{
    private CrmService crmService;
    public ContactUsPage(CrmService crmService, SecurityService securityService) {
        super(crmService, securityService, "Contact Us");
        this.crmService = crmService;
    }

    @Override
    protected void header() {
        StreamResource imageResource = new StreamResource("KPU_Logo.png",
                () -> getClass().getResourceAsStream("/images/ppln.jpg"));
        Image image = new Image(imageResource, "KPU");
        image.setWidth(200, Unit.PIXELS);
        image.setHeight(200, Unit.PIXELS);
        add(image);
        setHorizontalComponentAlignment(Alignment.CENTER,image);
    }
}
