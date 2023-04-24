package com.neo.ppln.publicView;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.data.renderer.ComponentRenderer;

import java.util.ArrayList;
import java.util.List;

public class GridConfigurationPanel<T> extends VerticalLayout {
    private Button configCloseButton = new Button("Close");
    private Grid<Grid.Column> grid = new Grid<>(Grid.Column.class);
    public GridConfigurationPanel(final Grid<T> configure ) {
        List<Grid.Column> list = new ArrayList<>();
        configure.getColumns().forEach(c -> list.add(c));
        grid.setItems(list);
        add(grid);
        add(configCloseButton);
        configCloseButton.addClickListener(e -> {
            setVisible(false);
            grid.setVisible(true);
        });
        grid.addClassNames("grid-config");
        grid.setSizeFull();
        grid.setColumns();
        grid.addColumn(c -> c.getHeaderText()).setHeader("Column");
        grid.addColumn(new ComponentRenderer<>(Checkbox::new, (cb, c) ->{
            cb.setValue(c.isVisible());
            cb.addClickListener(e -> c.setVisible(cb.getValue()));
        })).setHeader("Visible");
        configCloseButton.addClickListener(e -> {
            setVisible(false);
            configure.setVisible(true);
        });

    }
}
