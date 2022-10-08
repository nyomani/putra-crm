package com.neo.putra.data;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class KeyValue {
    private String key;
    private Object value;
}
