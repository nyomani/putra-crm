package com.neo.ppln.components;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class GeoCodeLocation {
    @JsonProperty("lat")
    private String latitude;
    @JsonProperty("lng")
    private String longitude;
}