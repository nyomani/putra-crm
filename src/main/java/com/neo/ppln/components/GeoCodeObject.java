package com.neo.ppln.components;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;
@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class GeoCodeObject {
    @JsonProperty("place_id")
    String placeId;
    @JsonProperty("address_components")
    List<AddressComponent> addressComponents;
    @JsonProperty("formatted_address")
    String formattedAddress;
}