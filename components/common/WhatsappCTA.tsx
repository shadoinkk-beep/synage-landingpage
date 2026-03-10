"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappCTA() {
  const phoneNumber = "919811312400"; // your number with country code
  const message = "Hello! I am interested in your services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}