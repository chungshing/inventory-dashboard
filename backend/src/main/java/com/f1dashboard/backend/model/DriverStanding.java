package com.f1dashboard.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DriverStanding {

    private int position;
    private String driver;
    private String team;
    private int points;
}