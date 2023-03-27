import { SearchIcon } from '@/components/Icons';
import { MenuIcon } from '@/components/Icons/MenuIcon';
import FillBtn from '@/components/ui/Buttons/FillBtn';
import React from 'react';

function Main() {
  return (
    <div className=' bg-slate-800 py-6'>
      <div className='m-auto flex h-full max-w-[1500px] items-center justify-between px-3'>
        <div className='flex '>
          <div className='h-full w-32'>Logo</div>
          <div className='flex items-center '>
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
          <div className='text-white'>place</div>
          <FillBtn text='sign up' />
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
