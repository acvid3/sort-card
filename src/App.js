import React, {useState} from "react";
import Modal from "./components/modal/modal";
import Nav from "./components/nav/nav";
import PageCards from "./cards";
import { Context } from "./context";

function App() {
  const [message, setMessage] = useState('');

  const msg = text => {
    setMessage(text);
  }

  return (
    <>
      <Nav />
      <Context.Provider value={{msg}}>
      {message ? <Modal text={message}/> : null}
        <div className="App">
          <PageCards />
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
