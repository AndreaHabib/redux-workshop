import "./App.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [loading, setLoading] = useState(true);
  const counter = useSelector((state) => state.counter.counter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "COUNTER" });
    setLoading(false);
  }, [dispatch]);

  const increment = (e) => {
    e.preventDefault();
    dispatch({ type: "INCREMENT" });
  };

  const decrement = (e) => {
    e.preventDefault();
    dispatch({ type: "DECREMENT" });
  };

  const reset = (e) => {
    e.preventDefault();
    dispatch({ type: "RESET" });
  };

  return (
    <div className="App">
      <header className="App-header">
        {!loading ? <p>{counter}</p> : <p>Loading...</p>}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </header>
    </div>
  );
}

export default App;
