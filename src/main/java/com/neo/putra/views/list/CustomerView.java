package com.neo.putra.views.list;

import com.neo.putra.data.ContactType;
import com.neo.putra.data.KeyValue;
import com.neo.putra.data.entity.Account;
import com.neo.putra.data.entity.Contact;
import com.neo.putra.data.service.CrmService;
import com.neo.putra.views.MainLayout;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;
import java.util.Arrays;

@Component
@Scope("prototype")
@Route(value = "customers", layout = MainLayout.class)
@PageTitle("Customers | PT. Makmur Jaya")
@PermitAll
public class CustomerView extends AbstractListView<Contact> {
    CrmService service;

    public CustomerView(final CrmService service) {
        super("Our customers",
                new Grid<>(Contact.class),
                new ContactForm(),
                filters->{
                    filters.add(
                            (root, query, cb) ->
                                    cb.equal(root.<ContactType>get("contactType"), ContactType.CUSTOMER));
                    return service.searchContacts(filters);
                });
        this.service = service;
        addClassName("list-view");
    }

    protected void configureGrid() {
        grid.addClassNames("contact-grid");
        grid.setSizeFull();
        grid.setColumns("firstName", "lastName", "name", "email");
        grid.getColumns().forEach(col -> col.setAutoWidth(true));
    }

    @Override
    protected void save(Contact entity) {
        service.save(entity);
    }

    @Override
    protected void delete(Contact entity) {
        service.delete(entity);
    }

    @Override
    protected Contact newEntity() {
        final Contact contact = new Contact();
        return contact;
    }
}
