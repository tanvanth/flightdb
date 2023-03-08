package com.example.demo.Flights;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Flight_Resevation")
public class Flights {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="Seat_no")
	private int seat_no;
	
	@Column(name="Passener_Name")
	private String Pass_name;
	
	@Column(name="Departure")
	private String Depart;
	
	@Column(name="Arrival")
	private String Arri;
	
	
	
	@Column(name="Age")
	private int age;
	
	@Column(name="Price")
	private double Cost;
	
	
	public Flights()
	{
		
	}


	public int getSeat_no() {
		return seat_no;
	}


	public void setSeat_no(int seat_no) {
		this.seat_no = seat_no;
	}


	public String getPass_name() {
		return Pass_name;
	}


	public void setPass_name(String pass_name) {
		Pass_name = pass_name;
	}


	public String getDepart() {
		return Depart;
	}


	public void setDepart(String depart) {
		Depart = depart;
	}


	public String getArri() {
		return Arri;
	}


	public void setArri(String arri) {
		Arri = arri;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public double getCost() {
		return Cost;
	}


	public void setCost(double cost) {
		Cost = cost;
	}


	public Flights(int seat_no, String pass_name, String depart, String arri, int age, double cost) {
		super();
		this.seat_no = seat_no;
		Pass_name = pass_name;
		Depart = depart;
		Arri = arri;
		this.age = age;
		Cost = cost;
	}
	

}