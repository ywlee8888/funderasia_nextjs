import React from 'react';

const WhatsApp: React.FC = () => {
  const whatsappLink = "https://wa.me/6584118213";

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-200 animate-bounce"
    >
      <img 
        src="/img/whatsapp-chat.png" 
        alt="Chat on WhatsApp" 
        className="w-40 h-auto sm:w-44 md:w-48 lg:w-64 hover:scale-110 transition-transform duration-300"
      />
    </a>
  );
};

export default WhatsApp;
