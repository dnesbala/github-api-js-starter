import React, { useState } from "react";

const FormExample = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
        </div>

        <input type="submit" />
        <br />
        <br />

        <pre>{JSON.stringify(values, undefined, 2)}</pre>
      </form>
    </div>
  );
};

export default FormExample;
