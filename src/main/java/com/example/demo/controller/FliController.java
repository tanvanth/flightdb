package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Flights.Flights;
import com.example.demo.Service.FliService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FliController {
	@Autowired
	private FliService serv;
		

	@PostMapping("/add")
	public Flights postdet(@RequestBody Flights h)
	{
		return serv.getdet(h);
	}
	
	@GetMapping("/show")

	public List<Flights> showproduct() 
	{
		 return serv.showproduct();
	}
	
	@DeleteMapping("/delete/{seat_no}")
	public String deletedet(@PathVariable int seat_no)
	{
		serv.delete(seat_no);
		return "Successfully Deleted";
	}
	
	@PutMapping("/put/{seat_no}")
	public Flights updatedet(@PathVariable int seat_no,@RequestBody Flights e)
	{
		return serv.updateproduct(seat_no,e);
		
	}
}