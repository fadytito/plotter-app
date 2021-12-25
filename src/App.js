import styled from "styled-components";
import "./App.css";
import { Chart, Columns } from "./components/index";

function App() {
  return (
    <div className="App">
      <ColumnsContainer>
        <h2>Columns</h2>
        <Columns />
      </ColumnsContainer>
      <ChartContainer>
        <Chart />
      </ChartContainer>
    </div>
  );
}

const ColumnsContainer = styled.div`
  border: 1px solid black;
  grid-row-end: 1;
  padding: 0 1rem;
`;

const ChartContainer = styled.div`
  overflow: hidden;
`;

export default App;
