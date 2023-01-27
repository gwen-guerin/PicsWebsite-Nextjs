import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('white');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Lino_
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex ">
          <li className="p-4 hover:scale-125 ease-in duration-100">
            <Link href="/">HOME</Link>
          </li>
          <li className="p-4 hover:scale-125 ease-in duration-100">
            <Link href="/#gallery">GALLERY</Link>
          </li>
          <li className="p-4 hover:scale-125 ease-in duration-100">
            <Link href="/work">WORK</Link>
          </li>
          <li className="p-4 hover:scale-125 ease-in duration-100">
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose
              className="hover:cursor-pointer"
              size={20}
              style={{ color: `${textColor}` }}
              onClick={() => handleNav()}
            />
          ) : (
            <AiOutlineMenu
              className="hover:cursor-pointer"
              size={20}
              style={{ color: `${textColor}` }}
              onClick={() => handleNav()}
            />
          )}
        </div>
        <div
          className={
            nav
              ? 'sm:hidden absolute inset-0 flex items-center justify-center w-full h-screen bg-black/90 text-center ease-in duration-200'
              : 'sm:hidden absolute inset-0 left-[-100%] flex items-center justify-center w-full h-screen bg-black/90 text-center ease-in duration-200'
          }
        >
          <ul className="font-bold">
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">HOME</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#gallery">GALLERY</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/work">WORK</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
