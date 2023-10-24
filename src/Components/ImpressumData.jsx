import React from 'react';
import bg from '../Assets/vector15.png';

function ImpressumPage() {
  return (
    <section style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center top' }} className="p-5 md:p-10 ">
      <h1 className="font-bold text-[50px] mb-10">Impressum</h1>
      <div>
        <h3 className="font-bold text-[25px]">Landesverband Kinder- & Jugendfilm Berlin e. V. </h3>
        <p className="text-[25px]">Am sudhaus 2</p>
        <p className="text-[25px]">12053 Berlin</p>
        <br></br>
        <p className="text-[25px]">Vereinsregister Amtsgericht Charlottenburg | Registernummer VR 9413 Nz VAT-ID/Umsatzsteuer-Identifikationsnummer DE361265479</p>
        <br></br>
        <h3 className="font-bold text-[25px]">Vertretungsberechtigte Vorstandsmitglieder und verantwortliche Redakteure:</h3>
        <p className="text-[25px] mb-10">
          Max Neu <br /> Ralf Schlotter <br /> Claudia Ziegenfuß
        </p>
        <h3 className="font-bold text-[25px]">UX/UI Designer der Website: </h3>
        <p className="text-[25px] mb-10">Clémence Le Carre - Linkedin-Profil</p>
        <h3 className="font-bold text-[25px]">Webentwickler der Website: </h3>
        <p className="text-[25px] mb-10">
          Josh Beck - <a href="https://www.linkedin.com/in/beckrobertjosh/" target="_blank" rel="noopener noreferrer" className='text-[#E16848]'> https://www.linkedin.com/in/beckrobertjosh/ </a><br />
          Lukas Jülich - Linkedin-Profil <br /> Alexandre Maunoury - Linkedin Profil
        </p>
        <p className="text-[25px] mb-10">
          Ihr erreicht den Landesverband Kinder- & Jugendfilm Berlin e. V. postalisch unter der o. g Adresse, per Mail an <span className="font-bold"> info@kijufi.de </span> oder telefonisch unter <span className="font-bold"> +49 (0) 30 609 51 369</span>
        </p>
        <p className="text-[25px]">
          Landesverband Kinder- und Jugendfilm Berlin e. V <br />
          All rights reserved
        </p>
      </div>
    </section>
  )
}
export default ImpressumPage;