import React, { useState } from "react";

const CvrInput = (props) => {
  const [cvrData, setCvrData] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const {
    field: { name, value },
    form: { setFieldValue },
    placeholder: placeholder,
  } = props;

  const callCvrRegister = (cvrValue) => {
    const response = getCvrResults(cvrValue);
    response.then((data) => {
      setCvrData(data.companies);
    });
  };

  const onValueChange = (cvrText) => {
    setText(cvrText);
    callCvrRegister(cvrText);
    setSuggestions(cvrData);
  };

  const onSuggestHandler = (suggestion) => {
    setText(suggestion);

    setFieldValue(name, suggestion);
    setSuggestions([]);
  };
  return (
    <>
      <input
        id="myInput"
        type="text"
        className="input inputStyle"
        onChange={(e) => onValueChange(e.target.value)}
        value={text}
        autoComplete="no"
        placeholder={placeholder}
      ></input>
      <div className="suggestionWrapper">
        {suggestions &&
          suggestions.map((suggestion, i) => (
            <div
              key={i}
              className="cvrSuggestion"
              onClick={() => onSuggestHandler(suggestion.name)}
            >
              <p>{suggestion.name}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default CvrInput;
