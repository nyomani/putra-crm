package com.neo.putra.views.list;

import com.neo.putra.data.ContactType;
import com.neo.putra.data.Unit;
import com.neo.putra.data.entity.Product;
import com.neo.putra.data.entity.Contact;
import com.neo.putra.data.service.CrmService;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.BeanValidationBinder;

import java.util.Arrays;

public class ProductForm extends AbstractForm<Product>
{
    private TextField name = new TextField("Product Name");
    private TextField brand = new TextField("Brand");
    private TextField productCode = new TextField("Product Code");
    private ComboBox<Unit> unit = new ComboBox<>("Unit");
    private ComboBox<Contact> supplier = new ComboBox<>("Supplier");

    public ProductForm(final CrmService service)
    {
        super(new BeanValidationBinder(Product.class));
        unit.setItems(Arrays.asList(Unit.TON, Unit.KG, Unit.SAK,
                Unit.BKP5L, Unit.BKP2L, Unit.BKP1L, Unit.BKP500ML));
        add(name, brand, productCode, unit, supplier, createButtonsLayout());
        supplier.setItems(service.findAllContacts(Arrays.asList(
                (root, query, cb) -> cb.equal(root.<ContactType>get("contactType"), ContactType.SUPPLIER))));
        supplier.setItemLabelGenerator(Contact::getName);
    }
}
