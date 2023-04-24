package com.neo.ppln.components;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.neo.ppln.adminView.GeolocationUtil;
import com.neo.ppln.entity.Voter;
import com.neo.ppln.service.CrmService;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.data.provider.DataKeyMapper;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.data.renderer.Rendering;
import com.vaadin.flow.dom.Element;

import java.util.function.Consumer;

public class GeoLocationRenderer extends ComponentRenderer<Component, Voter> {
    private final Consumer<Voter> crmService;
    private final Grid<Voter> grid;
    ComponentRenderer<GeoCodeView, Voter> componentRenderer = new ComponentRenderer<>(v ->geoCodeView(v));
    public GeoLocationRenderer(final Consumer<Voter> crmService, Grid<Voter> grid) {
        this.crmService = crmService;
        this.grid = grid;
    }

    public Component createComponent(final Voter voter) {

        if (voter.getGeoCode() == null) {
            final ButtonRenderer buttonRenderer =  new ButtonRenderer<Voter>(v-> "Detect Address");
            buttonRenderer.addItemClickListener(v -> {
                GeolocationUtil.detectAddress(voter);
                crmService.accept(voter);
                grid.getDataProvider().refreshAll();
            });
            return buttonRenderer.createComponent(voter);

        } else {
            return componentRenderer.createComponent(voter);
        }
    }

    public Rendering<Voter> render(Element container, DataKeyMapper<Voter> keyMapper, Element contentTemplate) {

        return super.render(container, keyMapper, contentTemplate);
    }

        private GeoCodeView geoCodeView(Voter v) {
        GeoCodeView view = new GeoCodeView();
        String geoCode = v.getGeoCode();
        if (v.getGeoCode() != null) {
            ObjectMapper objectMapper = new ObjectMapper();

            try {
                GeoCodeResult result = objectMapper.readValue(geoCode, GeoCodeResult.class);
                view.set(result);
            } catch (JsonProcessingException e) {
            }
        }
        return view;
    }

}
