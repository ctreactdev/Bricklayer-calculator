import styled from "styled-components";
import { CCWrapper, Navbar } from "./components/organisms";
import { Route, Routes, Link } from "react-router-dom";

const StyledApp = styled.div`
  // Your style here
`;

const App = () => {
  return (
    <StyledApp>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home page!2</div>} />
        <Route path="/consumptionCalculator" element={<CCWrapper />} />
      </Routes>
    </StyledApp>
  );
};

export default App;
