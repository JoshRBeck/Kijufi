import React from 'react';

function MailTo() {
  const recipientEmail = 'armin.beber@kijufi.de';

  const handleClick = () => {
    window.location.href = `mailto:${recipientEmail}`;
  };

  return (
    <div className='flex justify-center align-middle p-5'>
      <button onClick={handleClick} className='bg-[#E16848] text-lg text-white rounded-full p-4'>Kontakt Uns</button>
    </div>
  );
}

export default MailTo;