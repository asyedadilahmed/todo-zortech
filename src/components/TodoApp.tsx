import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoFilters from './TodoFilters';
import { Todo } from '../models/Todo.interface';


const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const [filter, setFilter] = useState('all');

    //Initializing todos array from localStorage on first load
    useEffect(() => {
        try {
            const savedTodos = localStorage.getItem('todos');
            if (savedTodos) {
                setTodos(JSON.parse(savedTodos));
            }
        } catch (error) {
            console.error("Error loading todos from localStorage:", error);
        }
    }, []);

    //Update local storage whenever there is change in todos array
    useEffect(() => {
        try {
            if (todos.length) {
                localStorage.setItem('todos', JSON.stringify(todos));
            }
        } catch (error) {
            console.error("Error saving todos to localStorage:", error);
        }
    }, [todos]);

    //Add Todo list
    const addTodo = (text: string) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    //Toggle function to view Active/Completed list
    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'all') return true;
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <div>
            <TodoInput addTodo={addTodo} />
            <TodoFilters filter={filter} setFilter={setFilter} />
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
        </div>
    );
};

export default TodoApp;