import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { BondingTileAndClinkerFields } from "apps/murer-pc/src/app/components/organisms";
import { SubmitButton } from "@murer-nx/ui";
import { BondingTileAndClinkerSchema } from "./validationSchema";

interface IWrapper {
  children?: JSX.Element | JSX.Element[];
}
interface IValues {
  area: number;
  tile_width: number;
  tile_length: number;
}

const Wrapper = styled.div``;

const BondingTileAndClinkerWrap: React.FC<IWrapper> = ({}) => {
  const initialResult = {
    clinkerSize: 0,
    tileAmount: 0,
  };
  const [result, setResult] = useState(initialResult);
  const [submitCount, setSubmitCount] = useState(0);
  const [tileAdhesiveAmount, setTileAdhesiveAmount] = useState(0);

  const initialValues = {};

  const calculate = (values: IValues) => {
    const { area, tile_width, tile_length } = values;
    const clinkerSizeCal = (tile_width * tile_length) / 1000000;
    const totalAmountOfTilesCal = area / clinkerSizeCal;

    const totalTileWidthAndLength = tile_width + tile_length;
    if (totalTileWidthAndLength > 1399) {
      const TILE_ADHESIVE_MIXING_RATIO = 5.9;
      const tileAdhesiveAmountCal = area * TILE_ADHESIVE_MIXING_RATIO;
      setTileAdhesiveAmount(tileAdhesiveAmountCal);
    }
    if (totalTileWidthAndLength < 1399) {
      const TILE_ADHESIVE_MIXING_RATIO = 4.9;
      const tileAdhesiveAmountCal = area * TILE_ADHESIVE_MIXING_RATIO;
      setTileAdhesiveAmount(tileAdhesiveAmountCal);
    }

    const resultObject = {
      clinkerSize: clinkerSizeCal,
      tileAmount: totalAmountOfTilesCal,
    };
    setResult(resultObject);
  };
  const handleSubmit = (values: IValues) => {
    calculate(values);
  };

  const totalTileAmount = Math.ceil(result.tileAmount);
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
          validationSchema={BondingTileAndClinkerSchema}
          initialValues={initialValues}
          onSubmit={(values: IValues) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched, handleBlur }) => (
            <Form>
              <BondingTileAndClinkerFields
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
        {result.clinkerSize === 0 ? null : (
          <div>
            <h3>Materialeliste</h3>
            <h4>Antal fliser: {totalTileAmount} stk.</h4>
            <h4>Mængde Fliseklæb: {tileAdhesiveAmount} kg</h4>
          </div>
        )}
      </div>
    </Wrapper>
  );
};
export default BondingTileAndClinkerWrap;
