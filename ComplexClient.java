package com.cts.oopd.ui;

import com.cts.oopd.model.complex;

public class ComplexClient {
	public static void main(String[]args){
		complex first=new complex();
		first.show();
		complex second=new complex(2,-5);
		second.show();
		if(first==second)
			System.out.println("Equal");
		else
			System.out.println("Not Equal");
		if(first.getRealpart()==second.getRealpart()&&first.getImaginarypart()==second.getImaginarypart())
			System.out.println("Equal");
		else
			System.out.println("Not Equal");
		complex result=first.add(second);
		result.show();
		complex third=second;
		third.show();
		if(second==third)
		System.out.println("second and third equal");
		else
			System.out.println("second and third are not equal");
		
	}

}
