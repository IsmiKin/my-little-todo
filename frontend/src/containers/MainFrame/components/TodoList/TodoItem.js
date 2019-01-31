import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faTrashAlt,
	faCheckCircle,
	faPen
} from '@fortawesome/free-solid-svg-icons'

import { ListGroupItem, Button } from 'reactstrap'

import ModalPopUp from 'components/ModalPopUp'
import FormTodo from '../FormTodo'

const TodoItem = ({ todo, handlerDeleteTodo, handlerUpdateTodo }) => (
	<ListGroupItem
		className="d-flex todo-item-container container align-content-center"
		disabled={todo.done}
	>
		<div className="name-wrapper p-2">{todo.name}</div>
		{todo.done ? null : (
			<div className="actions-button-wrapper ml-auto p-2">
				<Button className="button-wrapper" color="success">
					<FontAwesomeIcon icon={faCheckCircle} />
				</Button>

				<ModalPopUp
					className="button-wrapper editTodoModal"
					color="warning"
					title="Edit ToDo"
					buttonLabel={<FontAwesomeIcon icon={faPen} />}
				>
					<FormTodo
						todo={todo}
						apiTodoCall={newTodo => handlerUpdateTodo(newTodo)}
					/>
				</ModalPopUp>

				<Button
					className="button-wrapper"
					color="danger"
					onClick={() => handlerDeleteTodo(todo._id)}
				>
					<FontAwesomeIcon icon={faTrashAlt} />
				</Button>
			</div>
		)}
	</ListGroupItem>
)

export default TodoItem
