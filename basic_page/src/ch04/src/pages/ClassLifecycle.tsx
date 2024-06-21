import { Component } from "react";

export default class ClassLifecycle extends Component {
	state = {
		today :new Date(),
		intervalId : null as unknown as NodeJS.Timer
	}

	componentDidMount() {
		const intervalId = setInterval(() => this.setState({today: new Date()}), 1000)
		this.setState({intervalId})
	}

	componentWillUnmount() {
		clearInterval(this.state?.intervalId)
	}

	render() {
		const {today} = this.state
		return (
			<>
				<p> {today.toLocaleTimeString()} </p>
				<p> {today.toLocaleDateString()} </p>
			</>
		)
	}
}