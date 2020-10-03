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
import Card from "./components/card";
import uniqid from "uniqid";
// const savedCards = JSON.parse(localStorage.getItem("library"));

function App() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  const [turn, setTurn] = useState(0);

  const [cards, setCards] = useState({
    cards_arr: [],
  });

  // this UseEffect is equal to a componentDidMount lifecycle method
  // the hook runs one time when the component mounts (is inserted in the DOM tree)
  useEffect(() => {
    console.log("UseEffect to create cards fired!");
    const new_arr = [];
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
        // const newArray = cards.cards_arr.slice(); // Create a copy
        new_arr.push(new_obj); // Push the object
      }
    }
    setCards({ cards_arr: new_arr });
  }, []);

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
    console.log(props, "props in handleClick//////");
    if (!props.paired) {
      // how to compare current state and previous state
      // const { name } = props;
      // const prevName = usePrevious({ name });
      // useEffect(() => {
      //   if (prevName.name === name) {
      //     hanldePaired(name);
      //   }
      // }, [name]);

      // // change current name
      // setName(name);

      // handle turn and count here
      if (count === 1) {
        setTurn(turn + 1);
        setCount(0);
        console.log(turn, count, "count==2");
      } else {
        setCount(count + 1); // useEffect there is a delay!
        console.log(count, "count!==2");
      }

      const editCards = flipCard(props);
      setCards({ cards_arr: editCards });
    }
  }

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.name = value;
    });
    return ref.name;
  }

  function flipCard(props) {
    const editCards = cards.cards_arr.map((item) => {
      // create new object for item
      var temp = Object.assign({}, item);
      if (item.id === props.id) {
        temp.fliped = !temp.fliped;
        // temp.bg = changed_state;
        console.log(temp, "temp//////");
      }
      return temp;
    });
    return editCards;
  }

  function hanldePaired(name) {
    const editCards = cards.cards_arr.map((item) => {
      // create new object for item
      var temp = Object.assign({}, item);
      if (item.name === name) {
        temp.paired = true;
        // temp.bg = changed_state;
        console.log(temp, "temp//////");
      }
      return temp;
    });
    return editCards;
  }

  //   function deleteHandle(given_id) {
  //     const new_books = library.filter((book) => book.id !== given_id);
  //     setLibrary(new_books);
  //     // Don't use removeItem() that as the name says removes the whole item from localStorage. Just do another setItem() to overwrite the old data.
  //     localStorage.setItem("library", JSON.stringify(new_books));
  //   }

  //   function handleFlip(cur_book) {
  //     console.log(cur_book, "cur_book /////");
  //     let changed_state = cur_book.read == "Read" ? "Not Read" : "Read";
  //     console.log(changed_state, "changed_state /////");
  //     // also update libraby
  //     // https://stackoverflow.com/questions/49627157/update-the-attribute-value-of-an-object-using-the-map-function-in-es6
  //     // how to edit one spefic object out of array
  //     const editBooks = library.map((item) => {
  //       // create new object for item
  //       var temp = Object.assign({}, item);
  //       if (item.id === cur_book.id) {
  //         temp.read = changed_state;
  //         console.log(temp, "temp//////");
  //       }
  //       return temp;
  //     });
  //     setLibrary(editBooks);
  //     // might not have to use line below if I use useEffect instead
  //     localStorage.setItem("library", JSON.stringify(editBooks));
  //   }

  //   function resetCurrentState() {
  //     setState({
  //       title: "",
  //       author: "",
  //       pages: "",
  //       read: "",
  //       required: false,
  //     });
  //   }

  return (
    <div className="container">
      <Nav value={turn} />
      <Card
        value={cards}
        onClick={handleClick}
        // changeHandle={deleteHandle}
        // changeToggle={handleToggle}
      />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
