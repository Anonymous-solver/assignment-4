import React, { Component } from "react";
class Project extends Component {
	render() {
		// console.log(this.props.index)
		return (
			<>
				<h3>{this.props.name}</h3>
				<button
					onClick={() => this.props.onDeleteProject(this.props.name)}
				>
					Remove
				</button>
				<hr />
			</>
		);
	}
}

export default Project;
