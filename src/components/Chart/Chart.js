import React from "react";
import { ChartGraph, ChartInputs } from "..";

export const Chart = () => {

  const fillChartInputsHandler = ({ dimensionInput, measureInputs }) => {
    console.log({dimensionInput, measureInputs});
  };
  return (
    <>
      <ChartInputs onFillChartInputs={fillChartInputsHandler} />
      <div>
        <ChartGraph />
      </div>
    </>
  );
};
