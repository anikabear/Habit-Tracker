package com.Anbear.HabitTracker.service;

import com.Anbear.HabitTracker.model.Habit;

import java.util.List;

public interface HabitService {
    public Habit createHabit(Habit habit);
    public List<Habit> getAllHabits();
    public Habit getHabitById(String id);
    public Habit updateHabitCompleted(String id, boolean completed);
    public void deleteHabit(String id);



}
