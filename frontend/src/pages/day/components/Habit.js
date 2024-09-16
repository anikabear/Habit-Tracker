import React, {useEffect, useState} from 'react';




export default function Habit({habit, setCompleteHandler, deleteHabit}) {
    const [bgClr, setBgClr] = useState();
    const [displayDelete, setDisplayDelete] = useState(false);
    useEffect(()=> {
        console.log(habit.completed);
        if (habit.completed === true){
            setBgClr("#FF72BC");
        } else{
            setBgClr("#882D5D");
            
        }
    }, [habit.completed]);
    // const [isEditing, setIsEditing] = useState(false);
    // const editHabit = () => {
        
    // }
    // const displayDeleteHandler = () => {
        
    //     setDisplayDelete(!displayDelete)
    // }
    const handleDelete = () => {
        deleteHabit(habit.id)
        
    }

    // const handleEdit = () => {
    //     setIsEditing(!isEditing)
    //     editHabit(habit.id)
    // }

    const colourHandler = async () => {
        await setCompleteHandler(habit);
    
        if (habit.completed === true){
            setBgClr("#882D5D");
        } else{
            setBgClr("#FF72BC");
            
        }
    }
    return (
        <div className = 'habit-wrapper'>
        <div className='Habit' onClick={colourHandler} style={{ background: bgClr }}>
            <p>{habit.name}</p>
            
        </div>
        <div className= 'habit-bar' style={{ background: bgClr }}>
            {/* <div className='edit-btn'  >e</div> */}
            <div className="delete-btn" onClick={handleDelete} >x</div>
            {/* <FontAwesomeIcon className="edit-icon" icon={faPenToSquare}  />
            <FontAwesomeIcon className="delete-btmn" icon={faTrash} onClick={() => handleDelete} /> */}
        </div>
                    
        </div>
        
    )
}