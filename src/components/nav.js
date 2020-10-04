import React from "react";
// import ReactDOM from "react-dom";

function Nav(props) {
  console.log(props, "proops in nav");
  return (
    <div className="d-flex justify-content-between align-items-center py-4 text-white">
      <h1>Stacks Memory Card</h1>
      <div>
        <h4>Game: {props.playNum}</h4>
        <h4>Turn: {props.turn}</h4>
      </div>

      {/* <Card
          value={library}
          changeHandle={deleteHandle}
          changeToggle={handleToggle}
        /> */}
    </div>
  );
}

export default Nav;
