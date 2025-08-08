import React, { useState } from 'react';
import type { Todo } from '../../App';
import TodoItem from './TodoItem';
import { FileText } from 'lucide-react';
import '../styles/TodoList.css';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

type FilterType = 'all' | 'active' | 'completed';

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  if (filteredTodos.length === 0) {
    return (
      <div className="todo-list-empty">
        <FileText size={32} className="empty-icon" />
        <h3>No tasks found</h3>
        <p>Add a new task above to get started</p>
        <div className="filter-buttons">
          <button 
            onClick={() => setFilter('all')} 
            className={filter === 'all' ? 'active' : ''}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('active')} 
            className={filter === 'active' ? 'active' : ''}
          >
            Active
          </button>
          <button 
            onClick={() => setFilter('completed')} 
            className={filter === 'completed' ? 'active' : ''}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="todo-list">
      <div className="todo-list-header">
        <span className="list-title">
          {filter === 'all' && 'All Tasks'}
          {filter === 'active' && 'Active Tasks'}
          {filter === 'completed' && 'Completed Tasks'}
        </span>
        <span className="task-count">
          {filteredTodos.length} {filteredTodos.length === 1 ? 'item' : 'items'}
        </span>
      </div>

      <div className="filter-buttons">
        <button 
          onClick={() => setFilter('all')} 
          className={filter === 'all' ? 'active' : ''}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('active')} 
          className={filter === 'active' ? 'active' : ''}
        >
          Active
        </button>
        <button 
          onClick={() => setFilter('completed')} 
          className={filter === 'completed' ? 'active' : ''}
        >
          Completed
        </button>
      </div>
      
      <div className="todo-items">
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;