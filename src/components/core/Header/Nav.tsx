import Link from 'next/link';
import React from 'react';

const navList = [
  {
    name: 'Movie',
    href: '/movie',
  },
  {
    name: 'Stream',
    href: '/steam',
    new: true,
  },
  {
    name: 'Event',
    href: '/event',
  },
  {
    name: 'Play',
    href: '/play',
  },
  {
    name: 'Sports',
    href: '/sports',
  },
  {
    name: 'Activity',
    href: '/activity',
  },
  {
    name: 'Buzz',
    href: '/buzz',
  },
];

const options = [
  { name: 'ListYourShow', href: '/list-your-show', new: true },
  { name: 'Corporate', href: '/corporate' },
  { name: 'Offer', href: '/offer' },
  { name: 'Gift Cards', href: '/gift-card' },
];

function Nav() {
  return (
    <div className='bg-slate-900 hidden lg:flex'>
      <div className='mx-auto flex h-fit max-w-[1240px] w-full items-center justify-between px-2'>
        <div className='flex items-center justify-center space-x-8 text-gray-400'>
          {navList.map((nav) => (
            <div key={nav.name} className='relative  '>
              <Link href={nav.href} className='font-medium text-sm hover:text-gray-100'>
                {nav.name}
              </Link>
              {nav?.new === true && (
                <span className='absolute top-0 right-[0.5] text-[8px] font-semibold text-pink'>
                  NEW
                </span>
              )}
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center space-x-6 text-gray-200'>
          {options.map((nav) => (
            <div key={nav.name} className='relative text-sm py-[10px]'>
              <Link key={nav.name} href={nav.href} className=''>
                {nav.name}
              </Link>
              {nav?.new === true && (
                <span className='absolute top-0 right-[5] text-[8px] font-semibold text-pink'>
                  NEW
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nav;
