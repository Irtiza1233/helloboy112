import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {	
	render() {
		const chartWidth = "44%";
		const chartHeight = "300px"; 
		
		const options = {
			animationEnabled: true,
			theme: "light2",
			title: {
			  text: "Top-Rated Courses",
			},
			axisX: {
			  title: "",
			  reversed: true,
			},
			axisY: {
			  title: "Number of Ratings",
			  includeZero: true,
			  labelFormatter: addSymbols, 
			},
			data: [
			  {
				type: "bar",
				dataPoints: [
				  { y: 280, label: "Web Dev" },
				  { y: 180, label: "SEO Basics" },
				  { y: 80, label: "Data Science" },
				  { y: 56, label: "JS" },
				  { y: 37, label: "Python" },
			
				],
			  },
			],
		  };
		  
		  // Define the addSymbols function if needed
		  function addSymbols(e) {
			// Implement the label formatting logic here, if necessary
			return e.value;
		  }
		  

		  
		  const coursesOptions = options;
		  
		const studentsOptions = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2",
			title: {
			  text: "Number of Students per Course",
			},
			axisY: {
			  includeZero: true,
			},
			data: [{
			  type: "column",
			  indexLabelFontColor: "#5A5757",
			  indexLabelPlacement: "outside",
			  dataPoints: [
				{ label: "Web Dev", y: 90, indexLabel: "Highest" },
				{ label: "JS", y: 42 },
				{ label: "SEO Basics", y: 65 },
				{ label: "Data Science", y: 55 },
			
				{ label: "iOS Dev", y: 45 },
				{ label: "Blockchain", y: 58 },
				{ label: "Python", y: 35 },
			  ]
			}]
		  };
		  

		const attendanceOptions = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Attendence"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 18, label: "Absent" },
					{ y: 49, label: "Present" },
				
					{ y: 19, label: "Leave" }
				]
			}]
		}
		
		return (
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
			<div className="box" style={{ width: chartWidth, height: chartHeight, overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}>
			  <h2>Courses</h2>
			  <CanvasJSChart options={coursesOptions} />
			</div>
			<div className="box" style={{ width: chartWidth, height: chartHeight, overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}>
			  <h2>Students</h2>
			  <CanvasJSChart options={studentsOptions} />
			</div>
			<div className="box" style={{ width: chartWidth, height: chartHeight, overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}>
			  <h2>Attendance</h2>
			  <CanvasJSChart options={attendanceOptions} />
			</div>
		  </div>
		);
	}
}

export default App;



