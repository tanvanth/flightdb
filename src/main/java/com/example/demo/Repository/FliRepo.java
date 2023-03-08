package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Flights.Flights;
@Repository
public interface FliRepo extends JpaRepository<Flights,Integer>{

    
}