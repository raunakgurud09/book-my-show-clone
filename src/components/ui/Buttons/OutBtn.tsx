import React from 'react';

function OutBtn({ icon, text, cns }) {
  return (
    <div className=' flex'>
      <div className='w-6 h-6'>{icon}</div>
      <div>{text}</div>
    </div>
  );
}

export default OutBtn;
