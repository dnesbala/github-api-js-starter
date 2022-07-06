import React from "react";

const Person = (props) => {
  //   console.log(props.name);
  //   const name = props.name;
  //   const age = props.age;
  //   props.name = "Test"; // Props are read only
  const { name, age } = props;

  return (
    <div style={{ backgroundColor: "teal" }}>
      <h2>Name = {name}</h2>
      <h2>Age = {age}</h2>
    </div>
  );
};

export default Person;
