import { Trash } from '@phosphor-icons/react';

import styles from './Todo.module.css';

interface TodoProps {
	id: string;
	isComplete: boolean;
	content: string;
	onUpdateTodo: (id: string) => void;
	onDeleteTodo: (id: string) => void;
}

export const Todo = ({ id, isComplete, content, onUpdateTodo, onDeleteTodo }: TodoProps) => {
	function handlerUpdateTodo() {
		onUpdateTodo(id);
	}

	function handlerDeleteTodo() {
		onDeleteTodo(id);
	}

	return (
		<li className={styles.todo}>
			<span>
				<input type="checkbox" id={id} checked={isComplete} onChange={handlerUpdateTodo} />
				<label htmlFor={id}>{content}</label>
			</span>
			<button onClick={handlerDeleteTodo}>
				<Trash size={18} />
			</button>
		</li>
	);
};
