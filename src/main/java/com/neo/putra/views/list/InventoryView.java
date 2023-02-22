package com.neo.putra.views.list;

import com.neo.putra.data.entity.Inventory;
import com.neo.putra.data.service.CrmService;
import com.neo.putra.views.MainLayout;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;

@Component
@Scope("prototype")
@Route(value = "inventory", layout = MainLayout.class)
@PageTitle("Inventories| PT. Makmur Jaya")
@PermitAll
public class InventoryView extends AbstractListView<Inventory> {
    private final CrmService service;
    public InventoryView(final CrmService service) {
        super("Inventory",
                new Grid<>(Inventory.class),
                new InventoryForm(),
                filter -> service.findAllInventory(filter));
        this.service = service;
    }

    @Override
    protected void configureGrid() {
        setClassName("inventory-grid");
        grid.setSizeFull();
        grid.setColumns();
        grid.addColumn(i -> i.getName()).setHeader("Name");
        grid.addColumn(i -> i.getBrand()).setHeader("Brand");
        grid.addColumn(i -> date(i.getPurchaseDate())).setHeader("Tanggal Beli");
        grid.addColumn(i -> i.getTotal()).setHeader("Banyak");
        grid.addColumn(i -> rupiah(i.getPricePerUnit())).setHeader("Harga beli");
        grid.addColumn(i -> rupiah(i.value())).setHeader("Jumlah");
        grid.addColumn(i -> i.getNotes()).setHeader("Keterangan");

    }

    @Override
    protected void save(Inventory entity) {
        service.save(entity);
    }

    @Override
    protected void delete(Inventory entity) {
        service.delete(entity);
    }

    @Override
    protected Inventory newEntity() {
        return new Inventory();
    }
}
