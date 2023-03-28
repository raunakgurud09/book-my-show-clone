import React from 'react';
import image from '../../../../public/images/John-wick.jpg';
import Image from 'next/image';

function LiveEventsCard() {
  return (
    <div>
      <Image
        width={224}
        height={224}
        src={image}
        alt='live events'
        className='h-56 w-56 rounded-xl object-cover'
      />
    </div>
  );
}

export default LiveEventsCard;
