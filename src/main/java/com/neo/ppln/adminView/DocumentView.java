package com.neo.ppln.adminView;

import com.neo.ppln.entity.Document;
import com.neo.ppln.publicView.AbstractListView;
import com.neo.ppln.service.CrmService;
import com.neo.ppln.views.MainLayout;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;

@Component
@Scope("prototype")
@Route(value = "documents", layout = MainLayout.class)
@PageTitle("Voter Registration | PPLN Chicago")
@PermitAll

public class DocumentView extends AbstractListView<Document> {

    private final CrmService crmService;
    public DocumentView(final CrmService crmService) {
        super("Document", new Grid<>(Document.class), new DocumentForm(new Binder<>(Document.class)),
                s -> crmService.findDocumentWithUrl());
        this.crmService = crmService;
    }

    @Override
    protected void configureGrid() {
        grid.addClassNames("document-grid");
        grid.setSizeFull();
        grid.setColumns();
        grid.addColumn(v -> v.getFileName()).setHeader("File Name").setSortable(true).setWidth("200px").setFlexGrow(0);
        grid.addColumn(v -> v.getUrl()).setHeader("Url").setSortable(true).setWidth("600px").setFlexGrow(1);

    }

    @Override
    protected void save(Document entity) {
        crmService.save(entity);
    }

    @Override
    protected void delete(Document entity) {
        crmService.delete(entity);
    }

    @Override
    protected Document newEntity() {
        return new Document();
    }
}
