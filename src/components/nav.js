import React from "react";
// import ReactDOM from "react-dom";

function Nav(props) {
  console.log(props, "proops in nav");
  return (
    <div className="d-flex justify-content-between align-items-center py-4 text-white">
      <h1>Stacks Memory Card</h1>
      <h4>Turn: {props.value}</h4>
      {/* <Card
          value={library}
          changeHandle={deleteHandle}
          changeToggle={handleToggle}
        /> */}
    </div>
  );
}

export default Nav;
