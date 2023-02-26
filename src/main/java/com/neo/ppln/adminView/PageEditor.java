package com.neo.ppln.adminView;

import com.neo.ppln.entity.Page;
import com.neo.ppln.publicView.AbstractForm;
import com.neo.ppln.service.CrmService;
import com.neo.ppln.views.MainLayout;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.richtexteditor.RichTextEditor;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.BeanValidationBinder;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.vaadin.tinymce.TinyMce;

import javax.annotation.security.PermitAll;

@Component
@Scope("prototype")
@Route(value = "admin-pages-editor", layout = MainLayout.class)
@PageTitle("Voter Registration | PPLN Chicago")
@PermitAll

public class PageEditor extends AbstractForm<Page> {

    private TextField header = new TextField("Title");
    private TinyMce content = new TinyMce();

    public PageEditor(CrmService crmService)
    {
        super(new BeanValidationBinder<>(Page.class));
        content.setWidth("100%");
        setWidth("90%");
        VerticalLayout verticalLayout = new VerticalLayout(header, content, createButtonsLayout());
        verticalLayout.setWidth("100%");
        verticalLayout.setHeight("80%");
        add(verticalLayout);
    }
}
