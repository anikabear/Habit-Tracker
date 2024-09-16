package com.Anbear.HabitTracker.controller;


import com.Anbear.HabitTracker.dto.HabitRequestDto;
import com.Anbear.HabitTracker.dto.HabitResponseDto;
import com.Anbear.HabitTracker.dto.UpdateRequestDto;
import com.Anbear.HabitTracker.model.Habit;
import com.Anbear.HabitTracker.service.HabitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/habits")
public class HabitController {
    @Autowired
    private HabitService habitService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public HabitResponseDto createHabit(
            @RequestBody HabitRequestDto habitRequestDto
    ) {
        Habit habit = new Habit(habitRequestDto.getName(), habitRequestDto.isCompleted());
        Habit createdHabit = habitService.createHabit(habit);
        return new HabitResponseDto(createdHabit.getId(), createdHabit.isCompleted(), createdHabit.getName());
    }

    @GetMapping
    public List<HabitResponseDto> getAllHabits() {
        List<Habit> habits = habitService.getAllHabits();
        return habits.stream()
                .map(h -> new HabitResponseDto(h.getId(), h.isCompleted(), h.getName()))
                .collect(Collectors.toList());
    }
    @GetMapping("/{id}")
    public HabitResponseDto getHabitById(@PathVariable String id) {
        Habit habit = habitService.getHabitById(id);
                return new HabitResponseDto(habit.getId(), habit.isCompleted(), habit.getName());
    }

    @PatchMapping("/{id}")
    public HabitResponseDto updateHabitCompleted(
            @PathVariable String id,
            @RequestBody UpdateRequestDto updateRequestDto
    ) {
        Habit habit = habitService.updateHabitCompleted(id, updateRequestDto.isCompleted());
        return new HabitResponseDto(habit.getId(), habit.isCompleted(), habit.getName());

    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteHabit( @PathVariable String id) {

        habitService.deleteHabit(id);
    }
}
