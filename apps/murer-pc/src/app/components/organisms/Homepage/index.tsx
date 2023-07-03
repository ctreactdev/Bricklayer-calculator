import React from "react";
import styled from "styled-components";

interface IHomepageWrap {}
const Wrapper = styled.div`
  background-color: #363636;
  .image-container {
    position: relative;
    text-align: center;
    color: white;
  }
  img {
    object-fit: cover;
    height: 600px;
    width: 100%;
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .homepagelinks {
    display: block;
    a {
      text-decoration: none;
      font-size: 24px;
      color: white;
    }
    a:hover {
      color: #ffd809;
    }
    div {
      margin-bottom: 20px;
    }
    link1 {
      font-size: 16px;
    }
    link2 {
      font-size: 16px;
    }
    link3 {
      font-size: 16px;
    }
  }
`;

const WorkersWrap: React.FunctionComponent<IHomepageWrap> = ({}) => {
  return (
    <Wrapper>
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1502343019212-cc6a09783255?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt=""
        />
        <div className="centered">
          <h1>Hos Nemt Håndværk finder du alle de værktøjer du mangler</h1>
          <div className="homepagelinks">
            <div>
              <a href="/consumptionCalculator" className="link1">
                - Benyt vores digitale værktøjskasse
              </a>
            </div>
            <div>
              <a href="/findWorker" className="link2">
                - Find din lokale håndvæker
              </a>
            </div>
            <div>
              <a href="/products" className="link3">
                - Læs mere om produkter fra udvalgte producenter
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default WorkersWrap;
