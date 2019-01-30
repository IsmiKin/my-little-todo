import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

import './TodoList.css'

const TodoList = () => (
	<div className="TodoList-container">
		<ListGroup>
			<ListGroupItem className="d-flex justify-content-start">
				Cras justo odio
			</ListGroupItem>
			<ListGroupItem className="d-flex justify-content-start">
				Dapibus ac facilisis in
			</ListGroupItem>
			<ListGroupItem className="d-flex justify-content-start">
				Morbi leo risus
			</ListGroupItem>
		</ListGroup>
	</div>
)

export default TodoList
