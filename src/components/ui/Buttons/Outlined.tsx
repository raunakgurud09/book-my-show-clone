export default function OutlinedButton({ text }: any) {
  return (
    <>
      <button className='rounded-3xl border-2 border-indigo-800 px-4 py-2.5 text-sm  font-medium text-indigo-800 dark:border-indigo-500 dark:text-indigo-500'>
        {text}
      </button>
    </>
  );
}
