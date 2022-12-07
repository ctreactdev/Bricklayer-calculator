import React, { useState } from "react";
import styled from "styled-components";

interface IWorkersRating {
  rating: number;
}
const Wrapper = styled.div`
  display: flex;
  i {
    color: #ffd700;
  }
`;

const WorkersRating: React.FunctionComponent<IWorkersRating> = ({ rating }) => {
  const star = <i className="fa fa-star" aria-hidden="true"></i>;
  const renderStars = () => {
    if (rating === 1) {
      return <div>{star}</div>;
    }
    if (rating === 2) {
      return (
        <div>
          {star}
          {star}
        </div>
      );
    }
    if (rating === 3) {
      return (
        <div>
          {star}
          {star}
          {star}
        </div>
      );
    }
    if (rating === 4) {
      return (
        <div>
          {star}
          {star}
          {star}
          {star}
        </div>
      );
    }
    if (rating === 5) {
      return (
        <div>
          {star}
          {star}
          {star}
          {star}
          {star}
        </div>
      );
    }
  };

  return <Wrapper>{renderStars()}</Wrapper>;
};

export default WorkersRating;
