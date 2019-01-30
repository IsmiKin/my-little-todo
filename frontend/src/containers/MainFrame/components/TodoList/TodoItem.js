import React from 'react'

import { ListGroupItem, Button } from 'reactstrap'

const TodoItem = ({ todo }) => (
	<ListGroupItem
		className="d-flex container align-content-center"
		disabled={todo.done}
	>
		<div className="name-wrapper p-2">{todo.name}</div>
		<div className="remove-button-wrapper ml-auto p-2">
			<Button color="danger" className="d-flex align-self-end">
				Remove
			</Button>
		</div>
	</ListGroupItem>
)

export default TodoItem
