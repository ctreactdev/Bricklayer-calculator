import React, { useState } from "react";
import styled from "styled-components";
import { HomepageWrap } from "apps/murer-pc/src/app/components/organisms";

interface IHomepageWrapper {}
const Wrapper = styled.div``;

const HomepageWrapper: React.FunctionComponent<IHomepageWrapper> = ({}) => {
  return (
    <Wrapper>
      <HomepageWrap />
    </Wrapper>
  );
};

export default HomepageWrapper;
