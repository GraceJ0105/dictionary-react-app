import React from "react";
import Synonyms from "./Synonyms";
import "./ResponseResult.css";
import Phonetics from "./Phonetics";

export default function ResponseResult(props) {
  if (props.data) {
    return (
      <div className="responseResult">
        <h1 className="keywordResponse mt-3">{props.data.word}</h1>
        <h2 className="phonetic">{props.data.phonetic}</h2>
        <Phonetics data={props.data.phonetics[0].audio} />
        <div className="definitions">
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index} className="card mt-4">
                <h3 className="card-header part-of-speech">
                  {" "}
                  {meaning.partOfSpeech}:
                </h3>
                <p className="card-text">
                  {" "}
                  {meaning.definitions[0].definition}
                </p>
              </div>
            );
          })}
        </div>
        <Synonyms response={props.data.meanings[0].synonyms} />
      </div>
    );
  } else {
    return null;
  }
}
