import { configure } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.css'

const req = require.context('../src', true, /.stories.js$/)

const loadStories = () => {
	req.keys().forEach(file => req(file))
}
configure(loadStories, module)
