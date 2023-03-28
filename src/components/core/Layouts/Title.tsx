function Title({ title, children }) {
  return (
    <div className='flex flex-col py-10 w-full h-fit space-y-2'>
      <h3 className="font-bold text-3xl ">{title}</h3>
      <div>{children}</div>
      <span className="border-b-2 border-gray-400 w-2/3"></span>
    </div>
  );
}

export default Title;
