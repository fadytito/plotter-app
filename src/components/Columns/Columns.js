import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Error, Loader } from "..";
import { useDataSource } from "../../hooks/useDataSource";

const getColumns = async () => {
  const {data} = await axios.get(
    "https://plotter-task.herokuapp.com/columns"
  );
  return data;
};

export const Columns = () => {
  const { fetchData, data: columns, isIdle, isLoading, isError, error  } = useDataSource();

  useEffect(() => {
    fetchData(getColumns)
  }, [getColumns]);

  const drag = (column, e) => {
    e.dataTransfer.setData("column", JSON.stringify(column));
  }

  if (isIdle || isLoading) {
    return <Loader>Loading...</Loader>;
  }

  if (isError) {
    return <Error>{error}</Error>;
  }

  return (
      <ul>
        {columns.map((c, i) => (
          <ColumnsListItem
            key={c.name}
            draggable="true"
            onDragStart={(e) => drag(c, e)}
            data-testid={`column-item-${i}`}
          >
            {c.name} ({c.function})
          </ColumnsListItem>
        ))}
      </ul>
  );
};

const ColumnsListItem = styled.li`
  cursor: grab;
  padding: .5rem 0
`;
