import React from 'react';
import { TodoListProps } from '../models/TodoList.interface';


const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {

    const renderTodos = todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
        </li>
    ))

    return (
        <ul data-testid="todo-list">
            {renderTodos}
        </ul>
    );
};

export default TodoList;