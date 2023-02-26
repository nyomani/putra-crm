package com.neo.ppln.publicView;

import com.neo.ppln.components.ColumnFilter;
import com.neo.ppln.event.CloseEvent;
import com.neo.ppln.event.DeleteEvent;
import com.neo.ppln.event.SaveEvent;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.grid.GridVariant;
import com.vaadin.flow.component.orderedlayout.FlexLayout;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
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

    DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("MM/dd/YYYY");
    protected Grid<T> grid;
    private List<ColumnFilter<T, Object>> filters = new ArrayList<>();
    private HorizontalLayout toolbar = new HorizontalLayout();
    protected AbstractForm<T> form;
    protected Function<List<Specification<T>>, List<T>> contentProvider;
    Button addEntityButton;
    FlexLayout content;
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

        content = new FlexLayout(grid, form);
        content.setFlexGrow(2, grid);
        content.setFlexGrow(1, form);
        content.setFlexShrink(0, form);
        content.addClassNames("content", "gap-m");
        content.setSizeFull();
        addEntityButton.addClickListener(click -> addEntity());
        toolbar.add(addEntityButton);
        toolbar.setAlignItems(Alignment.BASELINE);
        add(toolbar, content);
        updateList();
        closeEditor();
        grid.asSingleSelect().addValueChangeListener(event ->
                edit(event.getValue()));

    }

    String rupiah(double value) {
        return "Rp " + IDR.format(value).substring(1);
    }

    abstract protected void configureGrid();

    protected void addFilter(final ColumnFilter component) {
        filters.add(component);
        toolbar.add(component);
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
