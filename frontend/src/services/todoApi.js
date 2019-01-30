const BASE_URL = `http://${process.env.REACT_APP_API_HOST}:${
	process.env.REACT_APP_API_PORT
}/todos`

const getAllTodos = () => {
	return fetch(BASE_URL).then(res => res.json())
}

module.exports = {
	getAllTodos
}
