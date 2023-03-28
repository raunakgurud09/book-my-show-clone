function DarkBG({ children }) {
  return (
    <div className='bg-stone-900 '>
      <div className='m-auto flex h-full max-w-[1500px] items-center justify-between px-10 '>
        {children}
      </div>
      ;
    </div>
  );
}

export default DarkBG;
