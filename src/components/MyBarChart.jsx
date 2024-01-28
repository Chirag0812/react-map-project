import { BarChart,Bar } from 'recharts'
import React from 'react'
const Barch = () => {
  // bar charts shows the sales figure data 
    const data = [
      {value: 10 },
      {value: 12 },
      {value: 13 },
      {value: 14 },
      {value: 10 },
      {value: 17 },
      {value: 25 },
      {value: 18 },
    ];
  return (
    <div className="barchart">
    {/* title of bar chart  */}
      <div className="salestext">
        <h3 style={{ color: "#383874", fontWeight: "600" }}>
          <span style={{fontSize:"14px"}}>Sales Figures</span> 
          <br/><span>$10,430</span>
        </h3>
      </div>
      {/* bar chart or graph  */}
      <div className="graph" style={{ display: "flex" }}>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#FF708B" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <div className="underline"></div>
      </div>
    </div>
  );
}

export default Barch;
