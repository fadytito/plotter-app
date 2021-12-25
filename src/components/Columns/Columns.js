import React from "react";
import styled from "styled-components";

export const Columns = () => {
  return (
    <ul>
      <ColumnsListItem>column item</ColumnsListItem>
    </ul>
  );
};

const ColumnsListItem = styled.li`
  padding: 0.5rem 0;
`;
