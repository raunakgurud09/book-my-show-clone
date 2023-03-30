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
import React, { useState } from 'react';
import Image from 'next/image';
import ChoseCity from '@/components/ui/Modal/ChoseCity';

function Main() {
  const [show, setShow] = useState(true);
  const [cityName, setCityName] = useState('Mumbai');

  const handleSelectCities = () => {
    console.log('change city');
  };

  return (
    <div className=' bg-slate-800 py-3'>
      <div className='m-auto flex  h-full max-w-[1240px] items-center justify-between px-2'>
        <div className='flex items-center space-x-2'>
          <Link
            href='/'
            className='flex h-full w-24 items-center justify-center'
          >
            <BookMyShow />
          </Link>
          <div className='flex h-9 items-center'>
            <div className='flex h-full items-center justify-center rounded-l-[4px] bg-white px-2'>
              <SearchIcon className='h-5 w-5 text-zinc-400' />
            </div>
            <input
              type='text'
              placeholder='Search for Movies, Events, Plays, Sports and Activities'
              className='h-9 w-[500px] rounded-r-[4px] border-none p-2  text-zinc-200 focus:border-none active:border-none '
            />
          </div>
        </div>
        <div className='flex items-center justify-between space-x-4'>
          <div>
            <div
              className='flex cursor-pointer items-center space-x-2 px-2 py-1 text-white'
              onClick={() => setShow(true)}
            >
              <p className='text-sm'>{cityName}</p>
              <div className='h-3 w-3 rotate-90'>
                <Play />
              </div>
            </div>
            <ChoseCity
              show={show}
              onClose={() => setShow(false)}
              setName={setCityName}
            />
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
