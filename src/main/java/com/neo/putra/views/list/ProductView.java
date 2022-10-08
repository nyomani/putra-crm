package com.neo.putra.views.list;

import com.neo.putra.data.entity.Product;
import com.neo.putra.data.service.CrmService;
import com.neo.putra.views.MainLayout;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.data.binder.BeanValidationBinder;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;

@Component
@Scope("prototype")
@Route(value = "products", layout = MainLayout.class)
@PageTitle("Products | PT. Makmur Jaya")
@PermitAll
public class ProductView extends AbstractListView<Product> {
    private final CrmService service;
    public ProductView(final CrmService service) {
        super("Products",
                new Grid<>(Product.class),
                new ProductForm(service),
                (filters) -> service.searchProducts(filters));
        this.service = service;
    }

    @Override
    protected void configureGrid() {
        grid.addClassNames("contact-grid");
        grid.setSizeFull();
        grid.setColumns("name", "brand", "productCode", "unit");
        grid.addColumn(p -> p.getSupplier().getName()).setHeader("Supplier");
        grid.getColumns().forEach(col -> col.setAutoWidth(true));

    }

    @Override
    protected void save(Product product) {
        service.save(product);
    }

    @Override
    protected void delete(Product product) {
        service.delete(product);
    }

    @Override
    protected Product newEntity() {
        return new Product();
    }
}
