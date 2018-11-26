import React from "react";

import "./style.css";


export default class Chats extends React.Component {
	constructor(){
		super();
		this.state = {
			pos: null,
		}	
	}

	componentDidMount(){
		console.log(google); /// Var from index script
		this.getPos();
	}

	getPos(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition( pos => {
				let posObj = {
					lat: pos.coords.latitude,
					lng: pos.coords.longitude,
				};
				this.setState({pos: posObj}, () => this.initMap());
			});
		}
	}

	initMap() {
		if(google){
			console.log("Google Ok");
			let map;
			map = new google.maps.Map(this.mapDiv, {
			    center: this.state.pos,
			    zoom: 18
			});

			let marker = new google.maps.Marker({position: this.state.pos, map: map});
		}

		else {
			setTimeout(this.initMap, 1000);
		}	
	}

	render(){
		return (
				<div className="container">
					<div className="col-xs-12 col-md-4 col-md-offset-4">
						<div ref={ mapDiv => {this.mapDiv = mapDiv} } className="mapDiv">
							
						</div>
					</div>				
				</div>

		)
	}
};

// let obj = {
// 	setData: function(){
// 		this.newText = "Hi";
// 	}
// };

// obj.setData();


