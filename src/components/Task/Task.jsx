import React, { useState, useContext } from 'react'
import './task-styles.css'
import Trash from '../trash.png'
import { TaskContext } from '../../context/taskContext'

function Task({ taskText, color, id }) {
    const [done, setDone] = useState(false);
    const [bgColor, setBgColor] = useState(color)

    function handleTask() {
        setDone(!done);
    };

    const changeColor = ev => {
        const newColor = ev.target.classList[0]
        const lsTaskList = JSON.parse(localStorage.getItem("taskList"))
        const itemIndex = lsTaskList.findIndex(el => el.id === id)
        lsTaskList[itemIndex].color = newColor
        localStorage.setItem("taskList", JSON.stringify(lsTaskList))
        setBgColor(newColor)
    } 
    let containerClasses = "task-container " + bgColor;
    //no pasar las funciones en return con "()" porque las ejecuta

    const { deleteTask } = useContext(TaskContext)

    
    return (
        <div className={`bottom-space ${containerClasses}`}>
            <div className="task-elements">
            <div className="input">
                <input onChange={handleTask} type="checkbox"></input>
            </div>
            <div className="h3">
                <h3 className={done ? "blank" : ""}> {taskText} </h3>
            </div>
            <div className="img">
                <img onClick={() => {deleteTask(id)}} src={Trash} alt="Eliminar tarea" />
            </div>
            </div>
            <div className="bg-selector-container">
                <div onClick={changeColor} className="bg-light-blue bg-selector"></div>
                <div onClick={changeColor} className="bg-yellow bg-selector"></div>
                <div onClick={changeColor} className="bg-red bg-selector"></div>
                <div onClick={changeColor} className="bg-purple bg-selector"></div>
                <div onClick={changeColor} className="bg-green bg-selector"></div>
            </div>
        </div>
    )
}

export default Task;