package com.Anbear.HabitTracker.dto;

public class HabitResponseDto {
    private String id;
    private boolean completed;
    private String name;

    public HabitResponseDto(String id, boolean completed, String name) {
        this.id = id;
        this.completed = completed;
        this.name = name;
    }


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



    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
