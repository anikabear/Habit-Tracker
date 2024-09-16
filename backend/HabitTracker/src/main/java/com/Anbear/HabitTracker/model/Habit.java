package com.Anbear.HabitTracker.model;

import jakarta.persistence.*;

import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "habits")
public class Habit {
    @Id
    private String id = UUID.randomUUID().toString();
    private String name;
    private boolean completed;

    public Habit(){}

    public Habit(String name, boolean completed) {
        this.name = name;
        this.completed = completed;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Habit habit = (Habit) o;
        return completed == habit.completed && id.equals(habit.id) && Objects.equals(name, habit.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, completed);
    }
}
