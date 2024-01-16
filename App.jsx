import React from "./core/React";

const Counter = ({ count }) => {
  return <div class="count">count: {count}</div>;
};

const CounterContainer = () => {
  return <Counter></Counter>;
};

const App = () => {
  return (
    <div id="app">
      hi, mini-react
      <Counter count={10}></Counter>
      <Counter count={10}></Counter>
    </div>
  );
};

export default App;
