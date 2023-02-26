package com.neo.ppln.event;

import com.vaadin.flow.component.formlayout.FormLayout;

public class SaveEvent extends FormEvent {
    public SaveEvent(FormLayout source) {
        super(source);
    }
}
