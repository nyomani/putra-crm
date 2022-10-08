package com.neo.putra.views.list;

import com.neo.putra.components.ColumnFilter;
import com.neo.putra.data.ContactType;
import com.neo.putra.data.entity.Account;
import com.neo.putra.data.entity.Contact;
import com.neo.putra.data.service.CrmService;
import com.neo.putra.views.MainLayout;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.grid.ColumnTextAlign;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;

import java.util.Arrays;

import static com.neo.putra.data.query.AccountSpecifications.*;

@Component
@Scope("prototype")
@Route(value = "accounts", layout = MainLayout.class)
@PageTitle("Accounts | PT. Makmur Jaya")
@PermitAll

public class AccountView extends AbstractListView<Account>
{
    final CrmService service;
    final ComboBox<ContactType> accountTypeFilter = new ComboBox<>("Account Type");
    final ComboBox<Contact> ownerFilter = new ComboBox<>("Account Owner");
    public AccountView(final CrmService service) {
        super("Account", new Grid<>(Account.class),
                new AccountForm(service),
                filter -> service.findAccounts(filter));
        this.service = service;
        addFilter(new ColumnFilter<>(accountTypeFilter, accountTypeFilter::getValue, p -> hasContactType(p)));
        addFilter(new ColumnFilter<>(ownerFilter, ownerFilter::getValue, p -> hasContact(p)));
        accountTypeFilter.addValueChangeListener(v -> updateList());
        ownerFilter.addValueChangeListener(v -> updateList());
        accountTypeFilter.setItems(Arrays.asList(ContactType.OWNER, ContactType.CUSTOMER, ContactType.SUPPLIER,
                ContactType.EMPLOYEE));
        ownerFilter.setItems(service.searchContacts(null));
        accountTypeFilter.setClearButtonVisible(true);
        ownerFilter.setClearButtonVisible(true);
        ownerFilter.setItemLabelGenerator(c -> c.getName());
    }

    @Override
    protected void configureGrid() {
        grid.addClassNames("account-grid");
        grid.setSizeFull();
        grid.setColumns();
        grid.addColumn(a -> a.getContact() == null ? "" : a.getContact().getName()).setHeader("Pemilik");
        grid.addColumn(a -> a.getContact() == null ? "" : a.getContact().getContactType()).setHeader("Relasi");
        grid.addColumn(a -> a.getName()).setHeader("Bank");
        grid.addColumn(a -> a.getAccountNumber()).setHeader("Account");
        grid.addColumn(a -> rupiah(a.getInitialBalance())).setHeader("Saldo Awal").setTextAlign(ColumnTextAlign.END);
        grid.addColumn(a -> rupiah(a.getBalance())).setHeader("Saldo").setTextAlign(ColumnTextAlign.END);
    }

    @Override
    protected void save(Account entity) {
        service.save(entity);
    }

    @Override
    protected void delete(Account entity) {
        service.delete(entity);
    }

    @Override
    protected Account newEntity() {
        return new Account();
    }
}
