import React from "react";
import Wheel from "./Wheel";

export default function Bicycle(props) {
  let wheels = [];

  for (let i = 0; i < props.numberOfWheels; i++) {
    wheels.push(<Wheel />);
  }

  return (
    <>
      <h2>
        Good Morning, I am a {props.Name}. I have {props.numberOfWheels} wheels
      </h2>
      ;{wheels}
    </>
  );
}
