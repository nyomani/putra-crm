package com.neo.ppln.views.pplninfo;

import com.neo.ppln.entity.Document;
import com.neo.ppln.entity.Page;
import com.neo.ppln.security.SecurityService;
import com.neo.ppln.service.CrmService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextArea;

public class ArticleView extends VerticalLayout {
    Div label = new Div();
    Div preview = new Div();

    private  Page page;
    private Button edit = new Button("Edit");
    private Button save = new Button("Save");
    private Button cancel = new Button("Cancel");
    private TextArea editor = new TextArea();
    private Button previewButton = new Button("Preview");
    private Button closePreviewButton = new Button("Close");
    private Paragraph paragraph = new Paragraph();
    private SecurityService securityService;
    private CrmService crmService;
    public ArticleView(CrmService crmService, SecurityService securityService, String name)
    {
        setSizeFull();
        this.securityService = securityService;
        this.crmService = crmService;
       page = crmService.getPage(name);
       if (page == null)
       {
           final Document document = new Document();
           document.setDocument("Lorem ipsum".getBytes());
           page = new Page();
           page.setDocument(document);
           page.setTitle(name);
       }
       paragraph.setText("Edit document menggunakan html tags");
       editor.setSizeFull();
       label.setSizeFull();
       preview.setSizeFull();
       logo();
       add(label, paragraph, editor, preview, new HorizontalLayout(edit, save, cancel, previewButton, closePreviewButton));
       edit.addClickListener( e -> editContent());
       closePreviewButton.addClickListener(e -> editingMode());
       save.addClickListener(e -> saveEditedContent());
       cancel.addClickListener(e -> displayMode());
       previewButton.addClickListener(e -> previewMode());
       displayMode();
    }

    protected void logo()
    {

    }
    private void saveEditedContent()
    {
        page.getDocument().setDocument(editor.getValue().getBytes());
        crmService.save(page);
        displayMode();
    }

    private void editContent()
    {
        editor.setValue(label.getElement().getProperty("innerHTML"));
        editingMode();
    }

    private void previewMode()
    {
        preview.setVisible(true);
        preview.getElement().setProperty("innerHTML",editor.getValue());
        editor.setVisible(false);
        paragraph.setVisible(false);
        label.setVisible(false);
        cancel.setVisible(false);
        save.setVisible(false);
        edit.setVisible(false);
        closePreviewButton.setVisible(true);
        previewButton.setVisible(false);
    }

    private void editingMode()
    {
        edit.setVisible(securityService.getAuthenticatedUser() != null);
        save.setVisible(false);
        cancel.setVisible(false);
        editor.setVisible(false);
        paragraph.setVisible(false);
        preview.setVisible(false);
        label.setVisible(false);
        editor.setVisible(true);
        paragraph.setVisible(true);
        cancel.setVisible(true);
        save.setVisible(true);
        edit.setVisible(false);
        previewButton.setVisible(true);
        closePreviewButton.setVisible(false);
    }

    private void displayMode()
    {
        label.getElement().setProperty("innerHTML",page.getDocument().getDocument() == null ? "" : new String(page.getDocument().getDocument()));
        editor.setVisible(false);
        paragraph.setVisible(false);
        label.setVisible(true);
        cancel.setVisible(false);
        save.setVisible(false);
        preview.setVisible(false);
        previewButton.setVisible(false);
        closePreviewButton.setVisible(false);
        edit.setVisible(securityService.getAuthenticatedUser() != null);
    }
}
