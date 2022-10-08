package com.neo.putra.components;

import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;

public class LabeledValue extends HorizontalLayout {
    Label nameLbl;
    Label valueLbl;

    public LabeledValue(final String label)
    {
        nameLbl = new Label();
        valueLbl = new Label();
        add(nameLbl, valueLbl);
        nameLbl.setText(label);
    }

    public void setText(String value)
    {
        valueLbl.setText(value);
    }
}
