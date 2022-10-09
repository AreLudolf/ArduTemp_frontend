import React from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";



export default function Graph(){
	const data = [{date: '01.08.22, 16:34', Celsius: 24}, 
			{date: '01.08.22, 16:37', Celsius: 18},
			{date: '01.08.22, 16:40', Celsius: 20}];

	return (
	<div className="graph-container">
  		<LineChart className="linechart" width={800} height={500} data={data} margin={{ top: 50, right: 20, bottom: 5, left: -10 }}>
    		<Line type="monotone" dataKey="Celsius" stroke="#FFFFFF" />
    		<CartesianGrid stroke="#7F849C" strokeDasharray="5 5" />
    		<XAxis dataKey="date" stroke="#CDD6F4" />
    		<YAxis dataKey="Celsius"stroke="#CDD6F4"/>
    		<Tooltip/>
  		</LineChart>
  	</div>
	)
}