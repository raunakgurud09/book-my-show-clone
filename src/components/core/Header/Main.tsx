import { Play, PlayIcon, PlaylistIcon, SearchIcon } from '@/components/Icons';
import { MenuIcon } from '@/components/Icons/MenuIcon';
import FillBtn from '@/components/ui/Buttons/FillBtn';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/logo.png';

function Main() {
  return (
    <div className=' bg-slate-800 py-3'>
      <div className='m-auto flex  h-full max-w-[1500px] items-center justify-between px-10'>
        <div className='flex space-x-4'>
          <Link href='/' className='h-full w-32'>
            <Image
              width={40}
              height={20}
              src={logo}
              alt='logo'
              className='h-full w-full object-cover'
            />
          </Link>
          <div className='flex h-9 items-center'>
            <div className='flex h-full items-center justify-center rounded-l-[4px] bg-white px-2'>
              <SearchIcon className='h-5 w-5 text-zinc-400' />
            </div>
            <input
              type='text'
              placeholder='Search for Movies, Events, Plays, Sports and Activities'
              className='h-9 w-[500px] rounded-r-[4px] border-none  p-2 text-zinc-200 focus:border-none '
            />
          </div>
        </div>
        <div className='flex items-center justify-between space-x-8'>
          <div className='flex items-center space-x-2 cursor-pointer px-2 py-1 text-white'>
            <p>Mumbai</p>
            <div className='h-4 w-4 rotate-90'>
              <Play />
            </div>
          </div>
          <FillBtn text='sign up' cns='px-2 py-1' />
          <span
            className='w-10 cursor-pointer fill-current text-white hover:text-primary-500'
            aria-label='navigation menu'
            role='button'
          >
            <MenuIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Main;
