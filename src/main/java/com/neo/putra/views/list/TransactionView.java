package com.neo.putra.views.list;

import com.neo.putra.components.ColumnFilter;
import com.neo.putra.data.entity.Account;
import com.neo.putra.data.entity.Transaction;
import com.neo.putra.data.service.CrmService;
import com.neo.putra.views.MainLayout;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.grid.ColumnTextAlign;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;

import static com.neo.putra.data.query.TransactionSpecification.hasAccount;
import static com.neo.putra.data.query.TransactionSpecification.hasTransactionDate;

@Component
@Scope("prototype")
@Route(value = "transactions", layout = MainLayout.class)
@PageTitle("Transaksi Keuangan | PT. Makmur Jaya")
@PermitAll
public class TransactionView extends AbstractListView<Transaction> {
    final CrmService service;
    private final DatePicker dateFilter = new DatePicker("Tanggal Transaksi");
    private final ComboBox<Account> accountFilter = new ComboBox<>("Account");
    public TransactionView(final CrmService service) {
        super("Tranksaksi", new Grid<>(Transaction.class),
                new TransactionForm(service), specifications -> service.findAllTransaction(specifications));
        this.service = service;
        addFilter(new ColumnFilter<>(dateFilter, dateFilter::getValue, p -> hasTransactionDate(p)));
        addFilter(new ColumnFilter<>(accountFilter, accountFilter::getValue, p -> hasAccount(p)));
        accountFilter.setItems(service.allAccounts());
        accountFilter.setItemLabelGenerator(a -> a.getName());
        accountFilter.addValueChangeListener(e -> updateList());
        dateFilter.addValueChangeListener(e -> updateList());
        disableAddition();
    }

    @Override
    protected void configureGrid() {
        grid.addClassNames("transaction-grid");
        grid.setSizeFull();
        grid.setColumns();
        grid.addColumn(t -> t.getTransactionId()).setHeader("ID");
        grid.addColumn(t -> t.getAccount().getName()).setHeader("Bank");
        grid.addColumn(t -> t.getAccount().getAccountNumber()).setHeader("Account");
        grid.addColumn(t -> t.getType()).setHeader("Type");
        grid.addColumn(t -> t.getAccount().getContact().getName()).setHeader("From/To");
        grid.addColumn(t -> date(t.getPaymentDate())).setHeader("Tgl Transaksi");
        grid.addColumn(t -> date(t.getSettlementDate())).setHeader("Tgl Cair");
        grid.addColumn(t -> rupiah(t.getAmount())).setHeader("Jumlah").setTextAlign(ColumnTextAlign.END);
        grid.addColumn(t -> t.getNotes()).setHeader("Catatan");
    }

    @Override
    protected void save(Transaction entity) {

    }

    @Override
    protected void delete(Transaction entity) {

    }

    @Override
    protected Transaction newEntity() {
     return null;
    }
}
