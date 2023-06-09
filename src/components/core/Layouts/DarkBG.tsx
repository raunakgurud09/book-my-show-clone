function DarkBG({ children }) {
  return (
    <div className='bg-stone-900 text-white'>
      <div className='m-auto flex h-full max-w-[1240px] items-center justify-between px-2 '>
        {children}
      </div>
    </div>
  );
}

export default DarkBG;
