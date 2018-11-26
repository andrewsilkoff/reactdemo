import React from "react";

export default class Rooms extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}

	}

	render() {
	

		return (
				<ul className="list-group">
					<li className="list-group-item">
						<h3 className="list-group-item-heading">Chat Rooms</h3>
					</li>
					{this.props.children("Hola!!!")}
				</ul>
			)
	}
};

