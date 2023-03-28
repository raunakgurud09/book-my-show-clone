import Image from 'next/image';
import React from 'react';
import image from '../../../public/images/adv.png';

function Advertisement() {
  return (
    <div className='w-full'>
      <Image
        src={image}
        alt='advertisement'
        className='h-28 rounded-lg w-full object-cover'
      />
    </div>
  );
}

export default Advertisement;
