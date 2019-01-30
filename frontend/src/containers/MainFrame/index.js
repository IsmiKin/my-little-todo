import React from 'react'

import FormTodo from './components/FormTodo'
import TodoList from './components/TodoList'

class MainFrame extends React.Component {
	constructor() {
		super()
	}

	componentDidMount() {}

	render() {
		return (
			<div className="main-frame container justify-content-center">
				<div className="main-frame__input-todo row-md-4">
					<FormTodo />
				</div>
				<div className="main-frame__list-todo row-md-6">
					<TodoList />
				</div>
			</div>
		)
	}
}

export default MainFrame
