package com.neo.putra.data.service;

import com.neo.putra.data.OrderState;
import com.neo.putra.data.entity.*;
import com.neo.putra.data.query.SupplierOrderSpecifications;
import com.neo.putra.data.repository.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class CrmService {
    private DataAccess<Contact> contact;
    private DataAccess<Product> product;
    private DataAccess<SupplierPurchaseOrder> supplierPurchaseOrder;
    private DataAccess<CustomerPurchaseOrder> customerPurchaseOrder;
    private DataAccess<CustomerPayment> customerPayment;
    private DataAccess<SupplierPayment> supplierPayment;
    private DataAccess<Transaction> transaction;
    private DataAccess<Account> account;
    private DataAccess<TransactionLog> transactionLog;

    private DataAccess<Inventory> inventory;
    private DataAccess<Shipment> shipment;

    public CrmService(ContactRepository contactRepository, ProductRepository productRepository,
                      SupplierPurchaseOrderRepository supplierPurchaseOrderRepository,
                      CustomerPurchaseOrderRepository customerPurchaseOrderRepository,
                      CustomerPaymentRepository customerPaymentRepository,
                      SupplierPaymentRepository supplierPaymentRepository,
                      TransactionRepository transactionRepository,
                      AccountRepository accountRepository,
                      TransactionLogRepository transactionLogRepository,
                      InventoryRepository inventoryRepository,
                      ShipmentRepository shipmentRepository) {
        this.contact = new DataService<>(contactRepository);
        this.product = new DataService<>(productRepository);
        this.supplierPurchaseOrder = new DataService<>(supplierPurchaseOrderRepository);
        this.customerPurchaseOrder = new DataService<>(customerPurchaseOrderRepository);
        this.customerPayment = new DataService<>(customerPaymentRepository);
        this.supplierPayment = new DataService<>(supplierPaymentRepository);
        this.transaction = new DataService<>(transactionRepository);
        this.account = new DataService<>(accountRepository);
        this.transactionLog = new DataService<>(transactionLogRepository);
        this.inventory = new DataService<>(inventoryRepository);
        this.shipment = new DataService<>(shipmentRepository);
    }

    public void delete(Contact entity) {
        contact.delete(entity);
    }
    public void delete(Account entity) {
        account.delete(entity);
    }
    public void delete(CustomerPayment entity) {
        customerPayment.delete(entity);
    }
    public void delete(SupplierPayment entity) {
        supplierPayment.delete(entity);
    }

    public void delete(final CustomerPurchaseOrder entity) {
        customerPurchaseOrder.delete(entity);
    }

    public void delete(final SupplierPurchaseOrder entity) {
        supplierPurchaseOrder.delete(entity);
    }

    public void delete(Inventory entity) {
        inventory.delete(entity);
    }

    public void delete(Shipment entity) {
        shipment.delete(entity);
    }


    public void delete(Product entity) {
        product.delete(entity);
    }

    public void delete(Transaction entity) {
        transaction.delete(entity);
    }

    public void save(final CustomerPurchaseOrder entity) {
        customerPurchaseOrder.save(entity);
    }

    public Contact save(final Contact entity) {
        if (entity == null) {
            System.err.println("Contact is null. Are you sure you have connected your form to the application?");
            return null;
        }
        return contact.save(entity);
    }

    public Account save(final Account entity) {
        if (entity == null) {
            System.err.println("Account is null. Are you sure you have connected your form to the application?");
            return null;
        }
        return account.save(entity);
    }

    public void save(final CustomerPayment entity) {
        save(entity.getTransaction().getTransactionLog());
        save(entity.getTransaction());
        customerPayment.save(entity);
    }

    public void save(final SupplierPayment entity) {
        save(entity.getTransaction().getTransactionLog());
        save(entity.getTransaction());
        supplierPayment.save(entity);
    }

    public Transaction save(final Transaction entity)
    {
        return transaction.save(entity);
    }

    public TransactionLog save(final TransactionLog entity)
    {
        return transactionLog.save(entity);
    }

    public void save(Product entity) {
        product.save(entity);
    }

    public Inventory save(Inventory entity) {
        return inventory.save(entity);
    }

    public Shipment save(Shipment entity) {
        return shipment.save(entity);
    }


    public SupplierPurchaseOrder saveSupplierPurchaseOrder(SupplierPurchaseOrder entity) {

        return supplierPurchaseOrder.save(entity);
    }

    public CustomerPurchaseOrder saveCustomerPurchaseOrder(CustomerPurchaseOrder entity) {
        return customerPurchaseOrder.save(entity);
    }

    public List<Account> saveAllAccounts(List<Account> accounts) {
        return account.saveAll(accounts);
    }

    public List<Contact> saveAllContact(final List<Contact> entities) {
        return contact.saveAll(entities);
    }

    public List<Product> saveAllProducts(final List<Product> entities) {
        return product.saveAll(entities);
    }

    public List<Inventory> saveAll(List<Inventory> entities) {
        return inventory.saveAll(entities);
    }

    public List<SupplierPurchaseOrder> findAllStocks() {
        return supplierPurchaseOrder.findAll(Arrays.asList(SupplierOrderSpecifications.hasOrderState(OrderState.DO)));
    }

    public List<CustomerPurchaseOrder> findAllCustomerPurchaseOrders(
            final List<Specification<CustomerPurchaseOrder>> filters) {

        return customerPurchaseOrder.findAll(filters);
    }

    public List<SupplierPurchaseOrder> findAllSupplierPurchaseOrders(
            final List<Specification<SupplierPurchaseOrder>> filters) {
        return supplierPurchaseOrder.findAll(filters);
    }

    public List<CustomerPayment> findAllCustomerPayments(final List<Specification<CustomerPayment>> filters) {
        return customerPayment.findAll(filters);
    }

    public List<SupplierPayment> findAllSupllierPayments(final List<Specification<SupplierPayment>> filters) {
        return supplierPayment.findAll(filters);
    }

    public List<Product> findAllProducts(final List<Specification<Product>> filters) {
        return product.findAll(filters);
    }

    public List<Contact> findAllContacts(final List<Specification<Contact>> filters) {
        return contact.findAll(filters);
    }


    public List<Account> findAllAccounts() {
        return account.findAll();
    }

    public List<Transaction> findAllTransaction(List<Specification<Transaction>> filters) {
        return transaction.findAll(filters);
    }

    public List<Account> findAccounts(List<Specification<Account>> filter) {
        return account.findAll(filter);
    }

    public Transaction getTransaction(final Specification<Transaction> filter)
    {
        return transaction.find(filter);
    }

    public List<Inventory> findAllInventory(List<Specification<Inventory>> filter) {
        return inventory.findAll(filter);
    }

    public List<Shipment> findAllShipments(List<Specification<Shipment>> filter) {
        return shipment.findAll(filter);
    }


    public DataAccess<Contact> getContact() {
        return contact;
    }

    public DataAccess<Product> getProduct() {
        return product;
    }

    public DataAccess<SupplierPurchaseOrder> getSupplierPurchaseOrder() {
        return supplierPurchaseOrder;
    }

    public DataAccess<CustomerPurchaseOrder> getCustomerPurchaseOrder() {
        return customerPurchaseOrder;
    }

    public DataAccess<CustomerPayment> getCustomerPayment() {
        return customerPayment;
    }

    public DataAccess<SupplierPayment> getSupplierPayment() {
        return supplierPayment;
    }

    public DataAccess<Transaction> getTransaction() {
        return transaction;
    }

    public DataAccess<Account> getAccount() {
        return account;
    }

    public DataAccess<TransactionLog> getTransactionLog() {
        return transactionLog;
    }

    public DataAccess<Inventory> getInventory() {
        return inventory;
    }

    public DataAccess<Shipment> getShipment() {
        return shipment;
    }

}
