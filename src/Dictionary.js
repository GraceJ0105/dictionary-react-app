import axios from "axios";
import React, { useState } from "react";
import ResponseResult from "./ResponseResult";
import PhotoResponse from "./PhotoResponse";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [responseResult, setResponseResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photoResponse, setPhotoResponse] = useState(null);

  function getDefinition(response) {
    setResponseResult(response.data[0]);
  }

  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(getDefinition);
    let pexelsApiKey =
      "563492ad6f91700001000001769bb4bb8b93449e9e48cba4587d48d5";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(getPexelsResponse);
  }

  function handleSumbit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  function getPexelsResponse(response) {
    setPhotoResponse(response.data.photos);
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="dictionaryForm">
          <form className="dictionaryForm mt-3" onSubmit={handleSumbit}>
            <input
              type="search"
              placeholder="e.g. sunset, flower, yoga"
              autoFocus={true}
              onChange={handleKeywordChange}
              className="dictionaryInput form-control"
              spellCheck={true}
            />
          </form>
        </div>
        <div className="responseResult">
          <ResponseResult data={responseResult} />
        </div>
        <div className="photoResponse">
          <PhotoResponse data={photoResponse} alt={keyword} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
