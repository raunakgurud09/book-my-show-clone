import Image from 'next/image';
import image from '../../../../public/images/John-wick.jpg';
import React from 'react';
import Link from 'next/link';

function DisplayCard() {
  const name = 'John wick';
  const stats = 'feat quality';
  return (
    <Link href='/movie/' className='w-56 space-y-2'>
      <div className='rounded-xl'>
        <Image
          width={225}
          height={280}
          src={image}
          alt='poster'
          className='fill h-auto w-56 rounded-t-md object-cover'
        />
        <div className='rounded-b-md bg-black p-1 text-white'>{stats}</div>
      </div>
      <div>
        <h4 className='w-full truncate text-lg font-bold'>{name}</h4>
        <p className='h-10 w-full truncate text-base text-gray-600'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.{' '}
        </p>
      </div>
    </Link>
  );
}

export default DisplayCard;
