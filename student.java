
package com.cts.oopd.model;

public class student {
	private int rollNumber;
	private String name;
	private static String course;
	private static int feepaid;
	public student() {
		/* no specific implementation */
	}
	
	public student(int rollNumber,String name) {
		this.rollNumber=rollNumber;
		this.name=name;
	}
	public static void setCourse(String newCourse) {
		course=newCourse;
	}
	public static String getCourse() {
		return course;
	}
	public static void setfeepaid(int fee) {
		 feepaid=fee;
	}
	public static int getfeepaid() {
		return feepaid;
	}
	public void setrollnumber(int rollNumber) {
		this.rollNumber=rollNumber;
	}
	public int getrollnumber() {
		return rollNumber;
	}
	public void setname(String name) {
		this.name=name;
	}
	public String getname() {
		return name;
	}
	public void show() {
		System.out.println(rollNumber+","+name+","+course+","+feepaid);
	}
	

}
