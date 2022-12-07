import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
import logo from "./logo.png";
const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: #363636;
  display: flex;
  .navLogo {
    height: 100%;
  }
  a:link {
    display: flex;
    align-items: center;
    padding-left: 2em;
    font-size: 1.2em;
    list-style: none;
    text-decoration: none;
  }
  a {
    // color: #212529;
    color: #f1f2f2;
  }
  a:hover {
    color: #ffd809;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <img className="navLogo" src={logo}></img>
      </Link>
      <Link to="/findWorker">Find Håndværker</Link>
      <Link to="/about">Om virksomheden</Link>
      <Link to="/products">Produkter</Link>
      <Link to="/consumptionCalculator">Forbrugsberegner</Link>
    </Wrapper>
  );
};

export default Navbar;
