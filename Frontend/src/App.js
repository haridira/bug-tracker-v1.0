import React from "react";
import Card from "./components/Card";
import "./App.css";
import issues from "./components/issues";

function App() {
  return (
    <div className="App">
      <h1>Hello Hari!</h1>
      {issues.map( (issue) => 
        <Card name={issue.userName} comment={issue.comment} />
      )}
    </div>
  );
}

export default App;
