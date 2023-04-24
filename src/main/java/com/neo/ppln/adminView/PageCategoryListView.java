package com.neo.ppln.adminView;

import com.neo.ppln.entity.PageCategory;
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
@Route(value = "admin-page-categories", layout = MainLayout.class)
@PageTitle("Page CategorybList | PPLN Chicago")
@PermitAll
public class PageCategoryListView extends AbstractListView<PageCategory> {
    private CrmService crmService;
    public PageCategoryListView(CrmService crmService)
    {
        super("Page List", new Grid<>(PageCategory.class),
                new PageCategoryEditor(crmService),
                s -> crmService.findAllPageCategories());
        this.crmService = crmService;
    }

    @Override
    protected void configureGrid() {
        grid.addClassNames("pages-category-grid");
        grid.setSizeFull();
        grid.setColumns();
        grid.addColumn(v -> v.getCategory()).setHeader("Category");
        grid.addColumn(v -> v.getCategoryIdx()).setHeader("Index");
    }

    @Override
    protected void save(PageCategory entity) {
        crmService.save(entity);
    }

    @Override
    protected void delete(PageCategory entity) {
        crmService.delete(entity);
    }

    @Override
    protected PageCategory newEntity() {
        return new PageCategory();
    }
}
