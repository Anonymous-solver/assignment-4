import React, { Component } from "react";
import Project from "./project.component";
class Projects extends Component {
	state = {
		projects: [
			"Working at Brain Station-23",
			"Worked at GHURI",
			"Worked at MindOrbitals",
			"Worked for Self",
		],
	};
	handleDeleteProject = (name) => {
		console.log(name);
		const projects = this.state.projects.filter(
			(project) => project !== name
		);
		this.setState({ projects });
	};
	render() {
		return (
			<>
				<h1>My Portfolio</h1>
				{this.state.projects.map((name, index) => {
					return (
						<Project
							index={index}
							key={name}
							onDeleteProject={this.handleDeleteProject}
							name={name}
						></Project>
					);
				})}
			</>
		);
	}
}

export default Projects;
