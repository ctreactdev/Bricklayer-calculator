import styled from "styled-components";
import { Field } from "formik";

interface IBondingTileAndClinkerProps {
  errors: any;
  handleBlur: any;
}

const Wrapper = styled.div``;

const BondingTileAndClinkerFields: React.FC<IBondingTileAndClinkerProps> = ({
  errors,
  handleBlur,
}) => {
  const areaField = document.querySelector("#area");
  const wasteField = document.querySelector("#waste");

  if (errors.area) {
    areaField.classList.add("formikError");
  } else {
    areaField?.classList.remove("formikError");
  }
  if (errors.waste) {
    wasteField.classList.add("formikError");
  } else {
    wasteField?.classList.remove("formikError");
  }

  return (
    <Wrapper className="wrapper">
      <p>Areal</p>
      <Field
        id="area"
        value={undefined}
        className="input inputStyle"
        type="number"
        placeholder={"m²"}
        name={"area"}
      />
      <p>Spild</p>
      <Field
        id="waste"
        value={undefined}
        className="input inputStyle"
        type="number"
        placeholder={"%"}
        name={"waste"}
      />
    </Wrapper>
  );
};
export default BondingTileAndClinkerFields;
