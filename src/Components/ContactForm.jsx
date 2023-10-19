import React, { useState } from "react";

const KontaktForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    betreff: "",
    nachricht: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      console.log("Email Sent Successfully!");
    } else {
      console.log("Email sending failed");
    }
  };

  return (
    <div className="kontaktContainer">
      <div className="containerSocialsAndForm">
        <div className="formContainer flex flex-col justify-center p-4 max-w-2xl mx-auto border border-solid border-gray-300 shadow-lg bg-[#E16848]">
          <h2 className="text-2xl font-semibold text-white mb-4">Wir freuen uns von dir zu hören!</h2>
          <form onSubmit={handleSubmit}>
            <div className="formField mb-5">
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Dein Name"
                value={formData.name}
                onChange={handleInputChange}
                className="inputField rounded-s w-4/5"
              />
            </div>
            <div className="formField mb-5">
              <label htmlFor="email"></label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Deine Email Addresse"
                value={formData.email}
                onChange={handleInputChange}
                className="inputField rounded-s w-4/5"
              />
            </div>
            <div className="formField mb-5">
              <label htmlFor="betreff"></label>
              <textarea
                id="betreff"
                name="betreff"
                placeholder="Betreff"
                value={formData.betreff}
                onChange={handleInputChange}
                className="textAreaField rounded-s w-4/5"
              />
            </div>
            <div className="formField mb-5">
              <label htmlFor="nachricht"></label>
              <textarea
                id="nachricht"
                name="nachricht"
                placeholder="Nachricht"
                value={formData.nachricht}
                onChange={handleInputChange}
                className="textAreaField rounded-s w-4/5"
              />
            </div>
            <button type="submit" className="submitButton bg-white text-yellow-500 px-8 py-3 rounded-full cursor-pointer transition hover:bg-blue-500">
              Senden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KontaktForm;
