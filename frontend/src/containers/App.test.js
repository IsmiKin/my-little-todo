import React from 'react'
import App from './App'
import Header from './Header'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<App />', () => {
	const wrapper = shallow(<App />)
	it('should haver a class wrapper', () => {
		expect(wrapper.find('.App').length).toBe(1)
	})

	it('should haver a class Header', () => {
		expect(wrapper.find(Header).length).toBe(1)
	})
})
