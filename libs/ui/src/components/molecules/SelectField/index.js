import React from "react";
import { Field } from "formik";

const SelectField = (values) => {
  if (values) {
    const { data } = values;
    return (
      <>
        {data?.map((selectObject, index) => (
          <div
            key={index}
            className={`customField ${selectObject.type + "_element"} ${
              selectObject.class || ""
            }`}
          >
            <div className="customFieldBox1">
              <h4>{selectObject.label}</h4>
              <p>{selectObject?.description}</p>
            </div>
            <div className="customFieldBox2">
              <Field
                id={selectObject.id}
                as="select"
                name={selectObject.id}
                className="customFormSelectField inputStyle"
              >
                <option value="">Vælg</option>
                {selectObject?.items?.map((option, index) => (
                  <option key={index}>{option.value}</option>
                ))}
              </Field>
            </div>
          </div>
        ))}
      </>
    );
  } else return null;
};

export default SelectField;
