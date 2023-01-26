import React from "react";
import styled from "styled-components";
import { WorkersData } from "libs/service";
import WorkerRating from "./WorkerRating";

interface IWorkersWrap {
  searchInput?: string;
  submitted?: boolean;
}
const Wrapper = styled.div``;

const WorkersWrap: React.FunctionComponent<IWorkersWrap> = ({
  searchInput,
  submitted,
}) => {
  const data = WorkersData.workers;
  const filtedByZipCodeData = [];

  if (submitted) {
    const filtedDataByZipCode = data.filter(
      (worker) => worker.zipcode === searchInput
    );
    filtedByZipCodeData.push(...filtedDataByZipCode);
  }

  // const NORTH_COPENHAGEN = 1;
  // const SOUTH_COPENHAGEN = 2;
  // const NORTH_ZEELAND = 3;
  // const ZEELAND = 4;
  // const FYN = 5;
  // const SOUTH_JUTLAND = 6;
  // const MID_JUTLAND = 7;
  // const NORTH_MID_JUTLAND = 8;
  // const NORTH_JUTLAND = 9;

  return (
    <Wrapper className="WorkerWrapperForm">
      <div className="workersCardWrap">
        {filtedByZipCodeData.map((worker) => {
          return (
            <div className="workersCard">
              <img src={worker.image}></img>
              <div className="workersCardText">
                <h4>{worker.name}</h4>
                <p>CVR: {worker.cvr}</p>
                <p>{worker.adress}</p>
                <p>{worker.phoneNumber}</p>
                <WorkerRating rating={worker.rating} />
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default WorkersWrap;
