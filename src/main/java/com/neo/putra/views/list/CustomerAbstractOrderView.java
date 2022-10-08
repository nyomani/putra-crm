package com.neo.putra.views.list;

import com.neo.putra.components.ColumnFilter;
import com.neo.putra.data.ContactType;
import com.neo.putra.data.TransactionType;
import com.neo.putra.data.entity.*;
import com.neo.putra.data.query.AccountSpecifications;
import com.neo.putra.data.query.ProductSpecifications;
import com.neo.putra.data.service.CrmService;
import com.neo.putra.views.event.CloseEvent;
import com.neo.putra.views.event.SaveEvent;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.grid.ColumnTextAlign;
import com.vaadin.flow.component.grid.Grid;
import org.springframework.data.jpa.domain.Specification;

import java.util.*;
import java.util.function.Function;

import static com.neo.putra.data.query.CustomerOrderSpecifications.*;

public class CustomerAbstractOrderView extends AbstractListView<CustomerPurchaseOrder> {
    final CrmService service;
    private final PaymentForm paymentForm;
    private final DatePicker dateFilter = new DatePicker("Tanggal Transaksi");
    private final ComboBox<Product> productFilter = new ComboBox<>("Produk");
    private final ComboBox<Product> brandFilter = new ComboBox<>("Brand");
    private final ComboBox<Contact> clientFilter = new ComboBox<>("Client");

    private final ComboBox<Contact> salesFilter = new ComboBox<>("Sales");
    public CustomerAbstractOrderView(final CrmService service,
                                     final String title,
                                     final Function<List<Specification<CustomerPurchaseOrder>>,
                                             List<CustomerPurchaseOrder>> contentProvider) {
        super(title,
                new Grid<>(CustomerPurchaseOrder.class),
                new CustomerPurchaseOrderForm(service),
                contentProvider);
        this.service = service;
        paymentForm = new PaymentForm(() -> service.findAllCustomerPurchaseOrders(null),
                () -> service.findAccounts(Arrays.asList(AccountSpecifications.hasContactType(ContactType.OWNER))));
        content.add(paymentForm);
        content.setFlexGrow(0.5, paymentForm);
        content.setFlexShrink(0, paymentForm);
        paymentForm.setVisible(false);
        paymentForm.addListener(SaveEvent.class, this::savePayment);
        paymentForm.addListener(CloseEvent.class, e -> closePaymentEditor());
        addFilter(new ColumnFilter<>(dateFilter, dateFilter::getValue, p -> hasDate(p)));
        addFilter(new ColumnFilter<>(productFilter, productFilter::getValue, p -> hasProduct(p)));
        addFilter(new ColumnFilter<>(brandFilter, brandFilter::getValue, p -> hasBrand(p)));
        addFilter(new ColumnFilter<>(clientFilter, clientFilter::getValue, p -> hasCustomerName(p)));
        addFilter(new ColumnFilter<>(salesFilter, salesFilter::getValue, p -> hasSalesName(p)));
        List<Product> products = service.findAllProducts(null);
        Map<String, Product> productNameMap = new HashMap<>();
        products.forEach(p -> productNameMap.put(p.getName(), p));
        productFilter.setItems(productNameMap.values());
        clientFilter.setItems(service.searchContacts(Arrays.asList(
                (root, query, cb) -> cb.equal(root.<ContactType>get("contactType"), ContactType.CUSTOMER))));
        salesFilter.setItems(service.searchContacts(Arrays.asList(
                (root, query, cb) -> cb.equal(root.<ContactType>get("contactType"), ContactType.SALES))));
        productFilter.setItemLabelGenerator(p -> p == null ? "Not Selected" : p.getName());
        brandFilter.setItemLabelGenerator(p -> p == null ? "Not Selected" : p.getBrand());
        clientFilter.setItemLabelGenerator(c -> c == null ? "Not Selected" : c.getName());
        salesFilter.setItemLabelGenerator(c -> c == null ? "Not Selected" : c.getName());
        productFilter.addValueChangeListener(v -> {
            List<Product> productBrandList;
            if (v.getValue() == null) {
                productBrandList = service.findAllProducts(null);

            }
            else {
                productBrandList = service.searchProducts(
                        Arrays.asList(ProductSpecifications.hasName(v.getValue().getName())));
            }
            brandFilter.setItems(productBrandList);
            updateList();
        });
        brandFilter.addValueChangeListener(v -> updateList());
        clientFilter.addValueChangeListener(v -> updateList());
        dateFilter.addValueChangeListener(d ->updateList());
        salesFilter.addValueChangeListener(d ->updateList());
        productFilter.setClearButtonVisible(true);
        dateFilter.setClearButtonVisible(true);
        brandFilter.setClearButtonVisible(true);
        clientFilter.setClearButtonVisible(true);
        salesFilter.setClearButtonVisible(true);
    }


