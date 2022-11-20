import React from "react";
import { Field } from "formik";

const RadioGroup = (radioValues) => {
  if (radioValues) {
    const { data } = radioValues;
    let radioGroupClassButtonTypeObjects = data.filter(
      (radioClass) => radioClass?.class === "buttons"
    );
    let radioGroupNoClassTypeObjects = data.filter(
      (radioClass) => radioClass?.class !== "buttons"
    );
    const concatId = (index, str) => index.toString().concat(str);

    const setActiveYes = (id) => {
      const radioBtnlabelYes = document.querySelector("#" + id + "-yes");
      const radioBtnlabelNo = document.querySelector("#" + id + "-no");
      radioBtnlabelYes.click();
      radioBtnlabelYes.addEventListener("click", () => {
        radioBtnlabelYes.classList.add("radioBtnColor");
        radioBtnlabelNo.classList.remove("radioBtnColor");
      });
    };

    const setActiveNo = (id) => {
      const radioBtnlabelYes = document.querySelector("#" + id + "-yes");
      const radioBtnlabelNo = document.querySelector("#" + id + "-no");
      radioBtnlabelNo.click();
      radioBtnlabelNo.addEventListener("click", () => {
        radioBtnlabelNo.classList.add("radioBtnColor");
        radioBtnlabelYes.classList.remove("radioBtnColor");
      });
    };

    return (
      <>
        {radioGroupClassButtonTypeObjects?.map((radioObject, index) => (
          <div
            key={index}
            className={`customField ${radioObject.type + "_element"} ${
              radioObject.class || ""
            }`}
          >
            <div className="customFieldBox1">
              <h4>{radioObject.label}</h4>
              <p>{radioObject?.description}</p>
            </div>
            <div className="customFieldBox2">
              <Field
                id={concatId(index, "yes")}
                type="radio"
                value={radioObject?.items.yes}
                name={radioObject.id}
                className="hide"
                onClick={() => setActiveYes(radioObject.id)}
              />
              <label
                id={`${radioObject.id}-yes`}
                onClick={() => setActiveYes(radioObject.id)}
                className={`btn radioBtn defaultLabel`}
                htmlFor={concatId(index, "yes")}
              >
                {radioObject.items.yes}
              </label>

              <Field
                id={concatId(index, "no")}
                type="radio"
                value={radioObject.items.no}
                name={radioObject.id}
                className="hide"
                onClick={() => setActiveNo(radioObject.id)}
              />
              <label
                id={`${radioObject.id}-no`}
                onClick={() => setActiveNo(radioObject.id)}
                className={`btn radioBtn defaultLabel`}
                htmlFor={concatId(index, "no")}
              >
                {radioObject.items.no}
              </label>
            </div>
          </div>
        ))}
        {radioGroupNoClassTypeObjects.map((radioGroupObject, index) => (
          <div key={index} className="customField">
            <div className="customFieldBox1">
              <h4>{radioGroupObject.label}</h4>
              <p>{radioGroupObject?.description}</p>
            </div>
            <div className="customFieldBox2">
              <div className="radioGroupFlexBox">
                <div className="radioGroupLabel">
                  <Field
                    type="radio"
                    name={radioGroupObject.id}
                    className="radioGroup"
                    value={`${radioGroupObject?.items?.yes}` || "yes"}
                  />
                  <label>{radioGroupObject?.items?.yes}</label>
                </div>
              </div>
              <div className="radioGroupSpacing"></div>
              <div className="radioGroupFlexBox">
                <div className="radioGroupLabel">
                  <Field
                    type="radio"
                    name={radioGroupObject.id}
                    className="radioGroup"
                    value={`${radioGroupObject?.items?.no}` || "no"}
                  />
                  <label>{radioGroupObject?.items?.no}</label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  } else return null;
};

export default RadioGroup;
