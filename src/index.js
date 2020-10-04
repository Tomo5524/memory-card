// Structure Tree
// root
//   App
//     Nav
//     Card
//       displaycard

import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Card from "./components/card";
import uniqid from "uniqid";
// const savedCards = JSON.parse(localStorage.getItem("library"));

function App() {
  const [cards, setCards] = useState({
    cards_arr: [],
  });

  const [firstCard, setFirstCard] = useState({
    name: "",
    id: "",
  });

  const [gameDone, setgameDone] = useState(false);

  const [playNum, setplayNum] = useState(0);

  const [pairedNum, setPairedNum] = useState(0);

  const [count, setCount] = useState(0);

  const [turn, setTurn] = useState(0);

  const [lockBoard, setlockBoard] = useState(false);

  // this UseEffect is equal to a componentDidMount lifecycle method (if it ends with empty array)
  // the hook runs one time when the component mounts (is inserted in the DOM tree)
  useEffect(() => {
    // console.log("UseEffect to create cards fired!");
    let new_arr = []; // create new array so change in setCards becomes smooth
    for (let i = 0; i < 5; i++) {
      // create name that corresponds to card
      let card_name;
      if (i === 0) card_name = "Python";
      else if (i === 1) card_name = "Javascript";
      else if (i === 2) card_name = "React";
      else if (i === 3) card_name = "Vue";
      else if (i === 4) card_name = "Angular";

      for (let j = 0; j < 2; j++) {
        // we need 2 same objects so generatng id above to create 2 corresponding cards
        let new_obj = {
          id: uniqid(),
          flipped: false,
          name: card_name,
          paired: false,
        };
        new_arr.push(new_obj); // Push the object
      }
    }
    new_arr = shuffle(new_arr);
    setCards({ cards_arr: new_arr });
    // playNum only fires when it changes meaning when game ends
    // and this useEffect will create new array which triggers all the other functions
  }, [playNum]);

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // cause infinite loop as we modify setcount in useEffect which keeps firing for eternity
  // useEffect(() => {
  //   if (count === 2) {
  //     setTurn(turn + 1);
  //     setCount(0);
  //   } else {
  //     setCount(count + 1); // useEffect there is a delay!
  //     console.log(count, "count!==2");
  //   }
  // }, []);

  function handleClick(props) {
    // only fires when the card is either not flipped or already guessed
    // if 2 cards are flipped, not fires
    if (!props.paired && !props.flipped && !lockBoard) {
      const editCards = flipCard(props);
      setCards({ cards_arr: editCards });

      // 2 cards are filipped
      if (count === 1) {
        setlockBoard(true);
        console.log(
          firstCard,
          props.name,
          "//firstCard, props.name in count 1"
        );
        if (firstCard.name === props.name) {
          // let new_deck = hanldePaired(props.name);
          // setCards({ cards_arr: new_deck });
          setTimeout(() => {
            hanldePaired(props.name);
          }, 1200);
          setPairedNum(pairedNum + 1);
        } else {
          // unflip firstcard and props.name
          setTimeout(() => {
            unflipChosenCard(firstCard.id, props.id);
          }, 1200);
          setFirstCard({ name: "", id: "" });
        }
        setTurn(turn + 1);
        setCount(0);
        console.log(turn, count, "count==2");
        // setlockBoard(false);
        //  if change the state of it in the function (if statement?), it will not become effective by the time the function is done executing, so change it in another function
      }
      // just one card is flipped
      else {
        console.log(
          firstCard,
          props.name,
          "//firstCard, props.name in count 0"
        );
        // takes care of first guess
        setFirstCard({ name: props.name, id: props.id });
        setCount(count + 1); // useEffect there is a delay!
        console.log(count, "count!==2");
      }
    }
  }

  useEffect(() => {
    if (pairedNum === 5) {
      console.log("job done took you" + turn + "turns");
      setgameDone(true);
    }
  }, [pairedNum]);

  function resetGame() {
    setPairedNum(0);
    setplayNum(playNum + 1);
    setTurn(0);
    setgameDone(false); // hide footer
  }

  function flipCard(props) {
    console.log("//// flip executed");
    const editCards = cards.cards_arr.map((item) => {
      // create new object for item
      var temp = Object.assign({}, item);
      if (item.id === props.id) {
        temp.flipped = !temp.flipped;
        // temp.bg = changed_state;
        // console.log(temp, "temp//////");
      }
      return temp;
    });
    // console.log(editCards, "//// editCards");
    return editCards;
  }

  function hanldePaired(name) {
    console.log("//// hanldePaired executed");
    const editCards = cards.cards_arr.map((item) => {
      // create new object for item
      var temp = Object.assign({}, item);
      if (item.name === name) {
        temp.paired = true;
        temp.flipped = true;
        // make second guess card flip
      }
      return temp;
    });
    setlockBoard(false);
    setCards({ cards_arr: editCards });
    // return editCards;
  }

  function unflipChosenCard(firstCardId, SecondCardId) {
    // setlockBoard(true);
    console.log("//// unflipChosenCard executed");
    const editCards = cards.cards_arr.map((item) => {
      // create new object for item
      var temp = Object.assign({}, item);
      if (item.id === firstCardId || item.id === SecondCardId) {
        temp.flipped = false;
      }
      return temp;
    });
    setlockBoard(false);
    setCards({ cards_arr: editCards });
    // return editCards;g
  }

  return (
    <div className="container">
      <Nav turn={turn} playNum={playNum} />
      <Card
        value={cards}
        onClick={handleClick}
        // changeHandle={deleteHandle}
        // changeToggle={handleToggle}
      />
      <Footer turn={turn} gameDone={gameDone} onClick={resetGame}></Footer>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
