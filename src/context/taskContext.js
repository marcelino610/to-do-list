import React, { useState } from 'react'

export const TaskContext = React.createContext()

function TaskContextProvider({ children }) {
    const [tasksList, setTasksList] = useState([])

    function getTasksList() {
        setTasksList(JSON.parse(localStorage["taskList"]))
    }

    function deleteTask(ident) {
        let lsTaskList = JSON.parse(localStorage.getItem("taskList"))
        const i = lsTaskList.findIndex(el => el.id === ident)
        switch (i) {
            case 0:
                lsTaskList = lsTaskList.slice(1, lsTaskList.length)
                localStorage.setItem("taskList", JSON.stringify(lsTaskList))
                setTasksList(JSON.parse(localStorage.getItem('taskList')))
                break;
            case (lsTaskList.length - 1):
                lsTaskList = lsTaskList.slice(0, lsTaskList.length - 1)
                localStorage.setItem("taskList", JSON.stringify(lsTaskList))
                setTasksList(JSON.parse(localStorage.getItem('taskList')))
                break;
        
            default:
                lsTaskList = lsTaskList.slice(0, i).concat(lsTaskList.slice(i + 1, lsTaskList.length))
                localStorage.setItem("taskList", JSON.stringify(lsTaskList))
                setTasksList(JSON.parse(localStorage.getItem('taskList')))
                break;
        }
    }

    return (
        <TaskContext.Provider value={{ tasksList, setTasksList, getTasksList, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider;