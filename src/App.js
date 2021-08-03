import './components/my-css.css'
import Container from './components/Container/Container'
import React from 'react'
import TaskContextProvider from './context/taskContext'

function App() {

  return (
    <TaskContextProvider>
      <div className="App">
        <Container />
      </div>
    </TaskContextProvider>
  );
}

export default App;
