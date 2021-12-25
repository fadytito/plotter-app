import React from "react";
import styled from "styled-components";

export const DropArea = () => {
  return (
    <DropAreaWrapper>
      <div>data</div>
    </DropAreaWrapper>
  );
};

const DropAreaWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  border: 1px solid black;
`;
