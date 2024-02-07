// TaskList.js
const TaskList = ({ tasks, onToggle, onDelete }) => {
    const taskListStyle = {
      listStyle: 'none',
      padding: '0',
    };
  
    return (
      <ul style={taskListStyle}>
        {tasks.map((task) => (
          <li key={task.id} style={taskItemStyle(task.completed)}>
            <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
            <span>{task.title}</span>
            <button style={deleteButtonStyle} onClick={() => onDelete(task.id)}>
              Delete
            </button>
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