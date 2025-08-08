import React, { useState } from 'react';
import type { Todo } from '../../App';
import { Check, X, Calendar } from 'lucide-react';
import '../styles/TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete(todo.id);
    }, 200); // Brief animation delay
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} ${isDeleting ? 'deleting' : ''}`}>
      <button
        className={`toggle-btn ${todo.completed ? 'completed' : ''}`}
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed && <Check size={14} />}
      </button>
      
      <div className="todo-content">
        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </span>
        
        <div className="todo-meta">
          <Calendar size={12} />
          <span className="todo-date">
            Created: {formatDate(todo.createdAt)}
          </span>
        </div>
      </div>
      
      <button
        className="delete-btn"
        onClick={handleDelete}
        disabled={isDeleting}
        aria-label="Delete task"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default TodoItem;