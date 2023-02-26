package com.neo.ppln.dataType;

public enum MarriageStatus {
   BELUM("Belum"),SUDAH("Sudah"),PERNAH("Pernah"),UNKNOWN("Tidak Disebutkan");
	
	String status;
	MarriageStatus(String s){
		status = s;
	}
	public String toString() {
		return status;
	}
	
	public static MarriageStatus find(String s) {
		if (s.equalsIgnoreCase("Belum")) {
			return BELUM;
		} else if (s.equalsIgnoreCase("Sudah")) {
			return SUDAH;
		} else if (s.equalsIgnoreCase("Sudah")) {
			return PERNAH;
		} else
			return UNKNOWN;
	}
}
