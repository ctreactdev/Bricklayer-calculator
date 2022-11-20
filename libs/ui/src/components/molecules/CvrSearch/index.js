import React from "react";
import { Field } from "formik";
import CvrInput from "./CvrInput";

const CvrSearch = (values) => {
  const { data } = values;

  return (
    <>
      {data?.map((cvrObject, index) => (
        <div
          key={index}
          className={`customField ${cvrObject.type + "_element"} ${
            cvrObject.class || ""
          }`}
        >
          <div className="customFieldBox1">
            <h4>{cvrObject?.label}</h4>
            <p>{cvrObject?.description}</p>
          </div>
          <div className="customFieldBox2">
            <Field
              id={cvrObject.id}
              name={cvrObject.id}
              component={CvrInput}
              placeholder={cvrObject?.placeholder}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default CvrSearch;
