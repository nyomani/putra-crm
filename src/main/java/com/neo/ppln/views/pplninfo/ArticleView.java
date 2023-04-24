package com.neo.ppln.views.pplninfo;

import com.neo.ppln.entity.Document;
import com.neo.ppln.entity.Page;
import com.neo.ppln.security.SecurityService;
import com.neo.ppln.service.CrmService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import org.vaadin.tinymce.TinyMce;

public class ArticleView extends VerticalLayout {
    Div label = new Div();
    Div preview = new Div();

    private  Page page;
    private Button edit = new Button("Edit");
    private Button save = new Button("Save");
    private Button cancel = new Button("Cancel");
    private TinyMce editor = new TinyMce();
    private Button previewButton = new Button("Preview");
    private Button closePreviewButton = new Button("Close");
    private SecurityService securityService;
    private CrmService crmService;
    public ArticleView(CrmService crmService, SecurityService securityService, String name)
    {
        setSizeFull();
        this.securityService = securityService;
        this.crmService = crmService;
       page = crmService.getPage(name);
       editor.configure("plugins", "print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor imagetools code contextmenu colorpicker textpattern help");
       editor.configure("toolbar1", "formatselect | fontselect fontsizeselect | bold italic strikethrough superscript subscript forecolor backcolor | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | hr link image table code | removeformat");
       editor.configure("file_picker_types", "file image media");
       if (page == null)
       {
           final Document document = new Document();
           document.setDocument("Lorem ipsum".getBytes());
           page = new Page();
           page.setDocument(document);
           page.setTitle(name);
       }
       label.setWidth("98%");
       editor.setEditorContent(new String(page.getDocument().getDocument()));
       header();
       add(label, editor, preview, new HorizontalLayout(edit, save, cancel, closePreviewButton));
       edit.addClickListener( e -> editContent());
       closePreviewButton.addClickListener(e -> editingMode());
       save.addClickListener(e -> saveEditedContent());
       cancel.addClickListener(e -> displayMode());
       previewButton.addClickListener(e -> previewMode());
       displayMode();
    }

    protected void header()
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
        editingMode();
        editor.setEditorContent(new String(page.getDocument().getDocument()));
    }

    protected void previewMode()
    {
        preview.setVisible(true);
        preview.getElement().setProperty("innerHTML",editor.getValue());
        editor.setVisible(false);
        label.setVisible(false);
        cancel.setVisible(false);
        save.setVisible(false);
        edit.setVisible(false);
        closePreviewButton.setVisible(true);
        previewButton.setVisible(false);
    }

    protected void editingMode()
    {
        edit.setVisible(securityService.getAuthenticatedUser() != null);
        save.setVisible(false);
        cancel.setVisible(false);
        preview.setVisible(false);
        label.setVisible(false);
        editor.setVisible(true);
        cancel.setVisible(true);
        save.setVisible(true);
        edit.setVisible(false);
        previewButton.setVisible(true);
        closePreviewButton.setVisible(false);
    }

    protected void displayMode()
    {
        label.getElement().setProperty("innerHTML",page.getDocument().getDocument() == null ? "" : new String(page.getDocument().getDocument()));
        editor.setVisible(false);
        label.setVisible(true);
        cancel.setVisible(false);
        save.setVisible(false);
        preview.setVisible(false);
        previewButton.setVisible(false);
        closePreviewButton.setVisible(false);
        edit.setVisible(securityService.getAuthenticatedUser() != null);
    }
}
