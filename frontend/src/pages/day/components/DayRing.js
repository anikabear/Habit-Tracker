/** @format */
import { buildQueries } from "@testing-library/react";
import React from "react";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DayRing({habits}) {
    
    const completed = habits.filter((habit) => habit.completed === true )
    const percentage = completed.length !== 0 ? Math.round(completed.length / habits.length * 100) : 0;
    
    return (
        <div className='progress-bar-wrapper'>
            <CircularProgressbar 
                className='habit-ring' 
                value={percentage}
                 text={`${percentage}%`} 
                 styles={buildStyles({
                     pathColor: `rgba(246, 113, 183, ${percentage / 20})`,
                     textColor: 'white',
                     trailColor: '#D26CA2',

                 })}
                 />
        </div>

        

    );
    
}

