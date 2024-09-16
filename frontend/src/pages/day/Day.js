
/** @format */
import React, {useEffect, useState} from 'react';
import logo from '../../logo.svg';
import DayRing from "./components/DayRing";
import "./day.css";
import HabitButton from "./components/HabitButton";
import HabitTable from './components/HabitTable';
import HabitForm from './components/HabitForm';
import { v4 as uuidv4 } from 'uuid';
import Habit from './components/Habit';
import habitServiceConfig from '../../apiconfig'
import habitService from '../../services/habitService'
uuidv4();


export default function Day() {
    const [habits, setHabits] = useState([])
    useEffect(()=> {
        const getHabits = async() => {
            const habits = await habitService.fetchHabits();
            setHabits(habits);
        }
        getHabits();
        
    }, []);
 
        const addNewHabit = async(habit) => {
            const newHabit = await habitService.addHabit(habit, false);
            setHabits([...habits, newHabit])
        }
    
        
    const setCompleteHandler = async(habitToComplete) => {
        const updatedHabit = await habitService.setComplete(habitToComplete);
        setHabits(
             habits.map((habit) => 
                habit.id === habitToComplete.id ?  updatedHabit : habit
            )
            );
    }

    // const editHabit = (habit, name) => {
    //     habit.name = name
    // }

    const deleteHabit = async(id) => {
        await habitService.deleteHabit(id);
        setHabits(
            habits.filter((habit) => habit.id !== id)
       );

        
    }


   
    return (
    <>
        <section className="Day">
            <div className="Day-header">
                <div><p></p></div>
                
                <DayRing habits={habits}/> 
                <div><p></p></div>
            </div>
            <div className="Day-body">
                <HabitForm addHabit={addNewHabit}/>

                <div className='Habit-grid'>
                    {habits.map((habit) => (
                        <Habit habit={habit}  setCompleteHandler={setCompleteHandler} deleteHabit = {deleteHabit}/>
                    ))}
                
                    
                </div>
                
                {/* <div className="Habits">
                    <HabitTable />
                </div> */}
            </div>
        </section>
    </>
      
    );
    }  