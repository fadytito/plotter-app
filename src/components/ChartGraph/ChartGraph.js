import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

export const ChartGraph = ({ data, dimensionLabel, measureLabel }) => {
  return (
      <LineChart
        width={1800}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis
          dataKey={dimensionLabel}
          label={{
            value: dimensionLabel,
            position: "insideBottom",
            offset: -15,
          }}
        />
        <YAxis
          label={{ value: measureLabel, angle: -90, position: "insideLeft" }}
          width={100}
        />
        <Tooltip />
        <Line
          type="linear"
          dataKey={measureLabel}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          isAnimationActive={false}
        />
      </LineChart>
    
  );
};
