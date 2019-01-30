import React from 'react'

import FormTodo from './components/FormTodo'
import TodoList from './components/TodoList'

import todoApi from 'services/todoApi'

class MainFrame extends React.Component {
	constructor() {
		super()
		this.state = {
			todos: []
		}
	}

	componentDidMount() {
		todoApi.getAllTodos().then(todos => this.setState({ todos: todos }))
	}

	handlerCreateTodo(newTodo) {
		// Add optimistic update
		todoApi
			.createTodo(newTodo)
			.then(res => this.setState({ todos: this.state.todos.push(newTodo) }))
	}

	handlerDeleteTodo(todoId) {
		todoApi.removeTodo(todoId).then(res => console.log('removed!'))
	}

	render() {
		return (
			<div className="main-frame container">
				<div className="main-frame__input-todo row-md-6">
					<FormTodo
						createTodoCall={newTodo => this.handlerCreateTodo(newTodo)}
					/>
				</div>
				<div className="main-frame__list-todo row-md-6">
					<TodoList
						{...this.state}
						handlerDeleteTodo={todoId => this.handlerDeleteTodo(todoId)}
					/>
				</div>
			</div>
		)
	}
}

export default MainFrame
