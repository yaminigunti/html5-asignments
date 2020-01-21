package com.cts.oopd.ui;

import com.cts.oopd.model.student;

public class StudentClient {
	public static void main(String[]args) {
		student.setfeepaid(75000);
		student.setCourse("Java FSD");
		/*array of objects*/
		student[]students=new student[3];
		students[0]=new student(1,"yam");
		students[1]=new student(1,"jam");
		students[2]=new student(1,"jaan");
		for(student student:students) {
			student.show();
		}
	}

}
