const BASE_URL = `http://${process.env.REACT_APP_API_HOST}:${
	process.env.REACT_APP_API_PORT
}/todos`

const COMMON_HEADERS = {
	Accept: 'application/json',
	'Content-Type': 'application/json'
}

const getAllTodos = () => {
	return fetch(BASE_URL).then(res => res.json())
}

const createTodo = newTodo => {
	return fetch(BASE_URL, {
		method: 'POST',
		headers: COMMON_HEADERS,
		body: JSON.stringify(newTodo)
	}).then(res => res.json())
}

const removeTodo = todoId => {
	return fetch(`${BASE_URL}/${todoId}`, {
		method: 'DELETE'
	})
}

module.exports = {
	getAllTodos,
	createTodo,
	removeTodo
}
