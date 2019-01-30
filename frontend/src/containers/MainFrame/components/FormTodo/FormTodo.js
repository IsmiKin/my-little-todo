import React from 'react'
import { Form, Input } from 'reactstrap'

import './FormTodo.css'

const FormTodo = () => (
	<div className="FormTodo">
		<Form>
			<Input
				type="newTodo"
				name="newTodo"
				id="newTodoInput"
				placeholder="Write a new Todo name"
			/>
		</Form>
	</div>
)

export default FormTodo
