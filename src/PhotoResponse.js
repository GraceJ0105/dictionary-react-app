import React from "react";
import "./PhotoResponse.css";
export default function PhotoResponse(props) {
  if (props.data) {
    return (
      <div className="photos row">
        {props.data.map(function (photo, index) {
          return (
            <div key={index} className="mt-4 col-3">
              <img
                src={photo.src.portrait}
                alt={props.alt}
                className="img-fluid"
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
