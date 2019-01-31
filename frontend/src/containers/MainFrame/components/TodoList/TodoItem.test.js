import React from 'react'
import TodoItem from './TodoItem'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<TodoItem />', () => {
	it('should display name properly', () => {
		const wrapper = shallow(<TodoItem todo={{ name: 'pika' }} />)
		expect(wrapper.find('.name-wrapper').text()).toBe('pika')
	})

	it('should haver display action buttons if not done or undefined', () => {
		const wrapper = shallow(<TodoItem todo={{ name: 'pika' }} />)
		expect(
			wrapper.find('.actions-button-wrapper > .button-wrapper')
		).toHaveLength(3)
	})

	it('should not display action buttons if done', () => {
		const wrapper = shallow(<TodoItem todo={{ name: 'pika', done: true }} />)
		expect(
			wrapper.find('.actions-button-wrapper > .button-wrapper')
		).toHaveLength(0)
	})

	it('should has class disable if done', () => {
		const wrapper = shallow(<TodoItem todo={{ name: 'pika', done: true }} />)
		expect(wrapper.find('.todo-item-container').prop('disabled')).toBe(true)
	})
})
