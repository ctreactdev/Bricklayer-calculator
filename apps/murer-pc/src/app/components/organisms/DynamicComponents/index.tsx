import React from "react";
import { RadioGroup, SelectField, Textarea, TextInput } from "@murer-nx/ui";

const DynamicComponents = (values: any) => {
  if (values) {
    const { data, schemaIds } = values;
    let selectTypeObjects = data?.filter(
      (selectValue) => selectValue.type === "select"
    );
    let radioGroupTypeObjects = data?.filter(
      (radioValue) => radioValue.type === "radiogroup"
    );
    let textareaTypeObjects = data?.filter(
      (textareaValue) => textareaValue.type === "textarea"
    );
    let textTypeObjects = data?.filter(
      (textValue) => textValue.type === "text"
    );
    return (
      <>
        <SelectField data={selectTypeObjects} />

        <RadioGroup data={radioGroupTypeObjects} />

        <Textarea data={textareaTypeObjects} />

        <TextInput data={textTypeObjects} schemaIds={schemaIds} />
      </>
    );
  } else return null;
};

export default DynamicComponents;
