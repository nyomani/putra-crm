package com.neo.ppln.event;

import com.vaadin.flow.component.ComponentEvent;
import com.vaadin.flow.component.formlayout.FormLayout;

// Events
public class FormEvent extends ComponentEvent<FormLayout> {

    public FormEvent(FormLayout source) {
        super(source, false);
    }
}
