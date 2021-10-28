import React from "react";
import Nav from "./components/nav/nav";
import PageCards from "./pageCards";

function App() {
  return (
    <>
      <Nav />
      
      <div className="App">
        <PageCards />
      </div>
    </>
  );
}

export default App;
