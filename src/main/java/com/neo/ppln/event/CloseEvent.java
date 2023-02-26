package com.neo.ppln.event;

import com.vaadin.flow.component.formlayout.FormLayout;

public class CloseEvent extends FormEvent {
    public CloseEvent(FormLayout source) {
        super(source);
    }
}
