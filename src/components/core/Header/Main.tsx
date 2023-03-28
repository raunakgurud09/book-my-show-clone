import {
  BookMyShow,
  Play,
  PlayIcon,
  PlaylistIcon,
  SearchIcon,
} from '@/components/Icons';
import { MenuIcon } from '@/components/Icons/MenuIcon';
import FillBtn from '@/components/ui/Buttons/FillBtn';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function Main() {

  const handleSelectCities = () =>{
    console.log("change city")
  }

  return (
    <div className=' bg-slate-800 py-3'>
      <div className='m-auto flex  h-full max-w-[1240px] items-center justify-between px-2'>
        <div className='flex space-x-2 items-center'>
          <Link href='/' className='h-full w-24 flex items-center justify-center'>
            <BookMyShow />
          </Link>
          <div className='flex h-9 items-center'>
            <div className='flex h-full items-center justify-center rounded-l-[4px] bg-white px-2'>
              <SearchIcon className='h-5 w-5 text-zinc-400' />
            </div>
            <input
              type='text'
              placeholder='Search for Movies, Events, Plays, Sports and Activities'
              className='h-9 w-[500px] rounded-r-[4px] active:border-none border-none  p-2 text-zinc-200 focus:border-none '
            />
          </div>
        </div>
        <div className='flex items-center justify-between space-x-4'>
          <div className='flex cursor-pointer items-center space-x-2 px-2 py-1 text-white' onClick={handleSelectCities}>
            <p className='text-sm'>Mumbai</p>
            <div className='h-3 w-3 rotate-90'>
              <Play />
            </div>
          </div>
          <FillBtn text='sign up' cns='px-4 py-1 text-sm' />
          <span
            className='w-6 cursor-pointer fill-current text-white hover:text-primary-500'
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
