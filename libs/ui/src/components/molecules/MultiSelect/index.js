import React from "react";
import { Field } from "formik";
// import { ReactMultiSelect } from "../ReactLibComponents";

const MultiSelectField = (values) => {
  const { data } = values;

  return (
    <>
      {data?.map((multiSelectObject, index) => (
        <div
          key={index}
          className={`customField ${multiSelectObject.type + "_element"} ${
            multiSelectObject.class || ""
          }`}
        >
          <div className="customFieldBox1">
            <h4>{multiSelectObject.label}</h4>
            <p>{multiSelectObject?.description}</p>
          </div>
          <div className="customFieldBox2">
            <Field
              id={multiSelectObject.id}
              name={multiSelectObject.id}
              component={ReactMultiSelect}
              items={multiSelectObject.items}
            >
              <option value="">Vælg</option>
              {multiSelectObject.items?.map((option, index) => (
                <option key={index}>{option.label}</option>
              ))}
            </Field>
          </div>
        </div>
      ))}
    </>
  );
};

export default MultiSelectField;
