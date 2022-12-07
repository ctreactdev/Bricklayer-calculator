import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { SubmitButton } from "@murer-nx/ui";

interface IFindWorker {}

const Wrapper = styled.div``;

interface IValues {
  zipcode: number;
  profession: string;
}
const FindWorkerWrapper: React.FunctionComponent<IFindWorker> = ({}) => {
  // const [searchResult, setSearchResult] = useState();
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    handleSearch(searchInput);
  }, [searchInput]);
  const navigate = useNavigate();
  const handleSearch = (searchInput: string) => {
    console.log(searchInput);
  };
  const handleSubmit = (values: IValues) => {
    console.log("search for worker");
    if (values) {
      navigate("/workers");
    }
  };
  const initialValues = {};
  return (
    <Wrapper>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values: IValues) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched, handleBlur }) => (
            <Form>
              {/* <FindWorkerField /> */}
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
            </Form>
          )}
        </Formik>
      </div>
    </Wrapper>
  );
};

export default FindWorkerWrapper;
