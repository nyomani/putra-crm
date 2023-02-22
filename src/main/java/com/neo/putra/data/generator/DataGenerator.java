package com.neo.putra.data.generator;

import com.neo.putra.data.AccountType;
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
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.Supplier;
import java.util.stream.Collectors;

@SpringComponent
public class DataGenerator {
    private final CrmService service;
    final Random r;
    int seed = 123;
    List<Account> companyAccounts;
    List<Account> customerAccounts;
    List<Contact> contacts;
    List<Contact> shippingCompanies;
    private List<Product> productsList;
    Logger logger;

    DataGenerator(final CrmService service)
    {

        this.service = service;
        r = new Random(seed);
    }


    private void createShippingCompanies()
    {
        Supplier<List<Contact>> contactSupplier = () -> {
            ArrayList<Contact> list = new ArrayList<>();
            Contact c = new Contact();
            c.setName("PT. Andima Sukses Bersama");
            c.setContactType(ContactType.SHIPPING);
            list.add(c);
            c = new Contact();
            c.setName("PT. Sarana Artha Logistik");
            c.setContactType(ContactType.SHIPPING);
            list.add(c);
            return list;
        };
        shippingCompanies = service.saveAllContact(contactSupplier.get());
        List<Account> shippingAccount = service.saveAllAccounts(shippingCompanies.stream().map(c ->
        {
            Account a = new Account();
            a.setName(c.getName());
            a.setContact(c);
            return a;
        }).collect(Collectors.toList()));
        for (int i =0; i < shippingCompanies.size(); i++)
        {
            shippingCompanies.get(i).setAccount(shippingAccount.get(i));
            service.save(shippingCompanies.get(i));
        }
    }

    void createInternalAccounts()
    {
        Contact company = new Contact();
        company.setName("UD Makmur Jaya");
        company.setContactType(ContactType.OWNER);
        company.setLastName("Budhianto");
        company.setFirstName("Ridwana");
        company.setTaxId("06.380.135.1-721.000");
        company.setEmail("makmurjaya_putra@yahoo.com");
        final Contact companyContact = service.save(company);
        Account cashAccount = new Account();
        cashAccount.setName("CASH");
        cashAccount.setAccountNumber("cash-account");
        cashAccount.setType(AccountType.CASH);
        cashAccount.setContact(companyContact);
        cashAccount = service.save(cashAccount);
        companyContact.setAccount(cashAccount);
        companyAccounts = service.saveAllAccounts(Arrays.asList("BCA Giro:7810251233", "BCA Giro:7810253333",
                        "BCA Giro:1912233728", "BNI:0668886690", "BRI: 0121-01-091607-50-0",
                        "Mandiri:149-00-6665555-8", "UOB:320-102-072")
                .stream().map(b ->
                {
                    Account account = new Account();
                    int idx = b.indexOf(':');
                    account.setName(b.substring(0, idx));
                    account.setAccountNumber(b.substring(idx + 1));
                    account.setContact(companyContact);
                    account.setType(AccountType.GIRO);
                    return account;
                }).collect(Collectors.toList()));
        companyAccounts.add(cashAccount);
    }

    void createSales()
    {
        Arrays.asList("Gloria", "An Nur", "Onki", "Devi", "Raja").forEach(a -> {
            Contact c = new Contact();
            c.setName(a);
            c.setContactType(ContactType.SALES);
            service.save(c);
        });

    }

    @Bean
    public CommandLineRunner loadData() {

        return args -> {
            logger = LoggerFactory.getLogger(getClass());
            if (service.getContact().count() != 0L) {
                logger.info("Using existing database");
                return;
            }

            logger.info("Generating demo data");
            createInternalAccounts();
            createSales();
            createCustomerAndSuppliers();
            createProducts();
            createShippingCompanies();
            createInventory();
            productsList.stream().forEach(product ->
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

    private void createProducts() {
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

        productsList = service.saveAllProducts(products);

    }

    private void createCustomerAndSuppliers() {

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
                            a.setType(AccountType.GIRO);
                            return a;
                        }
                ).collect(Collectors.toList())
        );
        for (int i = 0; i < contacts.size(); i++)
        {
            contacts.get(i).setAccount(customerAccounts.get(i));
            service.save(contacts.get(i));
        }
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

    void createInventory()
    {
        final DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("MM/dd/yyyy");
        service.saveAll(Arrays.asList("Pallet:NA:NA:298:175000:NA",
                "Estalase  :NA:NA:3:0:NA",
                "Lemari    :NA:01/01/2021:1:1000000:NA:",
                "Rak       :NA:01/01/2021:1:350000 :NA:",
                "1 Set Meja:NA:01/01/2021:1:5500000:NA:",
                "Laci Susun:NA:01/01/2021:1:1000000:NA:",
                "Keyboard  :NA:01/01/2021:1:490000 :NA:",
                "Komputer  :Asus:01/01/2021:1:5450000:NA",
                "Mouse:Logitech :01/01/2021:2:90000:NA:",
                "Keyboard:K1000 :01/01/2021:2:100000:NA:",
                "Coolerpad:MTECH:01/01/2021:2:40000:NA:",
                "Usb Kabel:BAFO :01/01/2021:1:180000:NA:",
                "Komputer:Asus  :01/01/2021:1:5340000:NA:",
                "Printer:Epson  :01/01/2021:1:2285000:NA:",
                "Usb Adapter:TPLINK:01/01/2021:1:150000:NA:",
                "Ram Komputer:DDR2:01/01/2021:1:150000:NA:",
                "Buffet:NA:01/01/2021:1:1750000:NA:",
                "Kursi Plastik:NA:01/01/2021:2:130000:NA:",
                "AC	:Daikin:01/01/2021:1:55070000:NA:",
                "Laptop  :Acer  :01/01/2021:1:1800000:Second",
                "Papan Tulis:NA:NA:2:0:NA",
                "Meja Kerja:NA:NA:7:0:NA",
                "Kursi Kerja :NA:NA:7:0:NA",
                "Laptop:Toshiba :NA:1:0:NA",
                "Laptop:Asus:NA:1:0:NA",
                "Komputer:LG:NA:1:0:NA",
                "Printer:Epson:NA:2:0:NA",
                "Kipas Angin:CKE:NA:2:0:NA").stream().map(s ->
        {
            Inventory inventory = new Inventory();
            String[] f = s.split(":");
            logger.info("Processing "+ f );
            inventory.setName(f[0].trim());
            inventory.setBrand(f[1].replace("NA", "").trim());
            inventory.setPurchaseDate(f[2].replace("NA","").trim().length() == 0 ? null: LocalDate.parse(f[2], dateFormat));
            inventory.setTotal(Integer.parseInt(f[3].replace("NA", "").trim()));
            inventory.setPricePerUnit(Double.parseDouble(f[4].replace("NA", "").trim()));
            inventory.setNotes(f[5].replace("NA", ""));
            return inventory;
        }).collect(Collectors.toList()));
    }
}
