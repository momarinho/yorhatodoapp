import React, { useState } from 'react';
import { Plus, AlertCircle } from 'lucide-react';
import '../styles/AddTodo.css';

interface AddTodoProps {
  onAddTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputValue.trim().length === 0) {
      setError('Task description cannot be empty');
      return;
    }
    
    if (inputValue.trim().length > 200) {
      setError('Task description must be under 200 characters');
      return;
    }
    
    onAddTodo(inputValue);
    setInputValue('');
    setError('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (error) setError(''); // Clear error when user starts typing
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit} className="add-todo-form">
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter new task..."
            className={`todo-input ${error ? 'error' : ''}`}
            maxLength={200}
            aria-label="New task description"
          />
          <button 
            type="submit" 
            className="add-btn"
            disabled={inputValue.trim().length === 0}
            aria-label="Add new task"
          >
            <Plus size={18} />
            Add Task
          </button>
        </div>
        
        {error && (
          <div className="error-message">
            <AlertCircle size={14} />
            <span>{error}</span>
          </div>
        )}
        
        <div className="input-info">
          <span className="char-count">
            {inputValue.length}/200
          </span>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;