package com.neo.ppln.publicView;

import com.neo.ppln.components.ColumnFilter;
import com.neo.ppln.event.CloseEvent;
import com.neo.ppln.event.DeleteEvent;
import com.neo.ppln.event.SaveEvent;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.grid.GridVariant;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.FlexLayout;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.theme.lumo.Lumo;
import com.vaadin.flow.theme.lumo.LumoIcon;
import org.springframework.data.jpa.domain.Specification;

import java.text.NumberFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.function.Function;
import java.util.stream.Collectors;

public abstract class AbstractListView<T> extends VerticalLayout {
    private static final NumberFormat IDR = NumberFormat.getCurrencyInstance(new Locale("ID", "IDN", "IDR"));

    DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("MM/dd/yyyy");
    protected Grid<T> grid;
    private List<ColumnFilter<T, Object>> filters = new ArrayList<>();
    protected HorizontalLayout toolbar = new HorizontalLayout();
    protected AbstractForm<T> form;
    protected Function<List<Specification<T>>, List<T>> contentProvider;
    Button addEntityButton;
    protected FlexLayout content;
    private GridConfigurationPanel gridConfiguration;
    private Button configButton = new Button();
    private HorizontalLayout filterLayout = new HorizontalLayout();
    public AbstractListView(final String title,
                            final Grid<T> grid,
                            final AbstractForm<T> form,
                            final Function<List<Specification<T>>, List<T>> contentProvider) {
        this.grid = grid;
        this.form = form;
        this.contentProvider = contentProvider;
        addEntityButton = new Button("+");
        addClassName("list-view");
        setSizeFull();
        configureGrid();
        grid.addThemeVariants(GridVariant.LUMO_ROW_STRIPES);
        form.setWidth("25em");
        form.addListener(SaveEvent.class, this::save);
        form.addListener(DeleteEvent.class, this::delete);
        form.addListener(CloseEvent.class, e -> closeEditor());
        this.gridConfiguration = new GridConfigurationPanel<>(grid);
        content = new FlexLayout(grid, form, gridConfiguration);
        content.addClassNames("content", "gap-m");
        content.setSizeFull();
        addEntityButton.addClickListener(click -> addEntity());
        HorizontalLayout configLayout = new HorizontalLayout();
        configLayout.setWidthFull();
        configLayout.add(configButton);
        configLayout.setJustifyContentMode(JustifyContentMode.END);
        configButton.setIcon(VaadinIcon.COG_O.create());
        toolbar.add(addEntityButton, filterLayout, configLayout);
        toolbar.setAlignItems(Alignment.BASELINE);
        toolbar.setFlexGrow(1.0, configLayout);
        toolbar.setWidth("95%");;
        add(toolbar, content);
        updateList();
        closeEditor();
        grid.asSingleSelect().addValueChangeListener(event ->
                edit(event.getValue()));
        configButton.addClickListener(e -> {
           gridConfiguration.setVisible(true);
           grid.setVisible(false);
        });
        gridConfiguration.setVisible(false);
        configureContent();
        grid.addThemeVariants(GridVariant.LUMO_WRAP_CELL_CONTENT);
    }

    protected void configureContent() {
        content.setFlexGrow(2, grid);
        content.setFlexGrow(1, form);
    }

    String rupiah(double value) {
        return "Rp " + IDR.format(value).substring(1);
    }

    abstract protected void configureGrid();

    protected void addFilter(final ColumnFilter component) {
        filters.add(component);
        filterLayout.add(component);
    }

    abstract protected void save(T entity);

    abstract protected void delete(T entity);

    private void save(SaveEvent event) {
        save(form.getEntity());
        updateList();
        closeEditor();
    }

    private void delete(DeleteEvent event) {
        delete(form.getEntity());
        updateList();
        closeEditor();
    }

    public void edit(T entity) {
        if (entity == null) {
            closeEditor();
        } else {
            form.setEntity(entity);
            form.setVisible(true);
            grid.setVisible(false);
            toolbar.setVisible(false);
            addClassName("editing");
        }
    }

    void addEntity() {
        grid.asSingleSelect().clear();
        edit(newEntity());
    }

    abstract protected T newEntity();

    private void closeEditor() {
        form.setVisible(false);
        removeClassName("editing");
        grid.setVisible(true);
        toolbar.setVisible(true);
    }

    public void disableAddition() {
        addEntityButton.setVisible(false);
    }

    protected List<T> getContent() {
        final List<Specification<T>> s = filters.stream()
                .filter(e -> e.value() != null && e.get() != null).map(e -> e.get())
                .collect(Collectors.toList());
        return contentProvider.apply(s);
    }

    protected void updateList() {
        grid.setItems(getContent());
    }

    protected String date(LocalDate d) {
        if (d == null)
        {
            return "";
        }

        return d.format(dateFormat);
    }
}
