import React from 'react';

const Contact = () => {
  return (
    <div className="m-width-[1240px] m-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-center p-4">
        Let's work together !
      </h1>
      <form className="max-w-[600px] m-auto">
        <div className='grid grid-cols-2 gap-2'>
          <input className='border shadow-lg p-3 rounded-xl hover:bg-black/10' type="text" placeholder="Name" />
          <input className='border shadow-lg p-3 rounded-xl hover:bg-black/10' type="email" placeholder="Email" />
        </div>
        <input  className='border shadow-lg p-3 w-full my-2 rounded-xl hover:bg-black/10' type="text" placeholder="Subject" />
        <textarea className='border shadow-lg p-3 w-full rounded-xl hover:bg-black/10' cols="30" rows="10" placeholder="Message..."></textarea>
        <button className='border shadow-lg p-3 w-full mt-3 rounded-xl hover:bg-black/10'>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
