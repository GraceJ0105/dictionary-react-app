import React from "react";
import "./ResponseResult.css";
export default function ResponseResult(props) {
  if (props.data) {
    return (
      <div className="responseResult">
        <h1 className="keywordResponse mt-3">{props.data.word}</h1>
        <h2 className="phonetic">{props.data.phonetic}</h2>
        <div className="definitions">
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index} className="card mt-4">
                <h3 className="card-header"> {meaning.partOfSpeech}:</h3>

                <p className="card-text">
                  {" "}
                  {meaning.definitions[0].definition}
                </p>
              </div>
            );
          })}
        </div>
        <div className="card mt-4">
          <p className="mt-3">
            <strong className="synonyms"> Synonyms: </strong>
            {props.data.meanings[0].synonyms.map(function (synonym, index) {
              return (
                <small key={index} className="synonym">
                  {synonym}{" "}
                </small>
              );
            })}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
