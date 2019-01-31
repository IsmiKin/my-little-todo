import React from 'react'
import { Form, Input, FormGroup, FormFeedback } from 'reactstrap'

import './FormTodo.css'

const INITIAL_STATE = {
	newTodo: {
		name: '',
		done: false
	}
}

class FormTodo extends React.Component {
	constructor(props) {
		super(props)
		this.state = INITIAL_STATE
	}

	handleChange(value) {
		this.setState({ newTodo: { ...this.state.newTodo, name: value } })
	}

	resetState() {
		this.setState(INITIAL_STATE)
	}

	handleSubmit(e) {
		e.preventDefault()
		this.props.createTodoCall(this.state.newTodo)
		this.resetState()
	}

	render() {
		return (
			<div className="FormTodo">
				<Form onSubmit={e => this.handleSubmit(e)}>
					<FormGroup>
						<Input
							type="newTodo"
							name="newTodo"
							id="newTodoInput"
							placeholder="Write a new Todo name"
							required
							value={this.state.newTodo.name}
							onChange={e => this.handleChange(e.target.value)}
						/>
						<FormFeedback>The name can not be empty</FormFeedback>
					</FormGroup>
				</Form>
			</div>
		)
	}
}

export default FormTodo
