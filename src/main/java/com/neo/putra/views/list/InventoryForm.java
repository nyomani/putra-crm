package com.neo.putra.views.list;

import com.neo.putra.data.entity.Inventory;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.textfield.IntegerField;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.BeanValidationBinder;

public class InventoryForm extends AbstractForm<Inventory> {
    private TextField name = new TextField("Nama");
    private TextField brand = new TextField("Merk");
    private DatePicker purchaseDate = new DatePicker("Tanggal Beli");
    private IntegerField total = new IntegerField("Banyak");
    private NumberField pricePerUnit = new NumberField("Harga beli per unit");
    private TextArea notes = new TextArea("Keterangan");

    public InventoryForm() {
        super(new BeanValidationBinder<>(Inventory.class));
        add(name, brand, purchaseDate, total, pricePerUnit, notes, createButtonsLayout());
    }
}
