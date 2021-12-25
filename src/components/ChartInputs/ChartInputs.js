import React from "react";
import styled from "styled-components";
import { DropArea } from '..';

export const ChartInputs = () => {
  return (
    <>
      <GridContainer>
        Dimension
        <DropArea />
      </GridContainer>
      <GridContainer>
        Measures
        <DropArea />
      </GridContainer>
    </>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;
