package com.neo.ppln.components;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class GeoCodeResult {
    List<GeoCodeObject> results;
    String status;
    public GeoCodeResult() {
    }
}