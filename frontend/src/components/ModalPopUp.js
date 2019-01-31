import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class ModalPopUp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			modal: false
		}

		this.toggle = this.toggle.bind(this)
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		})
	}

	render() {
		return (
			<span>
				<Button color={this.props.color} onClick={this.toggle}>
					{this.props.buttonLabel}
				</Button>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
					<ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
					<ModalBody>{this.props.children}</ModalBody>
					<ModalFooter>
						<Button color="secondary" onClick={this.toggle}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</span>
		)
	}
}

export default ModalPopUp
