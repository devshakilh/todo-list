// AddTaskForm.js
import React, { useState } from 'react';

const AddTaskForm = ({ onAdd }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim() !== '') {
      onAdd({ id: Date.now(), title: taskTitle, completed: false });
      setTaskTitle('');
    }
  };

  return (
    <div>
      <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
      <button style={home} onClick={handleAddTask} >Add Task</button>
    </div>
  );
};

export default AddTaskForm;

const home = {
   
    marginLeft: '60px',
   
  };