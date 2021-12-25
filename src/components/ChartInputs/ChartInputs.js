import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DropArea } from "..";

export const ChartInputs = ({ onFillChartInputs }) => {
  const [dimensionInput, setDimensionInput] = useState(null);
  const [measureInputs, setMeasureInputs] = useState([]);
  const firstRender = useRef(true)

  const dropHandler = (e) => {
    e.preventDefault();
    const { name, function: type } = JSON.parse(
      e.dataTransfer.getData("column")
    );
    if (type === "dimension") {
      setDimensionInput(name);
      return;
    }
    if (measureInputs.find((input) => input === name)) return;
    setMeasureInputs((prevMeasuresInputs) => [...prevMeasuresInputs, name]);
  };

  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false;
      return;
    };
    onFillChartInputs({ dimensionInput, measureInputs });
  }, [dimensionInput, measureInputs]);

  return (
    <>
      <GridContainer>
        Dimension
        <DropArea onDrop={dropHandler} droppedData={dimensionInput}>
          <ClearBtn onClick={() => setDimensionInput(null)}>Clear</ClearBtn>
        </DropArea>
      </GridContainer>
      <GridContainer>
        Measures
        <DropArea onDrop={dropHandler} droppedData={measureInputs}>
          <ClearBtn onClick={() => setMeasureInputs([])}>Clear</ClearBtn>
        </DropArea>
      </GridContainer>
    </>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem
`;

const ClearBtn = styled.button`
  background-color: black;
  color: white;
  margin-left: auto;
  border: none;
  padding: 10px;
  cursor: pointer;
`;
