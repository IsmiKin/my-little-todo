import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faTrashAlt,
	faCheckCircle,
	faPen
} from '@fortawesome/free-solid-svg-icons'

import { ListGroupItem, Button } from 'reactstrap'

import ModalPopUp from 'components/ModalPopUp'

const TodoItem = ({ todo, handlerDeleteTodo }) => (
	<ListGroupItem
		className="d-flex container align-content-center"
		disabled={todo.done}
	>
		<div className="name-wrapper p-2">{todo.name}</div>
		<div className="remove-button-wrapper ml-auto p-2">
			{todo.done ? null : (
				<Button color="success">
					<FontAwesomeIcon icon={faCheckCircle} />
				</Button>
			)}
			{todo.done ? null : (
				<ModalPopUp
					color="warning"
					title="Edit ToDo"
					buttonLabel={<FontAwesomeIcon icon={faPen} />}
				>
					Lalala
				</ModalPopUp>
			)}
			<Button color="danger" onClick={() => handlerDeleteTodo(todo._id)}>
				<FontAwesomeIcon icon={faTrashAlt} />
			</Button>
		</div>
	</ListGroupItem>
)

export default TodoItem
