import React from 'react';
import { TodoFiltersProps } from '../models/TodoFilters.interface';


const TodoFilters: React.FC<TodoFiltersProps> = ({ filter, setFilter }) => {
    return (
        <div className="filters">
            <button data-testid="filter-all" className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
            <button data-testid="filter-active" className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>Active</button>
            <button data-testid="filter-completed" className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>Completed</button>
        </div>
    );
};

export default TodoFilters;