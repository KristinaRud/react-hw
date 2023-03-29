import React, { Component } from "react";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import "./styles/index.scss";

class App extends Component {
	state = {
		isOpenFirst: false,
		isOpenSecond: false,
	};

	handlerFirstModal = () => {
		this.setState((prev) => ({ ...prev, isOpenFirst: !prev.isOpenFirst }));
	};

	handlerSecondModal = () => {
		this.setState((prev) => ({
			...prev,
			isOpenSecond: !prev.isOpenSecond,
		}));
	};

	render() {
		const { isOpenFirst, isOpenSecond } = this.state;
		return (
			<div>
				<Button
					backgroundColor="red"
					text="Open first modal"
					onClick={this.handlerFirstModal}
				/>
				<Button
					backgroundColor="blue"
					text="Open second modal"
					onClick={this.handlerSecondModal}
				/>

				{isOpenFirst && (
					<Modal
						header="Do you want to delete this file?"
						closeButton={true}
						closeModal={this.handlerFirstModal}
						text="Once you delete this file, it won’t be possible to undo this action. Are you sure you want to delete it?"
						actions={
							<>
								<Button
									backgroundColor="RGBA(179, 56, 44, 1)"
									text="Ok"
									onClick={this.handlerFirstModal}
								/>
								<Button
									backgroundColor="RGBA(179, 56, 44, 1)"
									text="Cansel"
									onClick={this.handlerFirstModal}
								/>
							</>
						}
					/>
				)}
				{isOpenSecond && (
					<Modal
						header="Create file?"
						closeButton={false}
						closeModal={this.handlerSecondModal}
						text="Modal 2"
						actions={
							<>
								<Button
									backgroundColor="violet"
									text="Ok"
									onClick={this.handlerSecondModal}
								/>
								<Button
									backgroundColor="blue"
									text="Cansel"
									onClick={this.handlerSecondModal}
								/>
							</>
						}
					/>
				)}
			</div>
		);
	}
}

export default App;
