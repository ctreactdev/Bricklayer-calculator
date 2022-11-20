import React from "react";
import { Field } from "formik";

const Textarea = (values) => {
  if (values) {
    const { data } = values;
    return (
      <>
        {data?.map((textareaObject, index) => (
          <div
            key={index}
            className={`customField d-block ${
              textareaObject.type + "_element"
            } ${textareaObject.class || ""}`}
          >
            <div className="customFieldBox1">
              <h4>{textareaObject.label}</h4>
              <p>{textareaObject?.description}</p>
            </div>
            <div className="customFieldBox2">
              <div className="customFieldTextareaWrapper">
                <Field
                  as="textarea"
                  className="customFieldTextarea inputStyle"
                  name={textareaObject.id}
                  placeholder={textareaObject.placeholder}
                />
              </div>
            </div>
          </div>
        ))}
      </>
    );
  } else {
    return null;
  }
};

export default Textarea;
