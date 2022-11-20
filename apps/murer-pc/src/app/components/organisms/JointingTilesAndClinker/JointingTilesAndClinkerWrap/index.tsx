import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { JointingTilesAndClinkerFields } from "apps/murer-pc/src/app/components/organisms";
import { SubmitButton } from "@murer-nx/ui";
import { JointingTilesAndClinkerSchema } from "./validationSchema";

interface IWrapper {
  children?: JSX.Element | JSX.Element[];
}
interface IValues {
  tile_height: number;
  area: number;
  tile_width: number;
  tile_length: number;
  waste: number;
}

const Wrapper = styled.div``;

const JointingTilesAndClinkerWrap: React.FC<IWrapper> = ({}) => {
  const initialResult = {
    sealantTotalAmount: 0,
  };
  const [result, setResult] = useState(initialResult);
  const [submitCount, setSubmitCount] = useState(0);

  const initialValues = {};

  const calculate = (values: IValues) => {
    const { tile_height, area, tile_width, tile_length, waste } = values;
    // const glueMortarMixingRatio = 1.9;
    // const glueMortar = area * glueMortarMixingRatio;

    // const resultObject = {
    //   glueMortarTotalAmount: glueMortar,
    // };
    // setResult(resultObject);
  };
  const handleSubmit = (values: IValues) => {
    calculate(values);
  };

  //   const totalMortarGlue = Math.ceil(result.glueMortarTotalAmount);

  const invokeSetSubmitCount = () => {
    setSubmitCount(1);
    return null;
  };
  return (
    <Wrapper>
      <div>
        <Formik
          validateOnBlur={submitCount > 0 ? true : false}
          validateOnChange={submitCount > 0 ? true : false}
          validationSchema={JointingTilesAndClinkerSchema}
          initialValues={initialValues}
          onSubmit={(values: IValues) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched, handleBlur }) => (
            <Form>
              <JointingTilesAndClinkerFields
                errors={errors}
                handleBlur={handleBlur}
              />
              <SubmitButton text="Bekræft" />
              {errors !== undefined ? (
                <div>
                  {Object.keys(errors).length === 0 ? undefined : (
                    <div>{invokeSetSubmitCount()}</div>
                  )}
                </div>
              ) : undefined}
            </Form>
          )}
        </Formik>

        {result.sealantTotalAmount === 0 ? null : (
          <div>
            <h3>Materialeliste</h3>
            {/* <h4>Mængde Limmørtel: {totalMortarGlue} kg</h4> */}
          </div>
        )}
      </div>
    </Wrapper>
  );
};
export default JointingTilesAndClinkerWrap;
