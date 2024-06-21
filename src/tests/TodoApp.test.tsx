import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoApp from '../components/TodoApp';
import { Todo } from '../models/Todo.interface';

describe('TodoApp', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('renders without crashing', () => {
        render(<TodoApp />);
        expect(screen.getByTestId('todo-list')).toBeInTheDocument();
    });

    test('loads todos from localStorage', () => {
        const todos: Todo[] = [
            { id: 1, text: 'Test Todo 1', completed: false },
            { id: 2, text: 'Test Todo 2', completed: true },
        ];
        localStorage.setItem('todos', JSON.stringify(todos));
        render(<TodoApp />);
        expect(screen.getByText('Test Todo 1')).toBeInTheDocument();
        expect(screen.getByText('Test Todo 2')).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoApp />);
        fireEvent.change(screen.getByTestId('todo-input'), { target: { value: 'New Todo' } });
        fireEvent.click(screen.getByTestId('add-todo'));
        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    test('toggles a todo', () => {
        render(<TodoApp />);
        fireEvent.change(screen.getByTestId('todo-input'), { target: { value: 'Toggle Todo' } });
        fireEvent.click(screen.getByTestId('add-todo'));
        const todo = screen.getByText('Toggle Todo');
        fireEvent.click(todo);
        expect(screen.getByText('Toggle Todo')).toBeInTheDocument();
    });

    test('filters todos', () => {
        const todos: Todo[] = [
            { id: 1, text: 'Active Todo', completed: false },
            { id: 2, text: 'Completed Todo', completed: true },
        ];
        localStorage.setItem('todos', JSON.stringify(todos));
        render(<TodoApp />);

        fireEvent.click(screen.getByTestId('filter-active'));
        expect(screen.getByText('Active Todo')).toBeInTheDocument();
        expect(screen.queryByText('Completed Todo')).toBeNull();

        fireEvent.click(screen.getByTestId('filter-completed'));
        expect(screen.queryByText('Active Todo')).toBeNull();
        expect(screen.getByText('Completed Todo')).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('filter-all'));
        expect(screen.getByText('Active Todo')).toBeInTheDocument();
        expect(screen.getByText('Completed Todo')).toBeInTheDocument();
    });
});
