package com.cts.oopd.model;

public class complex {

	private int realpart;
	private int imaginarypart;
	public complex() {
		realpart=0;
		imaginarypart=0;
	}
	public complex(int realpart, int imaginarypart) {
		this.realpart=realpart;
		this.imaginarypart=imaginarypart;
	}
	public void setRealpart(int realpart) {
		this.realpart=realpart;
	}
	public void setImaginarypart(int imaginarypart) {
		this.imaginarypart=imaginarypart;
	}
	public int getRealpart() {
		return this.realpart;
	}
	public int getImaginarypart() {
		return this.imaginarypart;
	}
	public complex add(complex s) {
		int realpartsum=this.getRealpart()+s.getRealpart();
		int imaginarypartsum=this.getImaginarypart()+s.getImaginarypart();
		complex t=new complex(realpartsum ,imaginarypartsum);
		return t;
	}
	public void show() {
		System.out.println(realpart + "," + imaginarypart);
		
	}
}


