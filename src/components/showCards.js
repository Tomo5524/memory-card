// import React from "react";
import React from "react";
// import "font-awesome/css/font-awesome.min.css";

function ShowCards(props) {
  console.log(props, "props in ShowCards ///////////////");
  //   const [card, setState] = useState({
  //     bg: "white", // the name of stack, e,g, Python
  //     fliped: false,
  //   });

  //   useEffect(() => {
  //     let new_bg = card.fliped ? "gray" : "white";
  //     setState({ bg: new_bg });
  //   }, [card]);
  //   const imgURL = `/images/react.svg`;
  //   console.log(props.value.fliped, "props.fliped");
  //   let divStyle = props.value.fliped
  //     ? {
  //         background: null,
  //       }
  //     : { background: "white" };

  //   console.log(divStyle, "divStyle");

  function getImage(name) {
    if (name === "React") {
      return "react-img";
    } else if (name === "Vue") {
      return "vue-img";
    } else if (name === "Javascript") {
      return "js-img";
    } else if (name === "Python") {
      return "py-img";
    } else if (name === "Angular") {
      return "angular-img";
    }
  }

  return (
    <div
      className={
        "m-2 radius card-box " +
        (props.value.flipped
          ? getImage(props.value.name) + " border flip"
          : "card-bg border")
      }
      onClick={() => {
        props.onClick(props.value);
      }}
      id={props.value.name}
      //   style={divStyle}
      //   src={props.value.fliped ? imgURL : null}
    >
      {/* <div className="d-flex  justify-content-between w-100">        
      </div> */}
      <p className="d-flex justify-content-center align-items-center h-100 text-size">
        {props.value.flipped ? "" : "😛"}
      </p>
    </div>
  );
}

export default ShowCards;
