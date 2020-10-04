import React from "react";
import ShowCards from "./showCards";

function Card(props) {
  console.log(props, "props value in Card///");
  const cards = props.value.cards_arr.map((card) => (
    <ShowCards
      // changeHandle={this.props.changeHandle}
      // changeToggle={this.props.changeToggle}
      key={card.id}
      value={card}
      onClick={props.onClick}
    />
  ));

  return <div className="d-flex flex-wrap cards-container">{cards}</div>;
}

export default Card;
