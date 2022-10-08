package com.neo.putra.data;

import java.util.function.DoubleSupplier;

public enum Unit {
    TON(()->1, ()-> 1000, ()->0, ()->0, ()->0, ()->0, ()->0.0),
    KG(()->0.001, ()-> 1, ()->0.02, ()->0, ()->0, ()->0, ()->0.0),
    SAK(()->0.05, ()-> 50, ()->1, ()->0, ()->0, ()->0, ()->0.0),
    BKP5L(()->0, ()-> 0, ()->0, ()->1, ()->2.5, ()->5, ()->10),
    BKP2L(()->0, ()-> 0, ()->0, ()->0.4, ()->1, ()->2, ()->4),
    BKP1L(()->0, ()-> 0, ()->0, ()->0.2, ()->0.5, ()->1, ()->2),
    BKP500ML(()->0, ()-> 0, ()->0, ()->0.1, ()->0.25, ()->0.5, ()->1);

    private DoubleSupplier ton;
    private DoubleSupplier kg;
    private DoubleSupplier sak;
    private DoubleSupplier bkp5l;
    private DoubleSupplier bkp2l;
    private DoubleSupplier bkp1l;
    private DoubleSupplier bkp500ml;

    Unit(DoubleSupplier ton,
                 DoubleSupplier kg,
                 DoubleSupplier sak,
                 DoubleSupplier bkp5l,
                 DoubleSupplier bkp2l,
                 DoubleSupplier bkp1l,
                 DoubleSupplier bkp500ml)
    {
        this.ton = ton;
        this.kg = kg;
        this.sak = sak;
        this.bkp5l = bkp5l;
        this.bkp2l = bkp2l;
        this.bkp1l = bkp1l;
        this.bkp500ml = bkp500ml;
    }


    double ton()
    {
        return ton.getAsDouble();
    }

    double kg()
    {
        return kg.getAsDouble();
    }

    double sak()
    {
        return sak.getAsDouble();
    }

    double bkp5l()
    {
        return bkp5l.getAsDouble();
    }

    double bkp2l()
    {
        return bkp2l.getAsDouble();
    }

    double bkp1l()
    {
        return bkp1l.getAsDouble();
    }

    double bkp500ml()
    {
        return bkp500ml.getAsDouble();
    }
}
