function LightBG({ children }) {
  return (
    <div className='bg-slate-100/90 '>
      <div className='m-auto flex h-full max-w-[1240px] items-center justify-between px-2 '>
        {children}
      </div>
    </div>
  );
}

export default LightBG;
