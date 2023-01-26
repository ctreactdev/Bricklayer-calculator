import React, { useState, useEffect, MouseEvent } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { SubmitButton } from "@murer-nx/ui";
import { WorkersWrap } from "apps/murer-pc/src/app/components/organisms";

const Wrapper = styled.div`
  .laborCard {
    background-image: url("https://cdn.vox-cdn.com/thumbor/af5AossDQ_fCaHEylrCXwk6jbqI=/0x0:4000x2667/920x613/filters:focal(1680x1014:2320x1654):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67812464/Carpentry_Gift_Guide.0.0.jpeg");
    height: 80px;
    width: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-size: cover;
    h1 {
      color: #000;
      margin: 0;
    }
  }
`;

interface IFindWorker {}

const ChooseTypelabor: React.FunctionComponent<IFindWorker> = ({}) => {
  const [laborCardChosen, setLaborCardChosen] = useState(false);

  const handleCardSearch = (e: MouseEvent): void => {
    e.preventDefault();
    setLaborCardChosen(true);
  };

  return (
    <Wrapper>
      {!laborCardChosen ? (
        <div className="laborCards">
          <div className="laborCard">
            <button onClick={handleCardSearch}>Tømrer</button>
          </div>
        </div>
      ) : null}
      {laborCardChosen ? (
        <div className="zipcodeCards">
          <div className="zipcodeCard">zipcard</div>
        </div>
      ) : null}
    </Wrapper>
  );
};

export default ChooseTypelabor;
