import React, { useContext, useEffect } from 'react';
import './container-styles.css'
import '../my-css.css'
import Task from '../Task/Task'
import AddIcon from '../add.png'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import NewTask from '../NewTask/NewTask'
import { TaskContext } from '../../context/taskContext'

function Container() {
    const { tasksList } = useContext(TaskContext)
    const { getTasksList } = useContext(TaskContext)

    useEffect(() => {
        getTasksList()
    }, []);

    return (
        <BrowserRouter>
            <div id="container" className="bg-dark-blue">
                <header className='bg-light-blue'>
                    <h1>Lista de tareas</h1>
                    <div>
                        <Link to='/new-task'>
                            <img id="add-button" src={AddIcon} alt="new task" />
                        </Link>
                    </div>
                </header>
                <Switch>
                    <Route exact path='/'>
                        <div>
                            {
                                tasksList.length !== 0 ? tasksList.map((el, i) => {
                                    return <Task key={i} id={el.id} taskText={el.taskText} color={el.color} />
                                }) : <div className='y-centered'>
                                        <p className='centered-text light-text'>No hay tareas aún</p>
                                    </div>
                            }
                        </div>
                    </Route>
                    <Route path='/new-task'>
                        <NewTask />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Container;