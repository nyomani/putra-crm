package com.neo.ppln.dataType;

public enum VotingMode {
    TPS("Hadir di TPSLN"), POS("Lewat Pos"), UNKNOWN("Belum Konfirmasi");
    String mode;
    VotingMode(String m)
    {
        this.mode = m;
    }

    public String toString() {
        return mode;
    }

    }
