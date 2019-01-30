import React, { Component } from 'react'
import './App.css'

import Header from './Header'
import MainFrame from './MainFrame'
import Footer from './Footer'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<MainFrame />
				<Footer />
			</div>
		)
	}
}

export default App
