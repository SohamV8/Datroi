import React from 'react';
import office from '../assets/office.webp';
import { IonIcon } from "@ionic/react";
import { callOutline, mailOutline, locationOutline, logoInstagram, logoFacebook, paperPlane } from "ionicons/icons";

function ContactInfo() {
  return (
    <form action="" method="post">
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left Section */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={office}
                alt="Contact Us"
                className="w-full h-full object-cover"
              />
              <h1 className="absolute top-6 left-6 text-white text-4xl font-bold drop-shadow-md">
                Contact Us
              </h1>
              <div 
  style={{
    background: 'rgba(255, 255, 255, 0.85)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(2px)',
    WebkitBackdropFilter: 'blur(2px)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.18)'
  }} 
  className="absolute bottom-0 left-0 w-full p-6 lg:p-8 space-y-6"
>

                <ContactDetail
                  icon={callOutline}
                  text="+91 98711 30487"
                  link="tel:+91 9871130487"
                />
                <ContactDetail
                  icon={mailOutline}
                  text="mantermeditation@gmail.com"
                  link="mailto:mantermeditation@gmail.com"
                />
                <ContactDetail
                  icon={locationOutline}
                  text="6C, Sector-14, Mehrauli Road, Gurugram"
                />
                <h3 className="text-xl font-semibold mt-6">Follow Us</h3>
                <div className="flex space-x-6">
                  <SocialMedia
                    icon={logoInstagram}
                    link="https://www.instagram.com/astro_pathshala/"
                  />
                  <SocialMedia
                    icon={logoFacebook}
                    link="https://www.facebook.com/astro.pathshala/"
                  />
                  <SocialMedia
                    icon={paperPlane}
                    link="https://t.me/astro_pathshala"
                  />
                </div>
              </div>
            </div>

            {/* Right Section */}
             <div className="bg-gray-50 p-8 lg:p-12 rounded-2xl shadow-lg">
              <h2 className="text-4xl font-semibold text-black mb-8 font-ANTQUAB">
                Send Us A Message
              </h2>
              <div className="space-y-6">
                <InputField type="text" placeholder="Name" />
                <InputField type="email" placeholder="Email" />
                <InputField type="tel" placeholder="Phone" />
                <InputField type="text" placeholder="Message" />
                <button
                  type="submit"
                  className="w-full h-12 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition duration-300"
                >
                  Send
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-center text-black mb-8 font-ANTQUAB">
            Our Location
          </h2>
          <div className="w-full h-96 overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2236159947297!2d77.05042757528288!3d28.47281157575236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d198fa3f1b1e7%3A0x6c50eccf3e518447!2sAstro%20Pathshala!5e0!3m2!1sen!2sin!4v1736150464288!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Astro Pathshala Location"
            ></iframe>
          </div>
        </div>
      </section>
    </form>
  );
}

// Reusable ContactDetail Component
const ContactDetail = ({ icon, text, link }) => (
  <a
    href={link || '#'}
    className="flex items-center space-x-4 text-base text-gray-700 hover:text-indigo-600"
  >
    <IonIcon icon={icon} className="text-2xl text-indigo-600" />
    <span>{text}</span>
  </a>
);

// Reusable SocialMedia Component
const SocialMedia = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-75 transition-opacity"
  >
    <IonIcon icon={icon} className="text-2xl" />
  </a>
);

// Reusable InputField Component
const InputField = ({ type, placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full h-12 px-4 bg-white border border-gray-300 rounded-full shadow-sm placeholder-gray-400 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
    required
  />
);

export default ContactInfo;
