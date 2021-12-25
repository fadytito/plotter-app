import React from "react";
import styled from "styled-components";

export const DropArea = ({ children, onDrop, droppedData }) => {
  return (
    <DropAreaWrapper onDrop={onDrop} onDragOver={(e) => e.preventDefault()} data-testid="droparea">
      {Array.isArray(droppedData)
        ? droppedData.map(data => <Data key={data}>{data}</Data>)
        : <Data>{droppedData}</Data>}
      {children}
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

const Data = styled.div`
  margin-right: 1rem
`;
