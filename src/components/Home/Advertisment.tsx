import Image from 'next/image';
import React from 'react';
import image from '../../../public/images/adv.png';
import LightBG from '../core/Layouts/LightBG';

function Advertisement() {
  return (
    <LightBG>
      <div className='w-full'>
        <Image
          src={image}
          alt='advertisement'
          className='h-28 w-full rounded-lg object-cover'
        />
      </div>
    </LightBG>
  );
}

export default Advertisement;
