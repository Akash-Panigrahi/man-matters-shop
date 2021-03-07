import React, { useState } from "react";

export default function Congratulations({ updatePhonePresent }) {
  const [phone, setPhone] = useState("");
  const [phoneValid, setPhoneValid] = useState("");

  const amount = 200;

  const submitForm = (e) => {
    e.preventDefault();
    localStorage.setItem("phone", phone);
    updatePhonePresent(true);
  };

  const checkPhoneValidity = (e) => {
    const validPhone = /^[789]\d{9}$/.test(e.target.value);
    if (validPhone) {
      setPhoneValid(true);
      setPhone(e.target.value);
    } else {
      setPhoneValid(false);
      setPhone("");
    }
  };

  return (
    <div className="congratulations-page">
      <h1>Congratulations</h1>
      <section className="body">
        <div className="gift-card">Gift card Rs. {amount}</div>
        <div className="details">
          You have WON Paytm Gift Card of Rs 200 for{" "}
          <strong>placing the order on Man Matters</strong>
        </div>
        <form className="gift-form" onSubmit={submitForm}>
          <input
            name="phone"
            placeholder="Enter Mobile Number"
            type="text"
            defaultValue={phone}
            onChange={checkPhoneValidity}
          />
          {!phoneValid && (
            <p className="hint">
              Enter the same mobile number used on Man Matters
            </p>
          )}
          <button type="submit" disabled={!phoneValid}>
            Wow! Get my Paytm Gift Card &nbsp;&gt;
          </button>
        </form>
      </section>
      <div className="backdrop"></div>
    </div>
  );
}
