import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import './Map.css';

/**
* Courtesy: https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json
* Looking topojson for other countries/world? 
* Visit: https://github.com/markmarkoh/datamaps
*/
const INDIA_TOPO_JSON = require('./india.topo.json');

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937] // always in [East Latitude, North Longitude]
};

const COLOR_RANGE = [
  '#adf295',
  '#95ef75',
  '#7ceb55',
  '#63e735',
  '#4ce019',
  '#41c015',
  '#36a012',
  '#2b800e',
  '#20600a'
];

const DEFAULT_COLOR = '#EEE';

const getRandomInt = () => {
  return parseInt(Math.random() * 100);
};

const geographyStyle = {
  default: {
    outline: 'none'
  },
  hover: {
    fill: '#ccc',
    transition: 'all 250ms',
    outline: 'none'
  },
  pressed: {
    outline: 'none'
  }
};

const getHeatMapData = (x) => {
  return [
    { id: 'AP', state: 'Andhra Pradesh', value: x.AP },
    { id: 'AR', state: 'Arunachal Pradesh', value: x.AN },
    { id: 'AS', state: 'Assam', value: x.AS },
    { id: 'BR', state: 'Bihar', value: x.BH },
    { id: 'CT', state: 'Chhattisgarh', value: x.CG },
    { id: 'GA', state: 'Goa', value: x.GO },
    { id: 'GJ', state: 'Gujarat', value: x.GJ },
    { id: 'HR', state: 'Haryana', value: x.HY },
    { id: 'HP', state: 'Himachal Pradesh', value: x.HP },
    { id: 'JH', state: 'Jharkhand', value: x.JH },
    { id: 'KA', state: 'Karnataka', value: x.KR },
    { id: 'KL', state: 'Kerala', value: x.KE },
    { id: 'MP', state: 'Madhya Pradesh', value: x.MP },
    { id: 'MH', state: 'Maharashtra', value: x.MH },
    { id: 'MN', state: 'Manipur', value: x.MN },
    { id: 'ML', state: 'Meghalaya', value: x.MG },
    { id: 'MZ', state: 'Mizoram', value: x.MZ },
    { id: 'NL', state: 'Nagaland', value: x.NG },
    { id: 'OD', state: 'Odisha', value: x.OD },
    { id: 'PB', state: 'Punjab', value: x.PJ },
    { id: 'RJ', state: 'Rajasthan', value: x.RJ },
    { id: 'SK', state: 'Sikkim', value: x.SK },
    { id: 'TN', state: 'Tamil Nadu', value: x.TN },
    { id: 'TS', state: 'Telangana', value: x.TG },
    { id: 'TR', state: 'Tripura', value: x.TP },
    { id: 'UK', state: 'Uttarakhand', value: x.UK },
    { id: 'UP', state: 'Uttar Pradesh', value: x.UP },
    { id: 'WB', state: 'West Bengal', value: x.WB },
    { id: 'AN', state: 'Andaman and Nicobar Islands', value: x.AD },
    { id: 'CH', state: 'Chandigarh', value: x.CH },
    { id: 'DN', state: 'Dadra and Nagar Haveli', value: x.DN },
    { id: 'DD', state: 'Daman and Diu', value: x.DD },
    { id: 'DL', state: 'Delhi', value: x.DE },
    { id: 'JK', state: 'Jammu and Kashmir', value: x.JK },
    { id: 'LA', state: 'Ladakh', value: x.JK },
    { id: 'LD', state: 'Lakshadweep', value: x.LD },
    { id: 'PY', state: 'Puducherry', value: x.PU }
  ];
};

function SellerMap() {
  const [data, setData] = useState(getHeatMapData({"AP":0,"AD":0,"AN":0,"AS":0,"BH":0,"CH":0,"CG":0,"DN":0,"DD":0,"DE":0,"LD":0,"PU":0,"GO":0,"GJ":0,"HY":0,"HP":0,"JK":0,"JH":0,"KR":0,"KE":0,"MP":0,"MH":0,"MN":0,"MG":0,"MZ":0,"NG":0,"OD":0,"PJ":0,"RJ":0,"SK":0,"TN":0,"TG":0,"TP":0,"UP":0,"UK":0,"WB":0}));

  const gradientData = {
    fromColor: COLOR_RANGE[0],
    toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
    min: 0,
    max: data.reduce((max, item) => (item.value > max ? item.value : max), 0)
  };

  const colorScale = scaleQuantile()
    .domain(data.map(d => d.value))
    .range(COLOR_RANGE);

  useEffect(() => { 
    fetch(`http://localhost:4000/supply`,{method: 'GET'})
      .then(async (resp)=>{
        var x = await resp.json();
        setData(getHeatMapData(x));
        console.log(x);
      });
  },[]);

  return (
    <div className="full-width-height container">
      <h1 className="no-margin center">Statewise Supply</h1>
        <ComposableMap
          projectionConfig={PROJECTION_CONFIG}
          projection="geoMercator"
          width={600}
          height={220}
          data-tip=""
          style={{position:"inherit"}}
        >
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map(geo => {
                const current = data.find(s => s.id === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                    style={geographyStyle}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
    </div>
  );
}

export default SellerMap;