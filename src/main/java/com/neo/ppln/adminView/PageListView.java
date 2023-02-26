package com.neo.ppln.adminView;

import com.neo.ppln.entity.Document;
import com.neo.ppln.entity.Page;
import com.neo.ppln.publicView.AbstractListView;
import com.neo.ppln.service.CrmService;
import com.neo.ppln.views.MainLayout;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;

@Component
@Scope("prototype")
@Route(value = "admin-pages", layout = MainLayout.class)
@PageTitle("Voter Registration | PPLN Chicago")
@PermitAll

public class PageListView extends AbstractListView<Page> {
    private CrmService crmService;
    public PageListView(CrmService crmService)
    {
        super("Page List", new Grid<>(Page.class), new PageEditor(crmService), s -> crmService.findAllPages());
        this.crmService = crmService;
    }

    @Override
    protected void configureGrid() {

    }

    @Override
    protected void save(Page entity) {
        crmService.save(entity);
    }

    @Override
    protected void delete(Page entity) {
        crmService.delete(entity);
    }

    @Override
    protected Page newEntity() {
        Document doc = new Document();
        Page p = new Page();
        p.setDocument(doc);
        return p;
    }
}
