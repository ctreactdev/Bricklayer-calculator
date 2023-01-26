import styled from "styled-components";
import { CCWrapper, Navbar, WorkersWrap } from "./components/organisms";
import { FindWorkerWrapper } from "./components/pages";
import { Route, Routes, Link } from "react-router-dom";

const StyledApp = styled.div``;

const App = () => {
  return (
    <StyledApp>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        {/* <Route path="/workers" element={<WorkersWrap />} /> */}
        <Route path="/findWorker" element={<FindWorkerWrapper />} />
        <Route path="/consumptionCalculator" element={<CCWrapper />} />
      </Routes>
    </StyledApp>
  );
};

export default App;
