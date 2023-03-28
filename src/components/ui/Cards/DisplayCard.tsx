import Image from 'next/image';
import image from '../../../../public/images/John-wick.jpg';
import React from 'react';
import Link from 'next/link';

function DisplayCard({ href, imageUrl, name, previewText }) {
  return (
    <Link href={href} className='w-56 space-y-2'>
      <div className='rounded-xl'>
        <Image
          width={225}
          height={280}
          src={imageUrl}
          alt='poster'
          className='fill h-auto w-56 rounded-t-md object-cover'
        />
        {/* <div className='rounded-b-md bg-black p-1 text-white'>{stats}</div> */}
      </div>
      <div>
        <h4 className='w-full truncate text-lg font-bold'>{name}</h4>
        <p className='h-10 w-full truncate text-base text-gray-600'>
          {previewText}
        </p>
      </div>
    </Link>
  );
}

export default DisplayCard;
