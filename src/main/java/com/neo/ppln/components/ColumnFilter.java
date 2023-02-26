package com.neo.ppln.components;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import org.springframework.data.jpa.domain.Specification;

import java.util.function.Function;
import java.util.function.Supplier;

public class ColumnFilter<T, V> extends HorizontalLayout {
    final Component component;
    final Function<V, Specification<T>> specificationFunction;
    final Supplier<V> valueSupplier;

    public ColumnFilter(Component component,
                        Supplier<V> valueSupplier,
                        Function<V, Specification<T>> specificationFunction) {
        this.component = component;
        this.specificationFunction = specificationFunction;
        this.valueSupplier = valueSupplier;
        add(component);
    }

    public V value() {
        return valueSupplier.get();
    }

    public Specification<T> get() {
        return specificationFunction.apply(value());
    }
}
