package com.Anbear.HabitTracker.dto;

public class HabitRequestDto {

    private boolean completed;
    private String name;


    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

