import React from 'react'

import { storiesOf } from '@storybook/react'
import TodoList from './TodoList'

storiesOf('TodoList', module)
	.add('with one todo', () => (
		<TodoList todos={[{ name: 'one item', done: false }]} />
	))
	.add('with disabled one todo', () => (
		<TodoList todos={[{ name: 'one item', done: true }]} />
	))
	.add('with no todos', () => <TodoList todos={[]} />)
