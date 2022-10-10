import React from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";



export default function Graph(){
	const [apiData, setApiData] = React.useState([])
		const testapiData = [{date: '01.08.22, 16:34', temp: 24}, 
			{date: '01.08.22, 16:37', temp: 18},
			{date: '01.08.22, 16:40', temp: 20}];


	React.useEffect (() => {
        async function getData() {
            const res = await fetch("http://34.244.70.5:3000/entry")
            const data = await res.json()
		for (let i of data){
			setApiData(prevApiData => ([
				...prevApiData,
				{date: i.date,
            			temp: i.temp,
            			relay: i.relay}])

			)}
	}
	getData()
    	}, [])

		/*

		*/
       		
	console.log(apiData.temp)
	console.log(apiData.date)
	console.log(apiData)

	return (
	<div className="graph-container">
  		<LineChart className="linechart" width={800} height={500} data={apiData} margin={{ top: 50, right: 20, bottom: 5, left: -10 }}>
    		<Line type="monotone" dataKey="temp" stroke="#FFFFFF" />
    		<CartesianGrid stroke="#7F849C" strokeDasharray="5 5" />
    		<XAxis dataKey="date" stroke="#CDD6F4" />
    		<YAxis dataKey="temp" stroke="#CDD6F4"/>
    		<Tooltip/>
  		</LineChart>
  	</div>
	)
}