import styled from "styled-components";
import { Field } from "formik";

// type PageWrapperProps = {
//   children: React.ReactNode; // 👈️ type children
// };
// type props = PageWrapperProps | PageWrapper;

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
  const tile_widthField = document.querySelector("#tile_width");
  const tile_lengthField = document.querySelector("#tile_length");
  const joint_widthField = document.querySelector("#joint_width");
  const wasteField = document.querySelector("#waste");

  if (errors.area) {
    areaField.classList.add("formikError");
  } else {
    areaField?.classList.remove("formikError");
  }
  if (errors.tile_width) {
    tile_widthField.classList.add("formikError");
  } else {
    tile_widthField?.classList.remove("formikError");
  }
  if (errors.tile_length) {
    tile_lengthField.classList.add("formikError");
  } else {
    tile_lengthField?.classList.remove("formikError");
  }
  if (errors.joint_width) {
    joint_widthField.classList.add("formikError");
  } else {
    joint_widthField?.classList.remove("formikError");
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
      <p>Flisebredde</p>
      <Field
        onBlur={handleBlur}
        id="tile_width"
        value={undefined}
        className="input inputStyle"
        type="number"
        placeholder={"mm"}
        name={"tile_width"}
      />
      <p>Fliselængde</p>
      <Field
        id="tile_length"
        value={undefined}
        className="input inputStyle"
        type="number"
        placeholder={"mm"}
        name={"tile_length"}
      />
      <p>Fugebredde</p>
      <Field
        id="joint_width"
        value={undefined}
        className="input inputStyle"
        type="number"
        placeholder={"mm"}
        name={"joint_width"}
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
