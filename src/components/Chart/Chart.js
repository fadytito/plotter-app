import React from "react";
import { ChartGraph, ChartInputs } from "..";

export const Chart = () => {
  return (
    <>
      <ChartInputs/>
      <div>
        <ChartGraph />
      </div>
    </>
  );
};
