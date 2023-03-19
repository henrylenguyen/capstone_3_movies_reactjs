import React from "react";
import ReactApexChart from "react-apexcharts";

const chartData = {
  series: [
    {
      name: "Dữ liệu 1",
      type: "line",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 12, 45],
    },
    {
      name: "Dữ liệu 2",
      type: "area",
      data: [20, 30, 25, 40, 39, 50, 60, 81, 115, 324, 34, 67],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2],
      curve: "smooth",
    },
    title: {
      text: "Biểu đồ thống kê trong năm",
      align: "left",
      style: {
        color: "#fff",
        fontFamily: "Nunito",
        fontWeight: "400",
        fontSize: "20px",
      },
    },
    colors: ["rgba(253, 121, 179, 1)", "rgba(132, 64, 238, 0.66)"],
    xaxis: {
      categories: [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12",
      ],
      labels: {
        style: {
          colors: "#fff",
          fontSize: "12px",
        },
      },
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#fff",
        },
        labels: {
          style: {
            colors: "#fff",
          },
        },
        title: {
          text: "Dữ liệu 1",
          style: {
            color: "#fff",
            fontFamily: "Nunito",
            fontWeight: "400",
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      {
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#fff",
          fontFamily: "Nunito",
          fontWeight: "400",
        },
        labels: {
          style: {
            colors: "#fff",
            fontFamily: "Nunito",
            fontWeight: "400",
          },
        },
        title: {
          text: "Dữ liệu 2",
          style: {
            color: "#fff",
            fontFamily: "Nunito",
            fontWeight: "400",
          },
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: "dark",
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " đơn vị";
          }
          return y;
        },
      },
    },
    legend: {
      horizontalAlign: "center",
      offsetY: 10,
      markers: {
        width: 10,
        height: 10,
        radius: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        fontSize: "12px",
        fontFamily: "Open Sans, sans-serif",
        fontWeight: "normal",
      },
    },
  },
};

const ColumnChart = () => {
  return (
    <ReactApexChart
      series={chartData.series}
      options={chartData.options}
      type="line"
      height={400}
    ></ReactApexChart>
  );
};

export default ColumnChart;
