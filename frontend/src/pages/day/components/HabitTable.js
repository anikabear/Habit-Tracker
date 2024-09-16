/** @format */
import React from "react";
import HabitButton from "./HabitButton";

export default function HabitTable() {
    return (
        <table className="Habit-button-table">
                        <tr>
                            <td><HabitButton /></td>
                            <td><HabitButton /></td>
                            <td><HabitButton /></td>
                        </tr>
                        <tr>
                            <td><HabitButton /></td>
                            <td><HabitButton /></td>
                            <td><HabitButton /></td>
                        </tr>
                        <tr>
                            <td><HabitButton /></td>
                            <td><HabitButton /></td>
                            <td><HabitButton /></td>
                        </tr>
                        
                    </table>
    );
}