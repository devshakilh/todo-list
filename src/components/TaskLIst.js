import { useState } from "react";
import TaskItem from "./TaskItem";

// TaskList.js
const TaskList = ({ tasks, onToggle, onDelete,onEdit  }) => {
    const taskListStyle = {
      listStyle: 'none',
      padding: '0',
    };



    const [editTaskId, setEditTaskId] = useState(null);

    const handleEdit = (taskId) => {
      setEditTaskId(taskId);
    };
  
    const handleSaveEdit = (taskId, updatedTitle) => {
      onEdit(taskId, updatedTitle);
      setEditTaskId(null);
    };
  
    const handleCancelEdit = () => {
      setEditTaskId(null);
    };
  

  
    return (
      <ul style={taskListStyle}>
        {tasks.map((task) => (
          <li key={task.id} style={taskItemStyle(task.completed)}>
                    
            <TaskItem
          key={task.id}
          task={task}
          onToggle={() => onToggle(task.id)}
          onDelete={() => onDelete(task.id)}
          onEdit={handleEdit}
          onSaveEdit={handleSaveEdit}
          onCancelEdit={handleCancelEdit}
          isEditing={editTaskId === task.id}
        />
          </li>
          
        ))}
      </ul>
    );
  };
  
  const taskItemStyle = (completed) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    textDecoration: completed ? 'line-through' : 'none',
    color: completed ? '#888' : 'inherit',
  });
  
  const deleteButtonStyle = {
    backgroundColor: '#ff5252',
    padding: '8px 16px',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };
  

  export default TaskList;