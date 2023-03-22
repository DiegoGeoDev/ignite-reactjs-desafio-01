import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { PlusCircle } from '@phosphor-icons/react';

import styles from './CreateTodo.module.css';

interface CreateTodoProps {
	onCreateTodo: (content: string) => void;
}

export const CreateTodo = ({ onCreateTodo }: CreateTodoProps) => {
	const [content, setContent] = useState<string>('');

	function handleCreateNewTodo(event: FormEvent) {
		event.preventDefault();

		onCreateTodo(content);

		setContent('');
	}

	function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity('');

		setContent(event.target.value);
	}

	function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
		event.target.setCustomValidity('Este campo é obrigatório');
	}

	return (
		<form className={styles.form} onSubmit={handleCreateNewTodo}>
			<input
				type="text"
				placeholder="Adicione uma nova tarefa"
				value={content}
				onChange={handleNewTodoChange}
				onInvalid={handleNewTodoInvalid}
				required
			/>
			<button type="submit">
				<p>Criar</p>
				<PlusCircle size={20} />
			</button>
		</form>
	);
};
