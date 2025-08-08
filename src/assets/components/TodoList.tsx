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

interface FilterButtonsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ currentFilter, onFilterChange }) => (
  <div className="filter-buttons">
    {(['all', 'active', 'completed'] as FilterType[]).map((filter) => (
      <button
        key={filter}
        onClick={() => onFilterChange(filter)}
        className={currentFilter === filter ? 'active' : ''}
      >
        {filter.charAt(0).toUpperCase() + filter.slice(1)}
      </button>
    ))}
  </div>
);

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const emptyMessages = {
    all: {
      title: 'EMPTINESS RECOGNIZED',
      description: 'CREATE NEW DIRECTIVE TO COMMENCE EXISTENCE'
    },
    active: {
      title: 'STANDBY MODE ENGAGED',
      description: 'ALL OBJECTIVES TERMINATED. OR... INITIATE NEW PROTOCOL'
    },
    completed: {
      title: 'NO TERMINATION RECORDS',
      description: 'FULFILL DIRECTIVES TO WITNESS THEIR END'
    }
  };

  return (
    <div className="todo-list">
      <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

      {filteredTodos.length === 0 ? (
        <div className="todo-list-empty">
          <FileText size={32} className="empty-icon" />
          <h3>{emptyMessages[filter].title}</h3>
          <p>{emptyMessages[filter].description}</p>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default TodoList;