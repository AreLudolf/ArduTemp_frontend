import React from "react"

export default function Temp(props){
	console.log(props)
	return (
		<div className="dash-itembox_status">
			<h1>Temperature</h1>
			<div className="grid_container">
				<div className="status_list">Current:</div>
				<div className="temp_current">{props.current}°C</div>
				<div className="status_list">Avg.:</div>
				<div className="temp_list">{props.avg}°C</div>
				<div className="status_list">Target:</div>
				<div className="temp_list">{props.target}°C</div>
				<div className="status_list">Heat:</div>
				<div 
				className={props.onoff ? "heaton" : "heatoff"}>{props.onoff ? "ON" : "OFF"}</div>
			</div>

		</div>
		)
}
