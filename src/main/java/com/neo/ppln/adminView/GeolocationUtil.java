package com.neo.ppln.adminView;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.neo.ppln.components.AddressComponent;
import com.neo.ppln.components.GeoCodeObject;
import com.neo.ppln.components.GeoCodeResult;
import com.neo.ppln.entity.Voter;
import okhttp3.Call;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;

public class GeolocationUtil {

    private static String toAddress(Voter v) {
        String address = v.getStreet();
        if (v.getCity() != null) {
            address = address + " " + v.getCity();
        }
        if (v.getState() != null) {
            address = address + " " + v.getState();
        }
        return address;
    }

    public static GeoCodeResult detectAddress(final Voter v) {
        ObjectMapper objectMapper = new ObjectMapper();

        String encodedAddress = null;
        try {
            encodedAddress = URLEncoder.encode(toAddress(v), "UTF-8");
        } catch (UnsupportedEncodingException e) {
            return null;
        }
        String address = "https://google-maps-geocoding.p.rapidapi.com/geocode/json?language=en&address=" + encodedAddress;
        OkHttpClient client = new OkHttpClient.Builder()
                .build();
        Request request = new Request.Builder()

                .url(address)
                .get()
                .addHeader("x-rapidapi-host", "google-maps-geocoding.p.rapidapi.com")
                .addHeader("x-rapidapi-key", "d51b751eccmsheeb98b3f5f9cd08p1bbb21jsnd8f57ce1381b")
                .build();

        Call call = client.newCall(request);
        try {

            Response response = call.execute();
            String body = response.body().string();
            GeoCodeResult result = objectMapper.readValue(body, GeoCodeResult.class);
            v.setGeoCode(body);
            if (result.getStatus().equals("OK")) {
                List<GeoCodeObject> geoCodeObjectList = result.getResults();
                if (geoCodeObjectList.size() == 1) {
                    List<AddressComponent> addressComponents = geoCodeObjectList.get(0).getAddressComponents();
                    for (AddressComponent a : addressComponents) {
                        for (String type : a.getTypes()) {
                            if (type.equals("locality")) {
                                v.setCity(a.getLongName());
                            }
                            break;
                        }
                    }
                }
            }
            return result;
        } catch (JsonMappingException e) {
            return null;
        } catch (JsonProcessingException e) {
           return null;
        } catch (IOException e) {
            return null;
        }
    }

}
