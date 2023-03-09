import React from "react";
import ReactApexChart from "react-apexcharts";

const data = {
  series: [42, 47, 52, 58, 65],
  options: {
    chart: {
      width: 380,
      type: "polarArea",
    },
    labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
    fill: {
      colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#5C04CB"],
      opacity: 1,
    },

    stroke: {
      width: 1,
      colors: undefined,
    },
    yaxis: {
      show: false,
    },
    title: {
      text: "Biểu đồ thống kê doanh thu tháng",
      align: "center",
      margin: 10,
      floating: false,
      style: {
        color: "#fff",
        fontFamily: "Nunito",
        fontWeight: "400",
        fontSize: "20px",
      },
    },
    legend: {
      position: "bottom",
      markers: {
        fillColors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#5C04CB"],
      },
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: "light",
        shadeIntensity: 0.6,
      },
    },
  },
};

const PieChart = () => {
  return (
    <ReactApexChart
      series={data.series}
      options={data.options}
      type="polarArea"
      height={400}
    />
  );
};

export default PieChart;
