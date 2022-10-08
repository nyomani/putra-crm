package com.neo.putra.data.service;

import com.neo.putra.data.OrderState;
import com.neo.putra.data.TransactionType;
import com.neo.putra.data.entity.*;
import com.neo.putra.data.query.SupplierOrderSpecifications;
import com.neo.putra.data.repository.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class CrmService {
    private ContactRepository contactRepository;
    private ProductRepository productRepository;
    private SupplierPurchaseOrderRepository supplierPurchaseOrderRepository;
    private CustomerPurchaseOrderRepository customerPurchaseOrderRepository;
    private CustomerPaymentRepository customerPaymentRepository;
    private SupplierPaymentRepository supplierPaymentRepository;
    private SupplierPaymentRepository supplierRepository;
    private TransactionRepository transactionRepository;
    private AccountRepository accountRepository;
    private TransactionLogRepository transactionLogRepository;
    private final SpecificationQueryBuilder<CustomerPurchaseOrder> customerOrderRepo;
    private final SpecificationQueryBuilder<SupplierPurchaseOrder> supplierOrderRepo;
    private final SpecificationQueryBuilder<Contact> contactRepo;
    private final SpecificationQueryBuilder<Product> productRepo;
    private final SpecificationQueryBuilder<CustomerPayment> customerPaymentRepo;
    private final SpecificationQueryBuilder<Account> accountRepo;
    private final SpecificationQueryBuilder<Transaction> transactionRepo;
    private final SpecificationQueryBuilder<TransactionLog> transactionLogRepo;
    private final SpecificationQueryBuilder<SupplierPayment> supplierPaymentRepo;
    public CrmService(ContactRepository contactRepository, ProductRepository productRepository,
                      SupplierPurchaseOrderRepository supplierPurchaseOrderRepository,
                      CustomerPurchaseOrderRepository customerPurchaseOrderRepository,
                      CustomerPaymentRepository customerPaymentRepository,
                      SupplierPaymentRepository supplierPaymentRepository,
                      SupplierPaymentRepository supplierRepository,
                      TransactionRepository transactionRepository,
                      AccountRepository accountRepository,
                      TransactionLogRepository transactionLogRepository) {
        this.contactRepository = contactRepository;
        this.productRepository = productRepository;
        this.supplierPurchaseOrderRepository = supplierPurchaseOrderRepository;
        this.customerPurchaseOrderRepository = customerPurchaseOrderRepository;
        this.customerPaymentRepository = customerPaymentRepository;
        this.supplierPaymentRepository = supplierPaymentRepository;
        this.supplierRepository = supplierRepository;
        this.transactionRepository = transactionRepository;
        this.accountRepository = accountRepository;
        this.transactionLogRepository = transactionLogRepository;

        this.customerOrderRepo = new SpecificationQueryBuilder<>(customerPurchaseOrderRepository);
        this.supplierOrderRepo = new SpecificationQueryBuilder<>(supplierPurchaseOrderRepository);
        this.contactRepo = new SpecificationQueryBuilder<>(contactRepository);
        this.customerPaymentRepo = new SpecificationQueryBuilder<>(customerPaymentRepository);
        this.productRepo = new SpecificationQueryBuilder<>(productRepository);
        this.accountRepo = new SpecificationQueryBuilder<>(accountRepository);
        this.transactionRepo = new SpecificationQueryBuilder<>(transactionRepository);
        this.supplierPaymentRepo = new SpecificationQueryBuilder<>(supplierPaymentRepository);
        this.transactionLogRepo = new SpecificationQueryBuilder<>(transactionLogRepository);
    }

    public long countContacts() {
        return contactRepository.count();
    }

    public void delete(Contact contact) {
        contactRepository.delete(contact);
    }
    public void delete(Account account) {
        accountRepository.delete(account);
    }
    public void delete(CustomerPayment payment) {
        customerPaymentRepository.delete(payment);
    }
    public void delete(SupplierPayment payment) {
        supplierPaymentRepository.delete(payment);
    }

    public void delete(final CustomerPurchaseOrder entity) {
        customerPurchaseOrderRepository.delete(entity);
    }

    public void delete(final SupplierPurchaseOrder entity) {
        supplierPurchaseOrderRepository.delete(entity);
    }

    public void save(final CustomerPurchaseOrder entity) {
        customerPurchaseOrderRepository.save(entity);
    }

    public Contact save(final Contact contact) {
        if (contact == null) {
            System.err.println("Contact is null. Are you sure you have connected your form to the application?");
            return null;
        }
        return contactRepository.save(contact);
    }

    public Account save(final Account account) {
        if (account == null) {
            System.err.println("Contact is null. Are you sure you have connected your form to the application?");
            return null;
        }
        return accountRepository.save(account);
    }

    public void save(final CustomerPayment payment) {
        save(payment.getTransaction().getTransactionLog());
        save(payment.getTransaction());
        customerPaymentRepository.save(payment);
    }

    public void save(final SupplierPayment payment) {
        save(payment.getTransaction().getTransactionLog());
        save(payment.getTransaction());
        supplierPaymentRepository.save(payment);
    }


    public Transaction save(final Transaction transaction)
    {
        return transactionRepository.save(transaction);
    }

    public TransactionLog save(final TransactionLog entity)
    {
        return transactionLogRepository.save(entity);
    }

    public List<CustomerPurchaseOrder> findAllCustomerPurchaseOrders(final String stringFilter) {

        if (stringFilter == null || stringFilter.isEmpty()) {
            return customerPurchaseOrderRepository.findAll();
        } else {
            return customerPurchaseOrderRepository.search(stringFilter);
        }
    }

    public List<Product> findAllProducts(final String filter) {
        if (filter == null || filter.isEmpty()) {
            return productRepository.findAll();
        } else {
            return productRepository.search(filter);
        }
    }

    public void save(Product product) {
        productRepository.save(product);
    }

    public void delete(Product product) {
        productRepository.delete(product);
    }

    public void delete(Transaction transaction) {
        transactionRepository.delete(transaction);
    }

    public List<SupplierPurchaseOrder> findStocks() {
        return supplierOrderRepo.findAll(Arrays.asList(SupplierOrderSpecifications.hasOrderState(OrderState.DO)));
    }


    public List<Contact> saveAllContact(final List<Contact> contacts) {
        return contactRepository.saveAll(contacts);
    }

    public List<Product> saveAllProducts(final List<Product> entities) {
        return productRepository.saveAll(entities);
    }

    public void saveSupplierPurchaseOrder(SupplierPurchaseOrder entity) {

        supplierPurchaseOrderRepository.save(entity);
    }

    public void saveCustomerPurchaseOrder(CustomerPurchaseOrder entity) {
        customerPurchaseOrderRepository.save(entity);
    }

    public List<CustomerPurchaseOrder> searchCustomerPurchaseOrders(
            final List<Specification<CustomerPurchaseOrder>> filters) {

        return customerOrderRepo.findAll(filters);
    }

    public List<SupplierPurchaseOrder> searchSupplierPurchaseOrders(
            final List<Specification<SupplierPurchaseOrder>> filters) {
        return supplierOrderRepo.findAll(filters);
    }

    public List<CustomerPayment> searchPayments(final List<Specification<CustomerPayment>> filters) {
        return customerPaymentRepo.findAll(filters);
    }

    public List<SupplierPayment> searchSupllierPayments(final List<Specification<SupplierPayment>> filters) {
        return supplierPaymentRepo.findAll(filters);
    }

    public List<Product> searchProducts(final List<Specification<Product>> filters) {
        return productRepo.findAll(filters);
    }

    public List<Contact> searchContacts(final List<Specification<Contact>> filters) {
        return contactRepo.findAll(filters);
    }

    public List<Account> saveAllAccounts(List<Account> accounts) {
        return accountRepository.saveAll(accounts);
    }

    public List<Account> allAccounts() {
        return accountRepository.findAll();
    }

    public List<Transaction> findAllTransaction(List<Specification<Transaction>> filters) {
        return transactionRepo.findAll(filters);
    }

    public List<Account> findAccounts(List<Specification<Account>> filter) {
        return accountRepo.findAll(filter);
    }

    public Transaction getTransaction(final Specification<Transaction> filter)
    {
        return transactionRepo.findOne(filter);
    }
}
