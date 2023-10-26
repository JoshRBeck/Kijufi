import React, { useState } from "react";
import KijufiBlack from "../Assets/KijufiBlack.png"
import instagramb from '../Assets/InstaB.png';
import facebookb from '../Assets/Link.png';
import youtubeb from '../Assets/YoutubeB.png';
import Mb from '../Assets/MatadorB.png';

const FooterSocial = [
  {
    link: 'https://www.instagram.com/kijufi/',
    image: instagramb,
    alt: 'instagram',
  },
  {
    link: 'https://www.facebook.com/kijufi/',
    image: facebookb,
    alt: 'facebook',
  },
  {
    link: 'https://www.youtube.com/@kijufi',
    image: youtubeb,
    alt: 'youtube',
  },
  {
    link: 'https://bildung.social/@kijufi',
    image: Mb,
    alt: 'M',
  },
];

const KontaktForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    betreff: "",
    nachricht: "",
  });

  const [status, setStatus] = useState("Submit");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    const response = await fetch(`${backendUrl}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    setStatus("Submit");

    if (response.ok) {
      console.log("Form data submitted successfully!");
    } else {
      console.log("Form data submission failed");
    }
  };

  return (
    <div className="flex flex-row-reverse">
      {/* Container for Contact Form */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center mx-auto border border-solid border-gray-300 shadow-lg bg-[#E16848]">
        <h2 className="text-[24px] font-regular text-white mb-4">📩 Wir freuen uns von dir zu hören!</h2>
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
              style={{ color: 'black' }}
              className="inputField rounded-s w-full text-[#D5E7E3] p-1"
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
              style={{ color: 'black' }}
              className="inputField rounded-s w-full text-[#D5E7E3] p-1"
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
              style={{ color: 'black' }}
              className="textAreaField rounded-s w-full text-[#D5E7E3] p-1"
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
              style={{ color: 'black' }}
              className="textAreaField rounded-s w-full text-[#D5E7E3] p-1"
            />
          </div>
          <button type="submit" className="submitButton bg-white text-[#000] px-8 py-3 rounded-full cursor-pointer transition hover:bg-blue-500">
            Senden
          </button>
        </form>
      </div>

      {/* Container for Contact Information */}
      <div className="w-1/2 h-full bg-[#E2EFEC] p-[75px] hidden md:inline">
        <img src={KijufiBlack} alt="" />
        <p className="text-base text-[13.44px] mt-2">Landesverband Kinder- und Jugendfilm Berlin e.V. (kijufi)</p>
        <p className="text-base text-[13.44px]">Am Sudhaus 21</p>
        <p className="text-base text-[13.44px]">2053 Berlin</p>
        <p className="text-base text-[13.44px]">Telefon: +49 (0)157 35 70 58 73</p>
        <p className="text-base text-[13.44px]">E-Mail: info@kijufi.de</p>
        <div className="flex pt-4 pb-6">
          {FooterSocial.map((socialItem, index) => (
            <a
              key={index}
              href={socialItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <img
                src={socialItem.image}
                alt={socialItem.alt}
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KontaktForm;
