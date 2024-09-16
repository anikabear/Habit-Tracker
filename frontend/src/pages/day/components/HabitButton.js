/** @format */
import React from "react";
import { useState } from "react";



export default function HabitButton() {
    const [bgClr, setBgClr] = useState("#9D7289");

  const ColourHandler = () => {
      if (bgClr=="#F671B7"){
        setBgClr("#9D7289");
      }else{
    setBgClr("#F671B7");
      }
  };

//   const onChangeInput = (e) => {

//   }
    return (
        <button className="habit-button"  onClick={ColourHandler} style={{ background: bgClr }}>
            habit
        </button>

        

    );
    
}