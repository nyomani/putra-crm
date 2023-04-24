package com.neo.ppln.adminView;

import com.neo.ppln.entity.Page;
import com.neo.ppln.entity.PageCategory;
import com.neo.ppln.publicView.AbstractForm;
import com.neo.ppln.service.CrmService;
import com.neo.ppln.views.MainLayout;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.IntegerField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.BeanValidationBinder;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;
import java.util.ArrayList;
import java.util.List;

@Component
@Scope("prototype")
@Route(value = "admin-pages-editor", layout = MainLayout.class)
@PageTitle("Page editor | PPLN Chicago")
@PermitAll

public class PageEditor extends AbstractForm<Page> {

    private TextField title = new TextField("Title");
    private ComboBox<PageCategory> pageCategory = new ComboBox<>("Category");
    private IntegerField pageIdx = new IntegerField("Page index");

    public PageEditor(CrmService crmService)
    {
        super(new BeanValidationBinder<>(Page.class));
        setWidth("90%");
        VerticalLayout verticalLayout = new VerticalLayout(title,pageCategory, pageIdx, createButtonsLayout());
        verticalLayout.setWidth("100%");
        verticalLayout.setHeight("80%");
        add(verticalLayout);
        List<PageCategory> pageCategories = crmService.findAllPageCategories();
        pageCategory.setItems(pageCategories == null ? new ArrayList<>() : pageCategories);
    }
}
