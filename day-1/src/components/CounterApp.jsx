import { useState } from "react";

const CounterApp = (props) => {
  function incByOne() {
    console.log("Clicked on Plus button");
    // value = value + 1;
    props.setValue(props.value + 1);
    console.log(props.value);
  }
  function decByOne() {
    console.log("Clicked on Minus button");
    // value = value - 1;
    props.setValue(props.value - 1);
  }

  return (
    <div className="counter_app">
      <button onClick={decByOne}>-1</button>
      <h1>{props.value}</h1>
      <button onClick={incByOne}>+1</button>
    </div>
  );
};

const CounterAppContainer = () => {
  const [value, setValue] = useState(90);
  return (
    <>
      <CounterApp setValue={setValue} value={value} />
      <h1>{value}</h1>
    </>
  );
};
export default CounterAppContainer;
