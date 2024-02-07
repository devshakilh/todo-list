// // TaskItem.js
// import React from 'react';

// const TaskItem = ({ task, onToggle, onDelete }) => {
//   return (
//     <li>
//       <input type="checkbox" checked={task.completed} onChange={onToggle} />
//       <span>{task.title}</span>
//       <button onClick={onDelete}>Delete</button>
//     </li>
//   );
// };

// export default TaskItem;


// TaskItem.js
import React, { useState } from 'react';

const TaskItem = ({ task, onToggle, onDelete, onEdit, onSaveEdit, onCancelEdit, isEditing }) => {
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleSaveClick = () => {
    onSaveEdit(task.id, editedTitle);
  };

  const handleCancelClick = () => {
    onCancelEdit();
  };

  return (
    <li>
      {!isEditing ? (
        <>
          <input type="checkbox" checked={task.completed} onChange={onToggle} />
          <span>{task.title}</span>
          <button style={deleteButtonStyle}  onClick={onDelete}>Delete</button>
          <button onClick={() => onEdit(task.id)}>Edit</button>
        </>
      ) : (
        <>
          <input type="text" value={editedTitle} onChange={handleEditChange} />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;




const deleteButtonStyle = {
  backgroundColor: '#ff5252',
  padding: '8px 16px',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};