    private void savePayment(SaveEvent event) {
        CustomerPayment entity = ((PaymentForm) event.getSource()).getEntity();
        final Transaction credit = new Transaction();
        credit.setType(TransactionType.CREDIT);
        credit.setNotes(entity.getTransaction().getNotes());
        credit.setTransactionLog(entity.getTransaction().getTransactionLog());
        entity.getTransaction().setType(TransactionType.DEBIT);
        entity.getTransaction().getTransactionLog().setDebit(entity.getPurchaseOrder().getContact().getAccount());
        service.save(credit.getTransactionLog());
        service.save(credit);
        service.save(entity);
        closePaymentEditor();
        updateList();
    }

    private void closePaymentEditor() {
        paymentForm.setEntity(null);
        paymentForm.setVisible(false);
        removeClassName("editing");
    }


    protected CustomerPurchaseOrder newEntity() {
        final CustomerPurchaseOrder po = new CustomerPurchaseOrder();
        return po;
    }


    public void payment(CustomerPurchaseOrder order) {
        if (order == null) {
            closePaymentEditor();
        } else {
            addClassName("editing");
            CustomerPayment payment = new CustomerPayment();
            payment.setPurchaseOrder(order);
            Transaction debit = new Transaction();
            TransactionLog log = new TransactionLog();
            debit.setTransactionLog(log);
            payment.setTransaction(debit);
            paymentForm.setEntity(payment);
            paymentForm.setVisible(true);
        }
    }

    protected void configureGrid() {
        grid.addClassNames("purchase-order-grid");
        grid.setSizeFull();
        grid.setColumns();
        grid.addColumn(order -> date(order.getOrderDate())).setHeader("Tanggal");
        grid.addColumn(order -> order.getId()).setHeader("No Faktur");
        grid.addColumn(order -> order.getContact().getName()).setHeader("Nama");
        grid.addColumn(order -> order.getContact().getAddress()).setHeader("Alamat");
        grid.addColumn(order -> order.getStock().getStockId()).setHeader("Stock ID");
        grid.addColumn(order -> order.getStock().getProduct().getName()).setHeader("Product");
        grid.addColumn(order -> order.getPurchaseQuantity()).setHeader("Banyak");
        grid.addColumn(order -> rupiah(order.getPurchasePrice())).setHeader("Harga").setTextAlign(ColumnTextAlign.END);
        grid.addColumn(order -> rupiah(order.getPurchaseQuantity() * order.getPurchasePrice())).setHeader("Jumlah");
        grid.addColumn(o -> rupiah(o.getPayments()
                        .stream().mapToDouble(p -> p.getTransaction().getAmount().doubleValue()).sum()))
                .setHeader("Terbayar").setTextAlign(ColumnTextAlign.END);
        grid.addColumn(order -> date(order.getDeliveryDate())).setHeader("DO Date");
        grid.getColumns().forEach(col -> col.setAutoWidth(true));
    }


    @Override
    protected void save(CustomerPurchaseOrder entity) {
        service.save(entity);
    }

    @Override
    protected void delete(CustomerPurchaseOrder entity) {
        service.delete(entity);
    }
}
