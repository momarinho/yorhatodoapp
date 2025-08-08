import React from 'react';
import type { Todo } from '../../App';
import { Trash2, CheckCircle2, Circle } from 'lucide-react';
import '../styles/Stats.css';

interface StatsProps {
    todos: Todo[];
    onClearCompleted: () => void;
}

const Stats: React.FC<StatsProps> = ({ todos, onClearCompleted }) => {
    const totalTasks = todos.length;
    const completedTasks = todos.filter(todo => todo.completed).length;
    const activeTasks = totalTasks - completedTasks;
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    return (
        <div className="stats">
            <div className="stats-grid">
                <div className="stat-item">
                    <Circle size={16} className="stat-icon" />
                    <span className="stat-label">Active</span>
                    <span className="stat-value">{activeTasks}</span>
                </div>

                <div className="stat-item">
                    <CheckCircle2 size={16} className="stat-icon completed" />
                    <span className="stat-label">Completed</span>
                    <span className="stat-value">{completedTasks}</span>
                </div>

                <div className="stat-item">
                    <span className="stat-label">Total</span>
                    <span className="stat-value">{totalTasks}</span>
                </div>

                <div className="stat-item">
                    <span className="stat-label">Progress</span>
                    <span className="stat-value">{completionRate}%</span>
                </div>
            </div>

            {completedTasks > 0 && (
                <button
                    className="clear-completed-btn"
                    onClick={onClearCompleted}
                    title="Clear completed tasks"
                >
                    <Trash2 size={14} />
                    Clear Completed
                </button>
            )}
        </div>
    );
};

export default Stats;