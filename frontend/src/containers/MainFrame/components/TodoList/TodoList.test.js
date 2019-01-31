import React from 'react'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<TodoList />', () => {
	it('should display Jumbotron if no todos', () => {
		const wrapper = shallow(<TodoList todos={[]} />)
		expect(wrapper.exists('.TodoList-component__empty-todos-message')).toBe(
			true
		)
		expect(
			wrapper
				.find('.TodoList-component__empty-todos-message h1')
				.text('No item to display.. try adding one!')
		)
	})

	it('should haver only one ListGroup', () => {
		const wrapper = shallow(
			<TodoList todos={[{ name: 'lala', done: false, _id: 1 }]} />
		)
		expect(wrapper.find('.TodoList-component__list-group')).toHaveLength(1)
	})

	it('should display all the todos', () => {
		const wrapper = shallow(
			<TodoList
				todos={[
					{ name: 'lala', done: false, _id: 1 },
					{ name: 'lolo', done: true, _id: 2 }
				]}
			/>
		)

		expect(wrapper.find(TodoItem)).toHaveLength(2)
	})
})
