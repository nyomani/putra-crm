package com.neo.ppln.components;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class GeoCodeGeometry {
    @JsonProperty("location")
    GeoCodeLocation geocodeLocation;
}