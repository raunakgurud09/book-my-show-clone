import cx from 'classnames';
import { useTheme } from 'next-themes';
import React from 'react';

function Line() {
  const { theme } = useTheme();

  return (
    <div
      id='line'
      className={cx(
        ' border-[0.25px]',
        theme === 'light' ? 'border-black' : 'border-black/75'
      )}
    ></div>
  );
}

export default Line;
