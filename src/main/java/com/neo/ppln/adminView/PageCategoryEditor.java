package com.neo.ppln.adminView;

import com.neo.ppln.entity.PageCategory;
import com.neo.ppln.publicView.AbstractForm;
import com.neo.ppln.service.CrmService;
import com.neo.ppln.views.MainLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.IntegerField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.BeanValidationBinder;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;

@Component
@Scope("prototype")
@Route(value = "admin-pages-category-editor", layout = MainLayout.class)
@PageTitle("Page category | PPLN Chicago")
@PermitAll

public class PageCategoryEditor extends AbstractForm<PageCategory> {

    private TextField category = new TextField("Title");
    private IntegerField categoryIdx = new IntegerField("Category index");

    public PageCategoryEditor(CrmService crmService)
    {
        super(new BeanValidationBinder<>(PageCategory.class));
        setWidth("90%");
        VerticalLayout verticalLayout = new VerticalLayout(category, categoryIdx, createButtonsLayout());
        verticalLayout.setWidth("100%");
        verticalLayout.setHeight("80%");
        add(verticalLayout);
    }
}
