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
		this.state = {
			...INITIAL_STATE,
			newTodo: this.props.todo ? this.props.todo : INITIAL_STATE.newTodo
		}
	}

	handleChange(value) {
		this.setState({ newTodo: { ...this.state.newTodo, name: value } })
	}

	resetState() {
		const initialState = {
			...INITIAL_STATE,
			newTodo: { ...INITIAL_STATE.newTodo, _id: this.props.todoId }
		}
		this.setState(initialState)
	}

	handleSubmit(e) {
		e.preventDefault()
		this.props.apiTodoCall(this.state.newTodo)
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
