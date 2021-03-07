import { useState } from "react";
import "./App.css";
import Congratulations from "./components/Congratulations";
import Header from "./components/Header";
import Thankyou from "./components/Thankyou";

function App() {
  const [phonePresent, setPhonePresent] = useState(
    localStorage.getItem("phone")
  );

  const updatePhonePresent = (e) => {
    setPhonePresent(e);
  };

  return (
    <div className="App">
      <Header />
      <main>
        {phonePresent ? (
          <Thankyou />
        ) : (
          <Congratulations updatePhonePresent={updatePhonePresent} />
        )}
      </main>
    </div>
  );
}

export default App;
