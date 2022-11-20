import React from "react";
import { Field } from "formik";

const TextInput = (values) => {
  if (values) {
    const { data, schemaIds } = values;

    const assignIdsToSchemaInputs = () => {
      data?.map((object, index) => {
        if (schemaIds !== undefined) {
          object["id"] = schemaIds[index] + "_" + [index];
        }
      });
    };
    assignIdsToSchemaInputs();
    return (
      <>
        {data?.map((textObject, index) => (
          <div
            key={index}
            className={`customField ${textObject.type + "_element"} ${
              textObject.class || ""
            }`}
          >
            <div className="customFieldBox1">
              <h4>{textObject?.label}</h4>
              <p>{textObject?.description}</p>
            </div>
            <div className="customFieldBox2">
              <Field
                value={undefined}
                className="input inputStyle"
                type="text"
                placeholder={textObject?.placeholder}
                name={textObject?.id}
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

export default TextInput;
