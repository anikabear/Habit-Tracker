package com.Anbear.HabitTracker.repository;

import com.Anbear.HabitTracker.model.Habit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HabitRepository extends JpaRepository<Habit, String> {
}
