import React from "react";

export default function Thankyou() {
  const phone = localStorage.getItem("phone");
  return (
    <div className="thank-you-page">
      <h1 className="title">Thank You!</h1>
      <p>
        You will receive your gift card on <strong>{phone}</strong>.
      </p>
    </div>
  );
}
