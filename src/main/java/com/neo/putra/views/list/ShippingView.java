package com.neo.putra.views.list;

import com.neo.putra.data.TransactionType;
import com.neo.putra.data.entity.Shipment;
import com.neo.putra.data.entity.Transaction;
import com.neo.putra.data.entity.TransactionLog;
import com.neo.putra.data.service.CrmService;
import com.neo.putra.views.MainLayout;
import com.vaadin.flow.component.grid.ColumnTextAlign;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;

import static com.neo.putra.data.query.TransactionSpecification.havingTransactionLog;

@Component
@Scope("prototype")
@Route(value = "shipping", layout = MainLayout.class)
@PageTitle("Shipping | PT. Makmur Jaya")
@PermitAll
public class ShippingView extends AbstractListView<Shipment> {
    final CrmService service;
    public ShippingView(final CrmService service) {
        super("Shipping",
                new Grid<>(Shipment.class),
                new ShippingForm(service),
                s -> service.findAllShipments(s));
        this.service = service;
    }

    @Override
    protected void configureGrid() {
        grid.setSizeFull();
        grid.setColumns();
        grid.addColumn(s -> s.getContact().getName()).setHeader("Shipping Company");
        grid.addColumn(s -> date(s.getTransaction().getTransactionLog().getPaymentDate())).setHeader("Tgl Pembayaran");
        grid.addColumn(s -> s.getOrder().getProduct().getName()).setHeader("Product");
        grid.addColumn(s -> s.getOrder().getProduct().getSupplier().getName()).setHeader("Supplier");
        grid.addColumn(s -> s.getContainerId()).setHeader("Container Id");
        grid.addColumn(s -> rupiah(s.getTransaction().getTransactionLog().getAmount())).setHeader("Jumlah")
                .setTextAlign(ColumnTextAlign.END);
        grid.addColumn(s -> s.getTransaction().getNotes()).setHeader("Keterangan");
    }

    @Override
    protected void save(Shipment entity) {
        Transaction debit = null;
        if (entity.getTransaction().getTransactionLog().getId() != null)
        {
            debit = service.getTransaction(havingTransactionLog(TransactionType.CREDIT,
                    entity.getTransaction().getTransactionLog()));
        }

        if (debit == null)
        {
            debit = new Transaction();
            debit.setType(TransactionType.DEBIT);
            debit.setTransactionLog(entity.getTransaction().getTransactionLog());
        }
        entity.getTransaction().getTransactionLog().setCredit(entity.getContact().getAccount());
        service.save(entity.getTransaction().getTransactionLog());
        service.save(debit);
        service.save(entity.getTransaction());
        service.save(entity);
    }

    @Override
    protected void delete(Shipment entity) {
        service.delete(entity);
    }

    @Override
    protected Shipment newEntity() {
        Shipment s = new Shipment();
        TransactionLog log = new TransactionLog();
        Transaction transaction = new Transaction();
        transaction.setType(TransactionType.CREDIT);
        transaction.setTransactionLog(log);
        s.setTransaction(transaction);
        return s;
    }
}
