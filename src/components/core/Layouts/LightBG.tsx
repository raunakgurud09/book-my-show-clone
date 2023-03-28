function LightBG({ children }) {
  return (
    <div className='bg-slate-100/90 '>
      <div className='m-auto flex h-full max-w-[1500px] items-center justify-between px-10 '>
        {children}
      </div>
    </div>
  );
}

export default LightBG;
