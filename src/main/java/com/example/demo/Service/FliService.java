package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Flights.Flights;
import com.example.demo.Repository.FliRepo;

@Service
public class FliService {
	@Autowired
	private FliRepo repo;
	
	public Flights getdet(Flights obj)
	{
		return repo.save(obj);
	}
	
	public List<Flights> showproduct() 
	{
		List<Flights> a= new ArrayList<>();
		a=repo.findAll();
		return a;
	}
	
	public void delete(int seat_no)
	{
		repo.deleteById(seat_no);
	}
	
	public Flights updateproduct(int seat_no,Flights e)
	{
  
		 return repo.saveAndFlush(e);
	}


}