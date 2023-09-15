import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count - 1);
  };

  return (
    <div id="app">
      <button onClick={handleMinus}>-1</button>
      <h1>{count}</h1>
      <button onClick={handlePlus}>+1</button>
    </div>
  );
}

export default App;
