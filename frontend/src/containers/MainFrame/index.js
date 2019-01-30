import React from 'react'

import FormTodo from './components/FormTodo'
import TodoList from './components/TodoList'

class MainFrame extends React.Component {
	constructor() {
		super()
		this.state = {
			todos: [{ name: 'pika', done: false }, { name: 'char', done: false }]
		}
	}

	componentDidMount() {}

	render() {
		return (
			<div className="main-frame container">
				<div className="main-frame__input-todo row-md-6">
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
