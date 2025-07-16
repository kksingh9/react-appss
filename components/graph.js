"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import with SSR disabled
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const LineChart = () => {
  const series = [
    {
      name: "Performance",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 320,
    },
    title: {
      text: "Performance",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineChart;
