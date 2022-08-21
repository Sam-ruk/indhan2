import React from 'react';
import CanvasJSReact from './canvasjs.react.js';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Earning() {
        const options = {
            animationEnabled: true,
            subtitles: [{
                text: "Earnings in ₹",
                verticalAlign: "center",
                fontSize: 24,
                dockInsidePlotArea: true
            }],
            data: [{
                type: "doughnut",
                showInLegend: true,
                indexLabel: "{name}: {y}",
                yValueFormatString: "#,###'%'",
                dataPoints: [
                    { name: "Bio-CNG", y: 50 },
                    { name: "Bio-Ethanol", y: 31 },
                    { name: "Bio-Diesel", y: 19 },
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
export default Earning;                              