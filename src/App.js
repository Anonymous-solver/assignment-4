import React, { Component } from "react";
import Profile from "./components/profile.component";
import Projects from "./components/projects.component";

class App extends Component {

	render() {
		return (
			<>
				<Profile></Profile>
				<hr />
				<Projects></Projects>

				{/* <button disabled = {this.makeDisable} style={this.btnStyle}>Click me</button> */}
				{/* {
          this.arr.map(name => {
            return (
              <li key={name}>{name}</li>
            )
          })
        } */}
			</>
		);
	}
}

export default App;
