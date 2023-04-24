package com.neo.ppln.publicView;

import com.neo.ppln.event.CloseEvent;
import com.neo.ppln.event.DeleteEvent;
import com.neo.ppln.event.SaveEvent;
import com.vaadin.flow.component.ComponentEvent;
import com.vaadin.flow.component.ComponentEventListener;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.data.binder.BeanValidationBinder;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.data.binder.ValidationException;
import com.vaadin.flow.shared.Registration;
import okhttp3.Call;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public abstract class AbstractForm<T> extends FormLayout {
    private T entity;
    protected Binder<T> binder;
    Button save = new Button("Save");
    protected Button delete = new Button("Delete");
    Button close = new Button("Cancel");
    public AbstractForm(Binder<T> binder) {
        addClassName("contact-form");
        this.binder = binder;
    }

    protected HorizontalLayout createButtonsLayout() {
        save.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        delete.addThemeVariants(ButtonVariant.LUMO_ERROR);
        close.addThemeVariants(ButtonVariant.LUMO_TERTIARY);

        save.addClickShortcut(Key.ENTER);
        close.addClickShortcut(Key.ESCAPE);

        save.addClickListener(event -> validateAndSave());
        delete.addClickListener(event -> fireEvent(new DeleteEvent(this)));
        close.addClickListener(event -> fireEvent(new CloseEvent(this)));

        binder.addStatusChangeListener(e -> save.setEnabled(binder.isValid()));
        binder.bindInstanceFields(this);

        return new HorizontalLayout(save, delete, close);
    }

    public void setEntity(T entity) {
        this.entity = entity;
        binder.readBean(entity);
    }

    protected void validateAndSave() {
        try {
            binder.writeBean(entity);
            fireEvent(new SaveEvent(this));
        } catch (ValidationException e) {
            e.printStackTrace();
        }
    }

    public T getEntity() {
        return entity;
    }

    public <T extends ComponentEvent<?>> Registration addListener(Class<T> eventType, ComponentEventListener<T> listener) {
        return getEventBus().addListener(eventType, listener);
    }


}
