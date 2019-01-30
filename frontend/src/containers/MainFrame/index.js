import React from 'react'

import FormTodo from './components/FormTodo'
import TodoList from './components/TodoList'

class MainFrame extends React.Component {
	constructor() {
		super()
		this.state = { todos: ['pika', 'char'] }
	}

	componentDidMount() {}

	render() {
		return (
			<div className="main-frame container justify-content-center">
				<div className="main-frame__input-todo row-md-4">
					<FormTodo />
				</div>
				<div className="main-frame__list-todo row-md-6">
					<TodoList {...this.state} />
				</div>
			</div>
		)
	}
}

export default MainFrame
