import React from 'react'
import _ from 'lodash'

import FormTodo from './components/FormTodo'
import TodoList from './components/TodoList'

import todoApi from 'services/todoApi'

// TODO Refactor: move setState before callApi (optimistic update)
// and refreshTodos on call api failure catch
// .. but not on creation 'cos we need the _id back from API

class MainFrame extends React.Component {
	constructor() {
		super()
		this.state = {
			todos: []
		}
	}

	componentDidMount() {
		this.refreshTodos()
	}

	refreshTodos() {
		todoApi.getAllTodos().then(todos => this.setState({ todos: todos }))
	}

	handlerCreateTodo(newTodo) {
		// TODO: handler exception
		todoApi.createTodo(newTodo).then(res => {
			const todosUpdated = this.state.todos.concat(res)
			this.setState({ todos: todosUpdated })
		})
	}

	handlerUpdateTodo(todoUpdated) {
		// TODO: handler exception
		todoApi.updateTodo(todoUpdated).then(res => {
			const index = _.findIndex(this.state.todos, { _id: todoUpdated._id })
			const todosUpdated = this.state.todos.slice(0)
			todosUpdated.splice(index, 1, todoUpdated)
			this.setState({ todos: todosUpdated })
		})
	}

	handlerDeleteTodo(todoId) {
		// TODO: handler exception
		todoApi.removeTodo(todoId).then(res => {
			let todoRemoved = _.remove(this.state.todos, todo => todo._id !== todoId)
			this.setState({ todos: todoRemoved })
		})
	}

	render() {
		return (
			<div className="main-frame container">
				<div className="main-frame__input-todo row-md-6">
					<FormTodo apiTodoCall={newTodo => this.handlerCreateTodo(newTodo)} />
				</div>
				<div className="main-frame__list-todo row-md-6">
					<TodoList
						{...this.state}
						handlerDeleteTodo={todoId => this.handlerDeleteTodo(todoId)}
						handlerUpdateTodo={todoUpdated =>
							this.handlerUpdateTodo(todoUpdated)
						}
					/>
				</div>
			</div>
		)
	}
}

export default MainFrame
