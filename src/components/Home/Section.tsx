import { Movies } from '@/data/Movies';
import Link from 'next/link';
import React from 'react';
import DisplayCard from '../ui/Cards/DisplayCard';

function Section({ text }) {
  return (
    <div className='w-full space-y-4 py-8'>
      <div className='flex items-center justify-between'>
        <h3 className='text-2xl font-bold'>{text}</h3>
        <Link href='/' className='text-sm text-pink'>
          see more &gt;
        </Link>
      </div>
      <div className='span-x relative flex w-full overflow-x-auto'>
        <span className='absolute top-1/3 left-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-700/80 font-bold text-white'>
          <p>&lt;</p>
        </span>
        <div className='left-0 flex items-center space-x-9'>
          {Movies.map((movie) => (
            <>
              <DisplayCard
                key={movie.name}
                href={movie.href}
                imageUrl={movie.imageUrl}
                name={movie.name}
                previewText={movie.previewText}
              />
            </>
          ))}
        </div>
        <span className='absolute top-1/3 right-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-700/80 font-bold text-white'>
          <p>&gt;</p>
        </span>
      </div>
    </div>
  );
}

export default Section;
