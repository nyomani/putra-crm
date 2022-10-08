package com.neo.putra.data.generator;

import com.neo.putra.data.ContactType;
import com.neo.putra.data.OrderState;
import com.neo.putra.data.TransactionType;
import com.neo.putra.data.entity.*;
import com.neo.putra.data.service.CrmService;
import com.vaadin.flow.spring.annotation.SpringComponent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.vaadin.artur.exampledata.DataType;
import org.vaadin.artur.exampledata.ExampleDataGenerator;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@SpringComponent
public class DataGenerator {
    private final CrmService service;
    final Random r;
    int seed = 123;
    List<Account> companyAccounts;
    List<Account> customerAccounts;
    List<Contact> contacts;
    DataGenerator(final CrmService service)
    {

        this.service = service;
        r = new Random(seed);
    }

    @Bean
    public CommandLineRunner loadData() {

        return args -> {
            Logger logger = LoggerFactory.getLogger(getClass());
            if (service.countContacts() != 0L) {
                logger.info("Using existing database");
                return;
            }

            logger.info("Generating demo data");
            Arrays.asList("Gloria", "An Nur", "Onki", "Devi", "Raja").forEach(a -> {
                Contact c = new Contact();
                c.setName(a);
                c.setContactType(ContactType.SALES);
                service.save(c);
            });
            Contact company = new Contact();
            company.setName("UD Makmur Jaya");
            company.setContactType(ContactType.OWNER);
            company.setLastName("Budhianto");
            company.setFirstName("Ridwana");
            company.setEmail("makmurjaya_putra@yahoo.com");
            final Contact companyContact = service.save(company);
            Account cashAccount = new Account();
            cashAccount.setName("CASH");
            cashAccount.setAccountNumber("cash-account");
            cashAccount.setContact(companyContact);
            cashAccount = service.save(cashAccount);
            companyContact.setAccount(cashAccount);
            companyAccounts = service.saveAllAccounts(Arrays.asList("BRI:1-2345-65432", "BCA:2-3456-9876")
                    .stream().map(b ->
                    {
                        Account account = new Account();
                        int idx = b.indexOf(':');
                        account.setName(b.substring(0, idx));
                        account.setAccountNumber(b.substring(idx + 1));
                        account.setContact(companyContact);
                        return account;
                    }).collect(Collectors.toList()));
            companyAccounts.add(cashAccount);
            ExampleDataGenerator<Contact> contactGenerator = new ExampleDataGenerator<>(Contact.class,
                    LocalDateTime.now());
            contactGenerator.setData(Contact::setFirstName, DataType.FIRST_NAME);
            contactGenerator.setData(Contact::setLastName, DataType.LAST_NAME);
            contactGenerator.setData(Contact::setEmail, DataType.EMAIL);
            contactGenerator.setData(Contact::setName, DataType.COMPANY_NAME);
            contactGenerator.setData(Contact::setContactType, new ContactTypeGenerator());
            contacts = service.saveAllContact(contactGenerator.create(45, seed));

            customerAccounts = service.saveAllAccounts(
               contacts.stream().map(c -> {
                   Account a = new Account();
                   a.setName(c.getName());
                   a.setAccountNumber(c.getName());
                   a.setContact(c);
                   return a;
                   }
               ).collect(Collectors.toList())
            );
            for (int i = 0; i < contacts.size(); i++)
            {
                contacts.get(i).setAccount(customerAccounts.get(i));
                service.save(contacts.get(i));
            }
            logger.info("... generating 8 Products entities...");
            ExampleDataGenerator<Product> prodGenerator = new ExampleDataGenerator<>(Product.class,
                    LocalDateTime.now());
            Iterator<String> productName = Arrays.asList(
                    "Gula:GULATA",
                    "Gula:KTM",
                    "Gula:GK WALINI",
                    "Gula:SEMBORO",
                    "Gula:MURIA SUMBA MANIS",
                    "Gula:INDIA",
                    "Gula:VIT",
                    "Minyak:BIMOLI-BK5L",
                    "Minyak:BIMOLI-BKP2L",
                    "Minyak:BIMOLI-BKP1L",
                    "Minyak:BIMOLI-BKP500ML").listIterator();
            final AtomicInteger i = new AtomicInteger(0);
            List<Product> products = prodGenerator.create(8, seed).stream().peek(product -> {
                product.setSupplier(contacts.get(r.nextInt(8)));
                String name = productName.next();
                int idx = name.indexOf(':');
                product.setName(name.substring(0, idx));
                product.setBrand(name.substring(idx + 1));
                product.setProductCode("P-" + i.incrementAndGet());
            }).collect(Collectors.toList());

            service.saveAllProducts(products);

            products.stream().forEach(product ->
            {
                product.setLastStockId((int)((Math.random() * 100)) % 9);
                SupplierPurchaseOrder p1 = buy(product, OrderState.PO, 520, 500);
                SupplierPurchaseOrder p2 = buy(product, OrderState.DO, 523, 900);
                SupplierPurchaseOrder p3 = buy(product, OrderState.DO, 530, 1000);

                sell(companyAccounts.get(0), p2, r.nextInt(9, contacts.size()), OrderState.DO, 545.0, 12.0);
                sell(companyAccounts.get(1), p3, r.nextInt(9, contacts.size()), OrderState.DO,546.0, 11.0);
                sell(companyAccounts.get(2), p3, r.nextInt(9, contacts.size()), OrderState.PO,538.0, 15.0);
                sell(companyAccounts.get(0), p2, r.nextInt(9, contacts.size()), OrderState.DO, 545.0, 10.0);
                sell(companyAccounts.get(1), p3, r.nextInt(9, contacts.size()), OrderState.DO,546.0, 17.0);
                sell(companyAccounts.get(2), p3, r.nextInt(9, contacts.size()), OrderState.PO,538.0, 13.0);
            });

            logger.info("Generated demo data ");
        };


    }
    private CustomerPurchaseOrder sell(Account companyAcct, SupplierPurchaseOrder stock, int idx,
                                       OrderState state, double price, double quantity)
    {
        Account account = customerAccounts.get(idx);
        CustomerPurchaseOrder order = new CustomerPurchaseOrder();
        order.setStock(stock);
        order.setOrderState(state);
        order.setPurchasePrice(price);
        order.setPurchaseQuantity(quantity);
        order.setContact(account.getContact());
        order.setOrderDate(LocalDate.now().plusDays((int)(Math.random() * 1000) % 6));
        if (state == OrderState.DO)
        {
            order.setDeliveredPrice(price);
            order.setDeliveredQuantity(quantity);
            order.setDeliveryDate(LocalDate.now().plusDays(3));
        }

        service.saveCustomerPurchaseOrder(order);
        CustomerPayment payment = new CustomerPayment();
        payment.setPurchaseOrder(order);
        Transaction debit = new Transaction();
        debit.setType(TransactionType.DEBIT);
        payment.setTransaction(debit);
        TransactionLog transactionLog = new TransactionLog();
        transactionLog.setPaymentDate(LocalDate.now().plusDays(2));
        transactionLog.setAmount(price * r.nextInt(0, (int)quantity/1));
        Transaction credit = new Transaction();
        credit.setType(TransactionType.CREDIT);
        transactionLog.setCredit(companyAcct);
        transactionLog.setDebit(account);
        debit.setTransactionLog(transactionLog);
        credit.setTransactionLog(transactionLog);
        service.save(transactionLog);
        service.save(debit);
        service.save(credit);
        service.save(payment);
        return order;
    }

    private SupplierPurchaseOrder buy(Product p, OrderState state, double price, double quantity)
    {
        SupplierPurchaseOrder p1 = new SupplierPurchaseOrder();
        p1.setProduct(p);
        p1.setOrderState(state);
        p1.setPurchasePrice(price);
        p1.setPurchaseQuantity(quantity);
        p1.setOrderDate(LocalDate.now().minusDays(5));
        if (state == OrderState.DO)
        {
            p1.setDeliveredPrice(price);
            p1.setDeliveredQuantity(quantity);
            p1.setDeliveryDate(LocalDate.now().plusDays(10));
            service.save(p);
        }
        service.saveSupplierPurchaseOrder(p1);
        return p1;
    }

    static class ContactTypeGenerator extends DataType<ContactType>
{
    int count = 0;

    @Override
    public ContactType getValue(Random random, int seed, LocalDateTime localDateTime) {
        if (++count < 10) {
            return ContactType.SUPPLIER;
        }
        else {
            return ContactType.CUSTOMER;
        }
    }
}

}
