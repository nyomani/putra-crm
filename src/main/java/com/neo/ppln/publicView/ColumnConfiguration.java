package com.neo.ppln.publicView;

import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;


public class ColumnConfiguration<T>  {
    private Label columnName = new Label();
    private Grid.Column<T> column;
    private boolean visible;

    public ColumnConfiguration(Grid.Column<T> column) {
        this.column = column;
    }
}

