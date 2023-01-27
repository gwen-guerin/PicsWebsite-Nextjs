import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">Travel pics</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src="https://images.unsplash.com/photo-1572491671313-e2bb1bf15e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
            alt="/"
            className="w-full h-full hover:scale-[102%] hover:rounded-xl ease-in duration-150"
            width={677}
            height={451}
          />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1590493965042-c37d4d6962be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt="/"
            className="w-full h-full hover:scale-105 hover:rounded-xl ease-in duration-150"
            // style={{ layout: 'responsive', objectFit: 'cover' }}
            width={215}
            height={217}
          />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1591942397307-78802c663e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
            alt="/"
            className="w-full h-full hover:scale-105 hover:rounded-xl ease-in duration-150"
            // style={{ layout: 'responsive', objectFit: 'cover' }}
            width={215}
            height={217}
          />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1503104538136-7491acef4d5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="/"
            className="w-full h-full hover:scale-105 hover:rounded-xl ease-in duration-150"
            // style={{ layout: 'responsive', objectFit: 'cover' }}
            width={215}
            height={217}
          />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="/"
            className="w-full h-full hover:scale-105 hover:rounded-xl ease-in duration-150"
            // style={{ layout: 'responsive', objectFit: 'cover' }}
            width={215}
            height={217}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
