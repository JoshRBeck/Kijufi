import React, { useState, useRef } from "react";
import emailjs from "emailjs-com"
import KijufiBlack from "../Assets/KijufiBlack.png"
import instagramb from '../Assets/InstaB.png';
import facebookb from '../Assets/Rename.png';
import youtubeb from '../Assets/YoutubeB.png';
import Mb from '../Assets/MatadorB.png';
import Btn from "./Btn";

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
    user_name: "",
    user_email: "",
    betreff: "",
    nachricht: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    formData.contact_number = (Math.random() * 100000) | 0;

    emailjs.sendForm('service_prd51ot', 'template_nujrddd', form.current, 'DysyzFqogBK_AC4Rs')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-row-reverse">
      {/* Container for Contact Form */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center mx-auto border border-solid border-gray-300 shadow-lg bg-[#E16848]">
        <h2 className="text-[16px] font-regular text-white pb-8">📩 Wir freuen uns von dir zu hören!</h2>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center">
          <input type="hidden" name="contact_number" />
          <div className="mb-4">
            <input
              type="text"
              name="user_name"
              id="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-full rounded-lg border-black border p-2 placeholder-[#9CA3AF]::placeholder"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="user_email"
              id="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className="w-full rounded-lg border-black border p-2 placeholder-[#9CA3AF]::placeholder"
              placeholder="Email"
            />
          </div>
          <div className="w-full mb-4">
            <input
              type="text"
              name="betreff"
              id="betreff"
              value={formData.betreff}
              onChange={handleChange}
              className="w-full rounded-lg border-black border p-2 placeholder-[#9CA3AF]::placeholder"
              placeholder="Betreff"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="nachricht"
              id="nachricht"
              value={formData.nachricht}
              onChange={handleChange}
              className="w-full rounded-lg border-black border p-2 placeholder-[#9CA3AF]::placeholder"
              placeholder="Nachricht"
            ></textarea>
          </div>
          <Btn
            text="Senden"
            backgroundColor="bg-white"
            hoverColor="hover:[#B8D4CE]"
            padding="px-8 py-3"
            fontSize="text-black"
            customClasses="w-fit"
          />
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
