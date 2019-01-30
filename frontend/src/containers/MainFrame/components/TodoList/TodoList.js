import React from 'react'
import { ListGroup, Jumbotron } from 'reactstrap'

import './TodoList.css'
import TodoItem from './TodoItem'

const TodoList = ({ todos }) => (
	<div className="TodoList-container">
		{todos.length > 0 ? (
			<ListGroup>
				{todos.map(todo => (
					<TodoItem todo={todo} key={todo._id} />
				))}
			</ListGroup>
		) : (
			<Jumbotron>
				<h1>No item to display.. try adding one!</h1>
			</Jumbotron>
		)}
	</div>
)

export default TodoList
