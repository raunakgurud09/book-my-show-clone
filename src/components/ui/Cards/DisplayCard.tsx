import Image from 'next/image';
import image from '../../../../public/images/John-wick.jpg';
import React from 'react';

function DisplayCard() {
  const name = 'John wick';
  const stats = "feat quality"
  return (
    <div className='space-y-2 w-56'>
      <div className='rounded-xl'>
        <Image
          width={225}
          height={280}
          src={image}
          alt="poster"
          className='fill rounded-t-md w-56 h-auto object-cover'
        />
        <div className='bg-black rounded-b-md p-1 text-white'>{stats}</div>
      </div>
      <div>
        <h4 className='font-bold text-lg w-full truncate'>{name}</h4>
        <p className='text-base text-gray-600 h-10 w-full truncate'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
      </div>
    </div>
  );
}

export default DisplayCard;
