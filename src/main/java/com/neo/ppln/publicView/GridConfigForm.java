package com.neo.ppln.publicView;

import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.data.binder.BeanValidationBinder;

public class GridConfigForm extends AbstractForm<Grid.Column> {
    public GridConfigForm() {
        super(new BeanValidationBinder<>(Grid.Column.class));;
    }
}
