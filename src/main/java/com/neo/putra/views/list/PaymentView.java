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
import static com.neo.putra.data.query.TransactionSpecification.*;

@Component
@Scope("prototype")
@Route(value = "customer-payments", layout = MainLayout.class)
@PageTitle("Payment from customers | PT. Makmur Jaya")
@PermitAll
public class PaymentView extends AbstractListView<CustomerPayment> {
    final CrmService crmService;
    private final DatePicker dateFilter = new DatePicker("Tanggal Transaksi");
    private final ComboBox<Product> brandFilter = new ComboBox<>("Brand");
    private final ComboBox<Contact> clientFilter = new ComboBox<>("Client");

    public PaymentView(final CrmService crmService) {
        super("Payment", new Grid<>(CustomerPayment.class),
                new PaymentForm(() -> crmService.findAllCustomerPurchaseOrders(null),
                                () -> crmService.findAccounts(
                                        Arrays.asList(AccountSpecifications.hasContactType(ContactType.OWNER)))),
                s -> crmService.findAllCustomerPayments(s));
        this.crmService = crmService;

        addFilter(new ColumnFilter<>(dateFilter, dateFilter::getValue, p -> hasDate(p)));
        addFilter(new ColumnFilter<>(brandFilter, brandFilter::getValue, p -> hasBrand(p)));
        addFilter(new ColumnFilter<>(clientFilter, clientFilter::getValue, p -> hasCustomerName(p)));
        List<Product> products = crmService.findAllProducts(null);
        brandFilter.setItems(products);
        clientFilter.setItems(crmService.findAllContacts(Arrays.asList(
                (root, query, cb) -> cb.equal(root.<ContactType>get("contactType"), ContactType.CUSTOMER))));
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
        grid.addColumn(p -> p.getPurchaseOrder().getContact().getName()).setHeader("Nama");
        grid.addColumn(p -> p.getPurchaseOrder().getStock().getProduct().getBrand()).setHeader("Brand");
        grid.addColumn(p -> p.getPurchaseOrder().getStock().getStockId()).setHeader("Stock Id");
        grid.addColumn(p -> p.getPurchaseOrder().getPurchaseQuantity()).setHeader("Banyak")
                .setTextAlign(ColumnTextAlign.END);
        grid.addColumn(p -> rupiah(p.getPurchaseOrder().getPurchasePrice())).setHeader("Harga")
                .setTextAlign(ColumnTextAlign.END);
        grid.addColumn(p -> rupiah(p.getPurchaseOrder().getPurchaseQuantity() * p.getPurchaseOrder()
                .getPurchasePrice())).setHeader("Jumlah").setTextAlign(ColumnTextAlign.END);
        grid.addColumn(p -> p.getTransaction().getAccount().getName()).setHeader("Account");
        grid.addColumn(p -> rupiah(p.getTransaction().getAmount().doubleValue())).setHeader("Pembayaran")
                .setTextAlign(ColumnTextAlign.END);
    }

    @Override
    protected void save(CustomerPayment entity) {
        Transaction credit = null;
        if (entity.getTransaction().getTransactionLog().getId() != null)
        {
            credit = crmService.getTransaction(havingTransactionLog(TransactionType.CREDIT,
                    entity.getTransaction().getTransactionLog()));
        }

        if (credit == null)
        {
            credit = new Transaction();
            credit.setType(TransactionType.CREDIT);
            credit.setTransactionLog(entity.getTransaction().getTransactionLog());
        }
        credit.setNotes(entity.getTransaction().getNotes());
        entity.getTransaction().getTransactionLog().setDebit(entity.getPurchaseOrder().getContact().getAccount());
        crmService.save(entity);
        crmService.save(credit);
    }

    @Override
    protected void delete(CustomerPayment entity) {
        crmService.delete(entity);
    }

    @Override
    protected CustomerPayment newEntity() {
        CustomerPayment payment = new CustomerPayment();
        Transaction debit = new Transaction();
        debit.setType(TransactionType.DEBIT);
        TransactionLog log = new TransactionLog();
        debit.setTransactionLog(log);
        payment.setTransaction(debit);
        return payment;
    }
}
