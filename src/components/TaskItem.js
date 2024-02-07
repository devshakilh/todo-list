// TaskItem.js
import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={onToggle} />
      <span>{task.title}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
