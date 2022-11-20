import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const CCNav = () => {
  const [CCProduct, setCCProduct] = useState(false);
  return (
    <Wrapper>
      <button onClick={() => setCCProduct(true)}>
        Klæbning af fliser og klinker
      </button>
    </Wrapper>
  );
};

export default CCNav;
