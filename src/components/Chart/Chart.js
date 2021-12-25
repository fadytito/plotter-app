import axios from "axios";
import React, { useCallback, useState } from "react";
import { ChartGraph, ChartInputs, Error, Loader } from "..";
import { useDataSource } from "../../hooks/useDataSource";

const getValues =
  ({ measureInputs, dimensionInput }) =>
  async () => {
    const { data } = await axios.post(
      "https://plotter-task.herokuapp.com/data",
      {
        measures: measureInputs,
        dimension: dimensionInput,
      }
    );
    return data;
  };

const formatData = (dimension, measure) => {
  const data = dimension?.values?.map((v, i) => ({
    [dimension.name]: v,
    [measure.name]: measure.values[i],
  }));
  return data;
};

export const Chart = () => {
  const [hasInputs, setHasInputs] = useState(false);
  const {
    fetchData,
    data: values,
    setData,
    isLoading,
    isError,
    error,
  } = useDataSource();

  const [dimension, ...measures] = values ?? [];

  const fillChartInputsHandler = useCallback(({ dimensionInput, measureInputs }) => {
    if (!dimensionInput || !measureInputs.length) {
      setData(null);
      setHasInputs(false);
      return;
    }
    setHasInputs(true);
    fetchData(getValues({ dimensionInput, measureInputs }));
  }, [fetchData]);

  return (
    <>
      <ChartInputs onFillChartInputs={fillChartInputsHandler} />

      {isLoading && <Loader>Your chart is being prepared...</Loader>}
      {isError && <Error>{error}</Error>}
      {!hasInputs && (
        <h2 className="center">
          Please drag & drop one dimension & at least one measure to build your
          chart!
        </h2>
      )}
      {measures?.map((measure) => (
        <div key={measure.name} style={{overflow: 'auto'}}>
          <ChartGraph
            data={formatData(dimension, measure)}
            dimensionLabel={dimension.name}
            measureLabel={measure.name}
          />
        </div>
      ))}
    </>
  );
};
