import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { useFormik } from "formik";
import { object, string, number } from "yup";

function App() {
  const form = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
    },

    validationSchema: object({
      firstName: string().required().min(4).max(20),
      lastName: string().required(),
      age: number().min(18).max(40),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="App">
      <form onSubmit={form.handleSubmit} action="post">
        <input
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.firstName}
          type="text"
          name="firstName"
          id=""
        />
        {form.touched.firstName && form.errors.firstName && (
          <div className="error">{form.errors.firstName}</div>
        )}
        <input
          onChange={form.handleChange}
          value={form.values.lastName}
          onBlur={form.handleBlur}
          type="text"
          name="lastName"
          id=""
        />
        {form.touched.lastName && form.errors.lastName && (
          <div className="error">{form.errors.lastName}</div>
        )}
        <input
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.age}
          type="text"
          name="age"
          id=""
        />
        {form.touched.age && form.errors.age && (
          <div className="error">{form.errors.age}</div>
        )}
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
