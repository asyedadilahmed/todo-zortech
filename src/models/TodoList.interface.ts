import { Todo } from "./Todo.interface";

export interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
}