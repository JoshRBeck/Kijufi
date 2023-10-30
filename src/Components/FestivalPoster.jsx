import React from 'react';
import poster from "../Assets/Poster.png"
import instagram from '../Assets/instagram.png';
import facebook from '../Assets/facebook.png';
import youtube from '../Assets/youtube.png';
import M from '../Assets/M.png';


const FooterSocial = [
  {
    link: 'https://www.instagram.com/kijufi/',
    image: instagram,
    alt: 'instagram',
  },
  {
    link: 'https://www.facebook.com/kijufi/',
    image: facebook,
    alt: 'facebook',
  },
  {
    link: 'https://www.youtube.com/@kijufi',
    image: youtube,
    alt: 'youtube',
  },
  {
    link: 'https://bildung.social/@kijufi',
    image: M,
    alt: 'M',
  },
];

function FestivalPoster() {
  return (
    <div className='max-[768px]:flex flex-col p-3'>
      <div className='flex text-left justify-start pl-10'>
        <h1 className="font-bold text-[16px] md:text-[50px] mt-10">
          Holen Sie sich das Festivalposter hier
        </h1>
      </div>
      <div className='flex flex-row content-center align-center w-full'>
        <img src={poster} alt="festival poster" className='w-1/2 md:h-auto  p-10 rounded-lg' />
        <div className='p-10'>
          <div className='flex flex-col items-center justify-around h-1/2'>
            <h3 className="font-bold text-[16px] md:text-[30px] mb-12 pt-14">Click here to get the poster as PDF</h3>
            <svg width="140" height="140" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className='hidden md:flex'>
              <g id="ph:arrow-left-bold">
                <path id="Vector" d="M23.5584 5.15433C24.1441 5.15433 24.7058 5.38702 25.12 5.8012C25.5342 6.21537 25.7669 6.77712 25.7669 7.36286L25.7669 34.4173L35.247 24.9354C35.6619 24.5205 36.2246 24.2874 36.8114 24.2874C37.3981 24.2874 37.9608 24.5205 38.3757 24.9354C38.7906 25.3503 39.0237 25.913 39.0237 26.4997C39.0237 27.0865 38.7906 27.6492 38.3757 28.0641L25.1246 41.3153C24.9194 41.5212 24.6756 41.6845 24.4071 41.796C24.1387 41.9075 23.8509 41.9648 23.5602 41.9648C23.2695 41.9648 22.9817 41.9075 22.7133 41.796C22.4448 41.6845 22.201 41.5212 21.9958 41.3153L8.74466 28.0641C8.53923 27.8587 8.37627 27.6148 8.26508 27.3464C8.1539 27.078 8.09668 26.7903 8.09668 26.4997C8.09668 26.2092 8.1539 25.9215 8.26508 25.6531C8.37627 25.3847 8.53923 25.1408 8.74466 24.9354C8.9501 24.7299 9.19399 24.567 9.4624 24.4558C9.73082 24.3446 10.0185 24.2874 10.309 24.2874C10.5996 24.2874 10.8873 24.3446 11.1557 24.4558C11.4241 24.567 11.668 24.7299 11.8734 24.9354L21.3498 34.4173L21.3498 7.36286C21.3498 6.77712 21.5825 6.21537 21.9967 5.8012C22.4109 5.38702 22.9726 5.15433 23.5584 5.15433Z" fill="#D5E7E3" />
              </g>
            </svg>
            <a
              href="https://wolke.kijufi.org/s/MqCYG2t6CaTAwom"
              download="platzhalter-flyer-2.pdf"
              className="btn bg-[#E16848] text-white font-bold text-[16px] md:text-[25px] py-2 px-4 rounded-full mt-4"
              rel="noopener noreferrer"
              target="_blank"
            >
              Download
            </a>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center h-1/2">
            <div>
              <h3 className='font-bold text-[30px] pb-5'>In sozialen Netzwerken teilen</h3>
            </div>
            <div className='hidden md:flex flex-row'>
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
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FestivalPoster;
