// App.js
import React, { useEffect, useState } from 'react';

import './styles.css';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskLIst';


const App = () => {


  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);



  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };



  const toggleTask = (taskId) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };



  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, updatedTitle) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, title: updatedTitle } : task)));
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;


  return (
    <div style={containerStyle}>
    <h1 style={headerStyle}>Todo List App</h1>
    <AddTaskForm style={home} onAdd={addTask} />
    <TaskList tasks={tasks} onToggle={toggleTask} style={home} onDelete={deleteTask} onEdit={editTask} />
  
    <div className="counters">
        <p>Total Tasks: {totalTasks}</p>
        <p>Completed Tasks: {completedTasks}</p>
      </div>
  </div>
  );
};




export default App;



// the below code fragment can be found in:

const containerStyle = {
  maxWidth: '600px',
  margin: '20px auto',
  
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
  textAlign: 'center',
  color: '#333',
};
const home = {
  margRight: '20px',
  paddingLeft: '20%',
 
};