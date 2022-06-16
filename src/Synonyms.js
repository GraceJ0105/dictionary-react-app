import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.response.length > 0) {
    return (
      <div className="card mt-4 synonymsList">
        <p className="mt-3">
          <strong className="synonyms"> Synonyms: </strong>{" "}
          {props.response.map(function (synonym, index) {
            return (
              <small key={index} className="synonym">
                {synonym}{" "}
              </small>
            );
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
