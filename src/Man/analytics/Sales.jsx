import React from 'react';
import CanvasJSReact from './canvasjs.react.js';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Sales() {
		const options = {
			animationEnabled: true,
			axisX: {
				valueFormatString: "MMM"
			},
			axisY: {
				title: "Sales (in INR)",
				prefix: "₹"
			},
			data: [{
				yValueFormatString: "₹#,###",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: [
					{ x: new Date(2022, 0), y: 25060 },
					{ x: new Date(2022, 1), y: 27980 },
					{ x: new Date(2022, 2), y: 42800 },
					{ x: new Date(2022, 3), y: 32400 },
					{ x: new Date(2022, 4), y: 35260 },
					{ x: new Date(2022, 5), y: 33900 },
					{ x: new Date(2022, 6), y: 40000 },
					{ x: new Date(2022, 7), y: 52500 },
					{ x: new Date(2022, 8), y: 32300 },
					{ x: new Date(2022, 9), y: 42000 },
					{ x: new Date(2022, 10), y: 37160 },
					{ x: new Date(2022, 11), y: 38400 }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
			/>
		</div>
		);
}
export default Sales;                              