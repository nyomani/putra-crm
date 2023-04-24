package com.neo.ppln.dataType;

public enum SnailMailStatus {
    OK("Ok"), RETURNED_TO_SENDER("Return to sender"), INVALID_ADDRESS("Invalid Address");
    String status;

    SnailMailStatus(String status) {
        this.status = status;
    }

    public String toString() {
        return status;
    }
}
