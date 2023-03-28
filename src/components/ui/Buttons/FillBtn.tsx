import React from 'react';
import cx from 'classnames';

function FillBtn({ text, cns }) {
  return (
    <div className={cx('rounded-[4px] bg-pink-600 cursor-pointer w-fit h-fit text-white', cns)}>
      {text}
    </div>
  );
}

export default FillBtn;
