import React from 'react'
import { Form, Input } from 'reactstrap'

import './FormTodo.css'

class FormTodo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			newTodo: ''
		}
	}

	handleChange(value) {
		this.setState({ newTodo: value })
	}

	handleSubmit(e) {
		e.preventDefault()
		this.props.createTodoCall({ name: this.state.newTodo, done: false })
		this.setState({ newTodo: '' })
	}

	render() {
		return (
			<div className="FormTodo">
				<Form onSubmit={e => this.handleSubmit(e)}>
					<Input
						type="newTodo"
						name="newTodo"
						id="newTodoInput"
						placeholder="Write a new Todo name"
						value={this.state.newTodo}
						onChange={e => this.handleChange(e.target.value)}
					/>
				</Form>
			</div>
		)
	}
}

export default FormTodo
