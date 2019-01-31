import React from 'react'
import { ListGroup, Jumbotron } from 'reactstrap'

import './TodoList.css'
import TodoItem from './TodoItem'

const TodoList = ({ todos, handlerDeleteTodo, handlerUpdateTodo }) => (
	<div className="TodoList-component">
		{todos.length > 0 ? (
			<ListGroup className="TodoList-component__list-group">
				{todos.map(todo => (
					<TodoItem
						todo={todo}
						key={todo._id}
						handlerDeleteTodo={handlerDeleteTodo}
						handlerUpdateTodo={handlerUpdateTodo}
					/>
				))}
			</ListGroup>
		) : (
			<Jumbotron className="TodoList-component__empty-todos-message">
				<h1>No item to display.. try adding one!</h1>
			</Jumbotron>
		)}
	</div>
)

export default TodoList
