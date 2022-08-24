import React from 'react';
import DatamapsIndia from 'react-datamaps-india'

function Map() {
  return (
      <DatamapsIndia
        regionData={{
          'Andhra Pradesh':{ value: 24 },
          'Arunanchal Pradesh':{ value: 24 },
          'Assam':{ value: 24 },
          'Bihar':{ value: 24 },
          'Chhattisgarh':{ value: 24 },
          'Goa':{ value: 21 },
          'Gujarat':{ value: 22 },
          'Haryana':{ value: 24 },
          'Himachal Pradesh':{ value: 24 },
          'Jharkhand':{ value: 26 },
          'Karnataka':{ value: 27 },
          'Kerala':{ value: 90 },
          'Madhya Pradesh':{ value: 24 },
          'Maharashtra':{ value: 24 },
          'Manipur':{ value: 24 },
          'Meghalaya':{ value: 59 },
          'Mizoram':{ value: 24 },
          'Nagaland':{ value: 59 },
          'Odisha':{ value: 59 },
          'Punjab':{ value: 24 },
          'Rajasthan':{ value: 24 },
          'Sikkim':{ value: 24 },
          'Tamil Nadu':{ value: 24 },
          'Telangana':{ value: 24 },
          'Tripura':{ value: 14 },
          'Uttarakhand':{ value: 24 },
          'Uttar Pradesh':{ value: 15 },
          'West Bengal':{ value: 17 },
          'Andaman & Nicobar Island':{ value: 24 },
          'Chandigarh':{ value: 24 },
          'Dadara & Nagar Haveli':{ value: 19 },
          'Daman & Diu':{ value: 20 },
          'Delhi':{ value: 59 },
          'Jammu & Kashmir':{ value: 25 },
          'Ladakh':{ value: 24 },
          'Lakshadweep':{ value: 24 },
          'Puducherry':{ value: 24 }
        }}
        hoverComponent={({ value }) => {
          return (
            <div>
              <p>{value.name}</p>
              <p>{value.value} orders</p>
            </div>
          )
        }}
        mapLayout={{
          startColor: '#b3f494',
          endColor: '#194006',
          hoverTitle: 'Count',
          noDataColor: '#f5f5f5',
          borderColor: '#8D8D8D',
          hoverBorderColor: '#8D8D8D',
          hoverColor: 'cyan',
          height: 70,
          weight: 30
        }}
      />
  );
}

export default Map;