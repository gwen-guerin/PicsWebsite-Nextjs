import Image from 'next/image';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const InstagramImg = ({ socialImg }) => {
  return (
    <div className="relative">
      <Image
        src={socialImg}
        alt="/"
        className="w-full h-full"
        style={{ layout: 'responsive' }}
      />
      <div className="flex justify-center items-center absolute inset-0 hover:bg-black/50 group">
        <p className="text-gray-300 hidden group-hover:block">
          <FaInstagram size={30} />
        </p>
      </div>
    </div>
  );
};

export default InstagramImg;
