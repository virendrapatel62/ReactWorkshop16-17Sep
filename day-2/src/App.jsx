import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [formValues, setFormValues] = useState({
    firstName: "virendra  ",
    lastName: "abc",
    age: 12,
  });
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    // const object = Object.fromEntries(new FormData(event.target));
    console.log({ formValues });
    // console.log(new FormData(event.target).get("firstName"));
  }

  const handleOnChange = (event) => {
    console.log("Change");
    const { value, name } = event.target;
    console.log(name, value);
    formValues[name] = value;

    setFormValues({
      ...formValues,
    });
  };

  const handleFocus = () => {
    console.log("Focus");
  };
  const handleBlur = (event) => {
    console.log("Blur");
    const { value, name } = event.target;
    if (name === "firstName" && value.length < 4) {
      setError("First name must be at least 4 characters");
      return;
    }
    setError("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} action="post">
        {error && <div className="error">{error}</div>}
        <input
          onChange={handleOnChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={formValues.firstName}
          type="text"
          name="firstName"
          id=""
        />
        <input
          value={formValues.lastName}
          onChange={handleOnChange}
          type="text"
          name="lastName"
          id=""
        />
        <input
          value={formValues.age}
          onChange={handleOnChange}
          type="text"
          name="age"
          id=""
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
