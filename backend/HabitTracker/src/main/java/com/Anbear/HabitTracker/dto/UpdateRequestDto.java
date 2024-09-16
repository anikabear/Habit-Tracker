package com.Anbear.HabitTracker.dto;

public class UpdateRequestDto {
    public UpdateRequestDto(boolean completed) {
        this.completed = completed;
    }

    public UpdateRequestDto(String name) {
        this.name = name;
    }

    public UpdateRequestDto(boolean completed, String name) {
        this.completed = completed;
        this.name = name;
    }

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
