import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import ResponseResult from "./ResponseResult";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [responseResult, setResponseResult] = useState(null);

  function getDefinition(response) {
    setResponseResult(response.data[0]);
  }

  function lookUp(event) {
    event.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(getDefinition);
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="dictionaryForm mt-3" onSubmit={lookUp}>
        <input
          type="search"
          placeholder="e.g. sunset, flower, yoga"
          autoFocus={true}
          onChange={handleKeywordChange}
        />
      </form>
      <div className="responseResult">
        <ResponseResult data={responseResult} />
      </div>
    </div>
  );
}
