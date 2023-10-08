import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) { // switch statements are common in reducers
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function UseReducer() {

  // useReducer takes a reducer function and the initial state value
  // returns array with the state variable and a dispatch function
  const [counter, dispatch] = useReducer(reducer, 0);
  // const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    // we call the dispatch function to make all state updates
    dispatch({ type: "increment" });
    // setCounter(counter + 1)
  };

  const handleDecrement = () => {
    // dispatch takes a single argument - object passed to reducer
    dispatch({ type: "decrement" });
    // setCounter(counter - 1)
  };

  return (
    <div className="UseReducer componentBox">
      <h2>Count: {counter}</h2>
      <button onClick={handleIncrement}>Reducer Increment</button>
      <button onClick={handleDecrement}>Reducer Decrement</button>
    </div>
  );
};

// see next slide for reducer function

export default UseReducer;