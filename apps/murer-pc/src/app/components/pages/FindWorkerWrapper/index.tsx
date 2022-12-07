import React, { useState } from "react";
import styled from "styled-components";
import { FindWorkerWrap } from "apps/murer-pc/src/app/components/organisms";

interface IFindWorker {}
const Wrapper = styled.div``;

const FindWorkerWrapper: React.FunctionComponent<IFindWorker> = ({}) => {
  return (
    <Wrapper>
      <div className="findWorkerWrap">
        <div className="findWorker">
          <h2>Find en håndværker til dit projekt</h2>
          <p>
            Prisvindende håndværkere i hele landet. Find en fagmand - det er
            gratis og uforpligtende.
          </p>
          <FindWorkerWrap />
        </div>
      </div>
    </Wrapper>
  );
};

export default FindWorkerWrapper;
