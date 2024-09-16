import React, {useState} from "react";


export default function HabitForm({addHabit}) {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
       
            addHabit(value);
     
            setValue('');
          }
        
    }
    return(
        <form className='habit-form' onSubmit={handleSubmit}>
            <input type="text" className="habit-input" value={value} 
                placeholder="Add a new habit" 
                onChange= {(e) => setValue(e.target.value)}/>
            <button type='submit' className='add-habit-btn'>+</button>
        </form>
    )
}