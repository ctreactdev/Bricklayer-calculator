import styled from "styled-components";
import { Field } from "formik";

interface IFindWorkerProps {
  errors?: any;
  handleBlur?: any;
  onChange?: any;
}

const Wrapper = styled.div``;

const FindWorkerFields: React.FC<IFindWorkerProps> = ({
  errors,
  handleBlur,
}) => {
  const findWorkerField = document.querySelector("#findWorker");

  //   if (errors.findWorker) {
  //     findWorkerField.classList.add("formikError");
  //   } else {
  //     findWorkerField?.classList.remove("formikError");
  //   }

  return (
    <Wrapper>
      <Field
        id="findWorker"
        value={undefined}
        className="input inputStyle"
        // type="string"
        placeholder={"Post nummer eller håndværker fag"}
        name={"findWorker"}
      />
    </Wrapper>
  );
};
export default FindWorkerFields;
