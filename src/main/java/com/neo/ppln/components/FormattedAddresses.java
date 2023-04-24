package com.neo.ppln.components;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class FormattedAddresses {
    private String status;
    private List<String> formattedAddress = new ArrayList<>();
    public FormattedAddresses(GeoCodeResult geoCode)
    {
        this.status = geoCode.getStatus();
        geoCode.getResults().forEach(g ->{
            formattedAddress.add(g.getFormattedAddress());
        });
    }
}
