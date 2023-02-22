package com.neo.putra.views.list;

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
@Route(value = "contacts", layout = MainLayout.class)
@PageTitle("Contacts | PT. Makmur Jaya")
@PermitAll
public class ContactView extends AbstractListView<Contact> {
    CrmService service;

    public ContactView(final CrmService service) {
        super("Contatcs",
                new Grid<>(Contact.class),
                new ContactForm(),
                s -> service.findAllContacts(null));
        this.service = service;
        addClassName("list-view");
    }

    protected void configureGrid() {
        grid.addClassNames("contact-grid");
        grid.setSizeFull();
        grid.setColumns("contactType", "firstName", "lastName", "name", "email", "taxId", "nik");
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
