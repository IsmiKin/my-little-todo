import React, { Component } from 'react'
import './App.css'

import Header from './Header'
import MainFrame from './MainFrame'
// import Footer from './Footer'

// <Footer />
class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<MainFrame />
			</div>
		)
	}
}

export default App
