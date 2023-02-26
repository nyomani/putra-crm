package com.neo.ppln.dataType;

public enum Gender {
    LAKILAKI("Laki-Laki"),PEREMPUAN("Perempuan"),UNKOWN("Tidak Disebut");
	String jenis;
	Gender(String s){
		this.jenis = s;
	}
	
	public String toString() {
		return jenis;
	}
	
	public static Gender find(String s) {
		if (s.equalsIgnoreCase(LAKILAKI.toString()))
			return LAKILAKI;
		else if (s.equalsIgnoreCase(PEREMPUAN.toString()))
				return PEREMPUAN;
		else return UNKOWN;
	}
}
