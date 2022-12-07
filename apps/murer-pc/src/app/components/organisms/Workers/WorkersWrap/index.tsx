import React from "react";
import styled from "styled-components";
import { WorkersData } from "libs/service";
import WorkerRating from "./WorkerRating";

interface IWorkersWrap {
  zipcode?: number;
}
const Wrapper = styled.div``;

const WorkersWrap: React.FunctionComponent<IWorkersWrap> = ({ zipcode }) => {
  const data = WorkersData.workers;
  return (
    <Wrapper className="WorkerWrapperForm">
      <div className="workersCardWrap">
        {data.map((worker) => {
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
