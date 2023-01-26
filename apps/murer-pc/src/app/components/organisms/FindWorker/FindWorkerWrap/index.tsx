import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { SubmitButton } from "@murer-nx/ui";
import { WorkersWrap } from "apps/murer-pc/src/app/components/organisms";
import ChooseTypelabor from "./chooseTypelabor";

const Wrapper = styled.div``;

interface IFindWorker {}

const FindWorkerWrapper: React.FunctionComponent<IFindWorker> = ({}) => {
  const [allreadySubmitted, setAllreadySubmitted] = useState(false);
  const [typeLabor, setTypeLabor] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  // useEffect(() => {
  //   handleSearch(searchInput);
  // }, [searchInput.lenght]);
  const initialValues = {};
  const handleSearch = (searchInput: string) => {
    // console.log(searchInput);
  };
  const handleSubmit = (values: string) => {
    setAllreadySubmitted(true);
    handleSearch(values);
  };

  return (
    <Wrapper>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values: string) => {
            handleSubmit(values);
          }}
        >
          <Form>
            {/* <FindWorkerField /> */}

            <div className="searchInputWrap">
              <Field
                onChange={(e: any) => setSearchInput(e.target.value)}
                id="findWorker"
                value={searchInput}
                className="input inputStyle"
                type="text"
                placeholder={"Post nummer eller håndværker fag"}
                name={"findWorker"}
              />
              <SubmitButton text="Bekræft" />
            </div>
            {!allreadySubmitted ? <ChooseTypelabor /> : null}
            <>
              {allreadySubmitted ? (
                <WorkersWrap
                  searchInput={searchInput}
                  submitted={allreadySubmitted}
                />
              ) : null}
            </>
          </Form>
        </Formik>
      </div>
    </Wrapper>
  );
};

export default FindWorkerWrapper;
