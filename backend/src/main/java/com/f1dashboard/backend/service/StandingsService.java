package com.f1dashboard.backend.service;

import com.f1dashboard.backend.model.DriverStanding;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StandingsService {

    public List<DriverStanding> getStandings() {
        return List.of(
                new DriverStanding(1, "Max Verstappen", "Red Bull", 110),
                new DriverStanding(2, "Charles Leclerc", "Ferrari", 92),
                new DriverStanding(3, "Lando Norris", "McLaren", 88),
                new DriverStanding(4, "Lewis Hamilton", "Mercedes", 74));
    }
}