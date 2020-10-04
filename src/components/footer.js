import React from "react";
import ShowCards from "./showCards";

function Footer(props) {
  console.log(props, "props value in Footer///");
  return (
    <div
      style={{ display: props.gameDone ? "block" : "none" }}
      className="text-center py-5 mt-3 text-white"
    >
      <h1> It took you {props.turn} turns to finish</h1>
      <button className="mt-3 btn btn-dark" onClick={props.onClick}>
        play again?
      </button>
    </div>
  );
}

export default Footer;
