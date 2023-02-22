package com.neo.putra.views.list;

import com.neo.putra.data.ContactType;
import com.neo.putra.data.entity.*;
import com.neo.putra.data.query.AccountSpecifications;
import com.neo.putra.data.query.ContactSpecifications;
import com.neo.putra.data.service.CrmService;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.BeanValidationBinder;

import java.time.LocalDate;
import java.util.Arrays;

public class ShippingForm extends AbstractForm<Shipment>
{
    private ComboBox<Contact> contact = new ComboBox<>("Expedisi");
    private ComboBox<SupplierPurchaseOrder> order = new ComboBox<>("Purchase Order");
    private TextField containerId = new TextField("Container ID");
    private DatePicker paymentDate = new DatePicker("Tgl pembayaran");
    private TextField invoiceId = new TextField("Invoice");
    private ComboBox<Account> account = new ComboBox<>("Account");
    
    private NumberField amount = new NumberField("Jumlah");
    private TextArea notes = new TextArea("Keterangan");

    public ShippingForm(final CrmService service) {
        super(new BeanValidationBinder<>(Shipment.class));
        add(contact, order, containerId, paymentDate, invoiceId, account, amount, notes,createButtonsLayout());
        contact.setItems(service.findAllContacts(
                Arrays.asList(ContactSpecifications.hasType(ContactType.SHIPPING))
        ));
        contact.setItemLabelGenerator(c -> c.getName());
        account.setItems(service.findAccounts(
                Arrays.asList(AccountSpecifications.hasContactType(ContactType.OWNER))
        ));
        account.setItemLabelGenerator(a -> a.getName());
        order.setItems(service.findAllSupplierPurchaseOrders(null));
        order.setItemLabelGenerator(o -> o.getProduct().getSupplier().getName() + " " + o.getProduct().getName());
        paymentDate.setValue(LocalDate.now());
        binder.forField(paymentDate).bind(
                payment -> payment.getTransaction().getPaymentDate(),
                (payment, localDate) -> payment.getTransaction().getTransactionLog().setPaymentDate(localDate));
        binder.forField(amount).bind(
                payment -> payment.getTransaction().getAmount(),
                (payment, amount) -> payment.getTransaction().getTransactionLog().setAmount(amount));
        binder.forField(account).bind(
                payment -> payment.getTransaction().getTransactionLog().getDebit(),
                (payment, account) -> payment.getTransaction().getTransactionLog().setDebit(account));
        binder.forField(notes).bind(
                payment -> payment.getTransaction().getNotes(),
                (payment, notes) -> payment.getTransaction().setNotes(notes));
    }
}
