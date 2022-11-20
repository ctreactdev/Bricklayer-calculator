import React from "react";
import { Field } from "formik";

const CheckboxInput = (values) => {
  if (values) {
    const { data } = values;
    return (
      <>
        {data?.map((checkboxObject, index) => (
          <div
            key={index}
            className={`customField ${checkboxObject.type + "_element"} ${
              checkboxObject.class || ""
            }`}
          >
            <div className="customFieldBox1">
              <h4>{checkboxObject?.label}</h4>
              <p>{checkboxObject?.description}</p>
            </div>
            <div className="customFieldBox2">
              <Field
                className="checkbox"
                type="checkbox"
                placeholder={checkboxObject?.placeholder}
                name={checkboxObject?.id}
              />
            </div>
          </div>
        ))}
      </>
    );
  } else {
    return null;
  }
};

export default CheckboxInput;
