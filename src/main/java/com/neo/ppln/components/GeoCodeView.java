package com.neo.ppln.components;

import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

public class GeoCodeView extends VerticalLayout {

    public void set(GeoCodeResult geoCodeResult) {
        removeAll();
        if (geoCodeResult == null) {
            return;
        }
        if (geoCodeResult.getStatus().equals("OK")) {
            if (geoCodeResult.getResults() != null) {
                geoCodeResult.results.forEach(e -> {
                    Label label = new Label(e.formattedAddress);
                    add(label);
                });
            }
        }
        else
        {
            Label label = new Label("Invalid address "+ geoCodeResult.getStatus());
            add(label);
        }
    }
}
