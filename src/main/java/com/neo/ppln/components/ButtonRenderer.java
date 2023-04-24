package com.neo.ppln.components;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.data.renderer.BasicRenderer;
import com.vaadin.flow.data.renderer.ClickableRenderer;
import com.vaadin.flow.function.ValueProvider;
import com.vaadin.flow.shared.Registration;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ButtonRenderer<SOURCE> extends BasicRenderer<SOURCE, String> implements ClickableRenderer<SOURCE> {
    private List<ClickableRenderer.ItemClickListener<SOURCE>> listeners;

    public ButtonRenderer(ValueProvider<SOURCE, String> valueProvider) {
        super(valueProvider);
        this.listeners = new ArrayList(1);
    }

    public Component createComponent(SOURCE item) {
        Button b = new Button(this.getValueProvider().apply(item));
        b.addClickListener(e ->
        {
            this.getItemClickListeners().forEach((listeners) -> {
                listeners.onItemClicked(item);
            });
        });
        return b;
    }

    public Registration addItemClickListener(ClickableRenderer.ItemClickListener<SOURCE> listener) {
        return Registration.addAndRemove(this.listeners, listener);
    }

    public List<ClickableRenderer.ItemClickListener<SOURCE>> getItemClickListeners() {
        return Collections.unmodifiableList(this.listeners);
    }
}
