import { Todo } from './Todo';

import { TodoType } from '../App';

import Clipboard from '../assets/Clipboard.svg';

import styles from './TodoList.module.css';

interface TodoListProps {
	todos: TodoType[];
	onUpdateTodo: (id: string) => void;
	onDeleteTodo: (id: string) => void;
}

export const TodoList = ({ todos, onUpdateTodo, onDeleteTodo }: TodoListProps) => {
	const todoListLength = todos.length;

	const completedTodoListLength = todos.filter((todo) => todo.isComplete).length;

	return (
		<div className={styles.todo_list_wrapper}>
			<div className={styles.todo_list_summary}>
				<div>
					Tareafas criadas <span>{todoListLength}</span>
				</div>
				<div>
					Concluídas{' '}
					<span>
						{todoListLength > 0
							? `${completedTodoListLength} de ${todoListLength}`
							: todoListLength}
					</span>
				</div>
			</div>
			{todoListLength === 0 ? (
				<div>
					<div className={styles.todo_list_without_items}></div>
					<div className={styles.todo_list_without_items_message}>
						<img src={Clipboard} alt="Lista de Tarefas" />
						<span>
							<p>Você ainda não tem tarefas cadastradas</p>
							<p>Crie tarefas e organize seus itens a fazer</p>
						</span>
					</div>
				</div>
			) : (
				<ul className={styles.todo_list}>
					{todos.map((todo) => (
						<Todo
							key={todo.id}
							id={todo.id}
							content={todo.content}
							isComplete={todo.isComplete}
							onUpdateTodo={onUpdateTodo}
							onDeleteTodo={onDeleteTodo}
						/>
					))}
				</ul>
			)}
		</div>
	);
};
