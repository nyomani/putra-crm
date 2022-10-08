package com.neo.putra.views.list;

import com.neo.putra.data.ContactType;
import com.neo.putra.data.entity.Contact;
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
@Route(value = "suppliers", layout = MainLayout.class)
@PageTitle("Suppliers | PT. Makmur Jaya")
@PermitAll
public class SupplierView extends AbstractListView<Contact> {
    final CrmService service;

    public SupplierView(final CrmService service) {
        super( "Suppliers",
                new Grid<>(Contact.class),
                new ContactForm(),
                filters -> {
                    filters.add((root, query, cb) ->
                            cb.equal(root.<ContactType>get("contactType"), ContactType.SUPPLIER));
                    return service.searchContacts(filters);
                });
        this.service = service;
    }

    @Override
    protected void configureGrid() {
        grid.addClassNames("contact-grid");
        grid.setSizeFull();
        grid.setColumns("name", "firstName", "lastName", "address", "telp", "email", "taxId");
        grid.getColumns().forEach(col -> col.setAutoWidth(true));
    }

    @Override
    protected void save(Contact supplier) {
        service.save(supplier);

    }

    @Override
    protected void delete(Contact supplier) {
        service.delete(supplier);
    }

    @Override
    protected Contact newEntity() {
        final Contact contact = new Contact();
        contact.setContactType(ContactType.SUPPLIER);
        return contact;
    }
}
