import { useState } from "react";
import "./App.css";
import Thankyou from "./components/Thankyou";

function App() {
  const [phone, setPhone] = useState("");
  const [phoneValid, setPhoneValid] = useState("");
  const [phonePresent, setPhonePresent] = useState(
    localStorage.getItem("phone")
  );

  const checkPhoneValidity = (e) => {
    const indianPhoneNumberRegex = /^(?:(?:\+|0{0,2})91(\s*[ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/gm;
    if (indianPhoneNumberRegex.test(e.target.value)) {
      setPhoneValid(true);
      setPhone(e.target.value);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    localStorage.setItem("phone", phone);
    setPhonePresent(true);
  };

  return (
    <div className="App">
      {phonePresent ? (
        <Thankyou phone={phone} />
      ) : (
        <form onSubmit={submitForm}>
          <input
            name="phone"
            type="text"
            defaultValue={phone}
            onChange={checkPhoneValidity}
          />
          <button type="submit" disabled={!phoneValid}>
            Wow! Get my Paytm Gift Card
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
