import React from "react";
import Wheel from "./Wheel";

export default function Car(props) {
  let wheels = [];

  for (let i = 0; i < props.numberOfWheels; i++) {
    wheels.push(<Wheel/>);
  }

  return (
    <>
      <h2>Hi, I am a Car! I have {props.numberOfWheels} wheels</h2>
      {wheels}
    </>
  );
}
