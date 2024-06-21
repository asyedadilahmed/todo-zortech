import React, { useState } from 'react';
import { TodoInputProps } from '../models/TodoInput.interface';

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
    const [input, setInput] = useState('');

    const handleAddTodo = () => {
        if (input.trim()) {
            addTodo(input);
            setInput('');
        }
    };

    return (
        <div className='todo-input-wrapper'>
            <input
                data-testid="todo-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a new task"
            />
            <button data-testid="add-todo" onClick={handleAddTodo}>Add</button>
        </div>
    );
};

export default TodoInput;