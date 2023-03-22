import { useState } from 'react';

import { CreateTodo } from './components/CreateTodo';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';

import styles from './App.module.css';
import './global.css';

export interface TodoType {
	id: string;
	content: string;
	isComplete: boolean;
}

export const App = () => {
	const [todos, setTodos] = useState<TodoType[]>([]);

	function createTodo(content: string) {
		const newTodo = {
			id: crypto.randomUUID(),
			content: content,
			isComplete: false,
		};

		setTodos((currentTodos) => [...currentTodos, newTodo]);
	}

	function updateTodo(id: string) {
		setTodos((currentTodos) =>
			currentTodos.map((todo) =>
				todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
			)
		);
	}

	function deleteTodo(id: string) {
		setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
	}

	return (
		<>
			<Header />
			<main className={styles.main}>
				<section>
					<CreateTodo onCreateTodo={createTodo} />
					<TodoList todos={todos} onUpdateTodo={updateTodo} onDeleteTodo={deleteTodo} />
				</section>
			</main>
		</>
	);
};
