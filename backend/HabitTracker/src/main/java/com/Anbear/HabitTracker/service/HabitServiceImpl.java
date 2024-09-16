package com.Anbear.HabitTracker.service;

import com.Anbear.HabitTracker.model.Habit;
import com.Anbear.HabitTracker.repository.HabitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HabitServiceImpl implements HabitService{

    @Autowired
    private HabitRepository habitRepository;


    @Override

    public Habit createHabit(Habit habit) {
        return habitRepository.save(habit);
    }

    @Override
    public List<Habit> getAllHabits() {
        return habitRepository.findAll();
    }

    @Override
    public Habit getHabitById(String id) {
        return habitRepository.findById(id).orElse(null);
    }

    @Override
    public Habit updateHabitCompleted(String id, boolean completed) {
        Habit habit = getHabitById(id);
        if (habit != null){
            habit.setCompleted(completed);
            return habitRepository.save(habit);
        }
        return null;

    }

    @Override
    public void deleteHabit(String id) {
        if (habitRepository.existsById(id)) {
            habitRepository.deleteById(id);
        }
    }
}
