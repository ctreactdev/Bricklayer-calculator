import React, { useState } from "react";
import styled from "styled-components";
import {
  BondingTileAndClinkerWrap,
  DryMortarsAndSheetGlueWrap,
  JointingTilesAndClinkerWrap,
} from "apps/murer-pc/src/app/components/organisms";

interface ICCWrapper {}
const Wrapper = styled.div`
  display: flex;
  innerNavBtn {
    width: 100%;
  }
  button p {
    font-weight: 700;
    font-size: 1.3em;
  }
  button p:hover {
    color: #ffd809;
  }
  h1 {
    margin-bottom: 1em;
  }
`;

const CCWrapper: React.FunctionComponent<ICCWrapper> = ({}) => {
  const [showCC, setShowCC] = useState("");
  const renderCC = () => {
    switch (showCC) {
      case "BondingTileAndClinker":
        return <BondingTileAndClinkerWrap />;
      case "DryMortarsAndSheetGlue":
        return <DryMortarsAndSheetGlueWrap />;
      case "JointingTilesAndClinker":
        return <JointingTilesAndClinkerWrap />;
      case "":
        return null;
      default: {
        break;
      }
    }
  };
  return (
    <Wrapper>
      <div className="innerNav">
        <h1>Beregner</h1>
        <h4>Vælg en beregnings type</h4>
        <div className="innerNavBtn">
          <button onClick={() => setShowCC("BondingTileAndClinker")}>
            <p>- Klæbning af fliser og klinker</p>
          </button>
        </div>
        <div className="innerNavBtn">
          <button onClick={() => setShowCC("DryMortarsAndSheetGlue")}>
            <p>- Tørmørtler og pladelim</p>
          </button>
        </div>
        <div className="innerNavBtn">
          <button onClick={() => setShowCC("JointingTilesAndClinker")}>
            <p>- Fugning af fliser og klinker</p>
          </button>
        </div>
      </div>
      <div className="CCWrapperForm">
        <div className="innerFormFields">
          <h1>Forbrugsberegner</h1>
          {renderCC()}
        </div>
      </div>
    </Wrapper>
  );
};

export default CCWrapper;
