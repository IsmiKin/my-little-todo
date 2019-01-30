import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

import './TodoList.css'

const TodoList = ({ todos }) => (
	<div className="TodoList-container">
		<ListGroup>
			{todos.map(todo => (
				<ListGroupItem className="d-flex justify-content-start">
					{todo}
				</ListGroupItem>
			))}
		</ListGroup>
	</div>
)

export default TodoList
