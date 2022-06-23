import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  if (props.data) {
    return <ReactAudioPlayer src={props.data} autoPlay={false} controls />;
  } else {
    return null;
  }
}
