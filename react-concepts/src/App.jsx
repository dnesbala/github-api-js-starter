import React from "react";
import Person from "./components/Person";

const App = () => {
  return (
    <div>
      <Person name="Ram" age={20} />
      <Person name="Hari" age={22} />
      <Person name="Alex" age={28} />
    </div>
  );
};

export default App;
