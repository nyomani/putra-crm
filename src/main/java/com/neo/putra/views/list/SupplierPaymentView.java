package com.neo.putra.views.list;

import com.neo.putra.components.ColumnFilter;
import com.neo.putra.data.ContactType;
import com.neo.putra.data.TransactionType;
import com.neo.putra.data.entity.*;
import com.neo.putra.data.query.AccountSpecifications;
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
import java.util.Arrays;
import java.util.List;

import static com.neo.putra.data.query.PaymentSpecifications.*;
import static com.neo.putra.data.query.TransactionSpecification.havingTransactionLog;

@Component
@Scope("prototype")
@Route(value = "supplier-payments", layout = MainLayout.class)
@PageTitle("Payment to suppliers | PT. Makmur Jaya")
@PermitAll
public class SupplierPaymentView extends AbstractListView<SupplierPayment> {
    final CrmService crmService;
    private final DatePicker dateFilter = new DatePicker("Tanggal Transaksi");
    private final ComboBox<Product> brandFilter = new ComboBox<>("Brand");
    private final ComboBox<Contact> clientFilter = new ComboBox<>("Supplier");

    public SupplierPaymentView(final CrmService crmService) {
        super("Payment", new Grid<>(SupplierPayment.class),
                new SupplierPaymentForm(() -> crmService.findAllSupplierPurchaseOrders(null),
                        () -> crmService.findAccounts(
                                Arrays.asList(AccountSpecifications.hasContactType(ContactType.OWNER)))),
                s -> crmService.findAllSupllierPayments(s));
        this.crmService = crmService;

        addFilter(new ColumnFilter<>(dateFilter, dateFilter::getValue, p -> hasDate(p)));
        addFilter(new ColumnFilter<>(brandFilter, brandFilter::getValue, p -> hasBrand(p)));
        addFilter(new ColumnFilter<>(clientFilter, clientFilter::getValue, p -> hasCustomerName(p)));
        List<Product> products = crmService.findAllProducts(null);
        brandFilter.setItems(products);
        clientFilter.setItems(crmService.findAllContacts(Arrays.asList(
                (root, query, cb) -> cb.equal(root.<ContactType>get("contactType"), ContactType.SUPPLIER))));
        brandFilter.setItemLabelGenerator(p -> p == null ? "Not Selected" : p.getBrand());
        clientFilter.setItemLabelGenerator(c -> c == null ? "Not Selected" : c.getName());

        brandFilter.addValueChangeListener(v -> updateList());
        clientFilter.addValueChangeListener(v -> updateList());
        dateFilter.addValueChangeListener(d -> updateList());
        dateFilter.setClearButtonVisible(true);
        brandFilter.setClearButtonVisible(true);
        clientFilter.setClearButtonVisible(true);
    }

    @Override
    protected void configureGrid() {
        grid.setSizeFull();
        grid.setColumns();
        grid.addColumn(p -> date(p.getTransaction().getPaymentDate())).setHeader("Tanggal");
        grid.addColumn(p -> p.getPurchaseOrder().getId()).setHeader("No Faktur");
        grid.addColumn(p -> p.getPurchaseOrder().getProduct().getSupplier().getName()).setHeader("Nama");
        grid.addColumn(p -> p.getPurchaseOrder().getProduct().getBrand()).setHeader("Brand");
        grid.addColumn(p -> p.getPurchaseOrder().getPurchaseQuantity()).setHeader("Banyak")
                .setTextAlign(ColumnTextAlign.END);
        grid.addColumn(p -> rupiah(p.getPurchaseOrder().getPurchasePrice())).setHeader("Harga")
                .setTextAlign(ColumnTextAlign.END);
        grid.addColumn(p -> rupiah(p.getPurchaseOrder().getPurchaseQuantity() * p.getPurchaseOrder()
                .getPurchasePrice())).setHeader("Jumlah").setTextAlign(ColumnTextAlign.END);
        grid.addColumn(p -> p.getTransaction().getTransactionLog().getDebit().getName()).setHeader("Account");
        grid.addColumn(p -> rupiah(p.getTransaction().getAmount().doubleValue())).setHeader("Pembayaran")
                .setTextAlign(ColumnTextAlign.END);
    }

    @Override
    protected void save(SupplierPayment entity) {
        Transaction debit = null;
        if (entity.getTransaction().getTransactionLog().getId() != null) {
            debit = crmService.getTransaction(havingTransactionLog(TransactionType.DEBIT,
                    entity.getTransaction().getTransactionLog()));
        }

        if (debit == null) {
            debit = new Transaction();
            debit.setType(TransactionType.DEBIT);
            debit.setTransactionLog(entity.getTransaction().getTransactionLog());
        }
        debit.setNotes(entity.getTransaction().getNotes());
        entity.getTransaction().getTransactionLog().setCredit(entity.getPurchaseOrder()
                .getProduct().getSupplier().getAccount());
        crmService.save(entity);
        crmService.save(debit);
    }

    @Override
    protected void delete(SupplierPayment entity) {
        crmService.delete(entity);
    }

    @Override
    protected SupplierPayment newEntity() {
        SupplierPayment payment = new SupplierPayment();
        Transaction credit = new Transaction();
        TransactionLog log = new TransactionLog();
        credit.setTransactionLog(log);
        payment.setTransaction(credit);
        return payment;
    }
}
