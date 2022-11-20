import React from "react";
import Select from "react-select";

const ReactMultiSelect = (props) => {
  const {
    field: { name, value },
    form: { setFieldValue },
  } = props;

  const onValueChange = (multiSelects) => {
    setFieldValue(name, multiSelects);
  };

  return (
    <>
      <Select
        name={name}
        value={value}
        className="input"
        defaultValue={null}
        onChange={onValueChange}
        options={props.items}
        isMulti
      />
    </>
  );
};

export default ReactMultiSelect;
