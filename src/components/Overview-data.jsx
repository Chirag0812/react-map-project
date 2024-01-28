import React,{useState} from 'react'
import Chart from 'react-apexcharts'

// Bubble chart to show monthly earning & engaging users
const AxisChart = () => {

    const [state] = useState({
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept","Oct","Nov","Dec"],
        },
      },
      series: [
        {
          name: "series-1",
          data: [10, 40, 55, 50, 24, 60, 70, 87,55,11,28,65],
        },
      ],
    });
  return <div className="bubblechart">
  {/* bubble chart using apexchart */}
 <Chart
              options={state.options}
              series={state.series}
              type="scatter"
              width="800"
              height={"100%"}
            />
  </div>;
}

export default AxisChart
