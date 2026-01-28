import { useState } from "react";

function Welcome({ username }) {
  // use state
  let [count, setCount] = useState(0);
  function IncreaseValue() {
    setCount(count++);
  }

  return (
    <div>
      <h1>Welcome to the website {username}</h1>
      <button onClick={IncreaseValue}>Clicks : {count}</button>
      <button onClick={IncreaseValue}>Clicks : {count}</button>
      <button onClick={IncreaseValue}>Clicks : {count}</button>
      <button onClick={IncreaseValue}>Clicks : {count}</button>
      <button onClick={IncreaseValue}>Clicks : {count}</button>
      <button onClick={IncreaseValue}>Clicks : {count}</button>
      <button onClick={IncreaseValue}>Clicks : {count}</button>
      <button onClick={IncreaseValue}>Clicks : {count}</button>
      <button onClick={IncreaseValue}>Clicks : {count}</button>
    </div>
  );
}

export default Welcome;
