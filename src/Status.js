import React from "react"

export default function Status(props){
	console.log(props)
	return (
		<div className="dash-itembox_status">
			<h1>Connection</h1>
			<div className="status_list_container">
				<ul className="status_list">
					<li>Arduino:</li>
					<li>Database:</li>
					<li>Server:</li>
				</ul>
				<ul className="status_list_status">
					<li className=
						{props.arduino ? "status_ok" : "status_notok"}>
						{props.arduino ? "OK" : "!!!"}
						</li>
					<li className=
						{props.server ? "status_ok" : "status_notok"}>{props.server ? "OK" : "!!!"}</li>
					<li className=
						{props.db ? "status_ok" : "status_notok"}>{props.db ? "OK" : "!!!"}</li>
				</ul>
			</div>
		</div>
		)
}