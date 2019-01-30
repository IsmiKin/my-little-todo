import React from 'react'

class MainFrame extends React.Component {
	constructor() {
		super()
	}

	componentDidMount() {}

	render() {
		return (
			<div className="main-frame d-flex flex-column justify-content-center">
				<div className="main-frame__input-todo" />
				<div className="main-frame__list-todo" />
			</div>
		)
	}
}

export default MainFrame
