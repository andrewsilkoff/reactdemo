import React from "react";
import GoogleMapReact from 'google-map-react';
import { Sparklines, SparklinesLine, SparklinesBars } from "react-sparklines";
import Rooms from "./rooms";

import "./style.css";

function MyMarker(props){
	return (<span className="glyphicon glyphicon-lamp"></span>)
}

export default class Chats extends React.Component {
	constructor(){
		super();
		this.state = {
			pos: null,
			linesData: [10, 50, 30, 15, 40, 90, 10, 50, 30, 15, 40, 90],
		}	
	}

	componentDidMount(){
		//console.log(google); /// Var from index script
		this.getPos();
	}

	getPos(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition( pos => {
				let posObj = {
					lat: pos.coords.latitude,
					lng: pos.coords.longitude,
				};
				this.setState({pos: posObj}, () => console.log(this.state));
			});
		}
	}

	genLi(text){
		return (<li className="list-group-item">
								<p className="list-group-item-text">
									{text}
								</p>
							</li>)
	}

	render(){

		let myMap;
		if(this.state.pos){
			myMap = (<GoogleMapReact
								bootstrapURLKeys={{
									key: "AIzaSyBoPX3J0F_VGyr4SgTx-RKBMY6lOXvF37M",
									lang: "en",
								}}
								defaultCenter={this.state.pos}
								defaultZoom={18}
							 >
							 <MyMarker 
							 	text={"We are here"}
							 	lat={this.state.pos.lat}
            					lng={this.state.pos.lng}
							  />
					</GoogleMapReact>

					)
		}

		return (
				<div className="container">
					<div className="col-xs-12 col-md-4 col-md-offset-4">
						<div className="mapDiv">
							{myMap}
						</div>
						<Rooms>
							{this.genLi}
						</Rooms>
						<div style={{height: 300}}>
							<Sparklines data={this.state.linesData}>
								<SparklinesLine color="green" />
							</Sparklines>
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


