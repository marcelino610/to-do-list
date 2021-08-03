import React, { useContext } from 'react'
import './newtask-styles.css'
import '../my-css.css'
import { TaskContext } from '../../context/taskContext'
import { Link } from 'react-router-dom'
import Back from './back-left-curved-arrow.png'
import Save from './floppy-disk.png'

function NewTask() {
    const { setTasksList } = useContext(TaskContext)

    function setNewTask() {
        let lsTaskList = JSON.parse(localStorage.getItem("taskList"))
        let taskInput = document.getElementById('task-text-input').value
        lsTaskList.push({
            id: lsTaskList.length + 1,
            taskText: taskInput,
            color: 'bg-light-blue'
        })
        localStorage.setItem("taskList", JSON.stringify(lsTaskList))
        setTasksList(lsTaskList)
        document.getElementById('task-text-input').value = ''
    }
    return (
        <div id='nt-container' className='bg-green'>
            <div id='text-input'>
                <textarea id='task-text-input' maxLength='150'></textarea>
            </div>
            <div id='buttons'>
                <div>
                    <Link to='/'>
                        <img src={Back} height="30px" alt="Volver" />
                    </Link>
                </div>
                <div>
                    <Link to='/'>
                        <img src={Save} onClick={() => setNewTask()} height="30px" alt="Guardar tarea" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NewTask;