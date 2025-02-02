import React from 'react';
import logo from '../assets/logo.png';

function Hero() {
  return (
    <div className="hero flex flex-col items-center justify-center text-center min-h-screen p-6">
      <img src={logo} alt="Logo" className="w-[300px] h-auto mb-4" />
      <h2 className="text-lg md:text-2xl font-medium max-w-2xl font-mono">
        Dedicated to more than just providing a service, we are passionate about creating a world of hope, opportunity, and togetherness.
      </h2>
    </div>
  );
}

export default Hero;
