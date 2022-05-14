import React from 'react';
import cn from 'classnames';

const icons = {
  'arrow-bottom':
    'M15.039 3.961c-.653-.653-1.713-.653-2.366 0L8 8.634 3.327 3.961c-.653-.653-1.713-.653-2.366 0s-.653 1.713 0 2.366l5.856 5.856c.653.653 1.713.653 2.366 0l5.856-5.856c.653-.653.653-1.713 0-2.366z',
};

const Icon = (props) => {
  const size = props.size ? props.size : 16;

  return (
    <svg
      className={cn(props.className)}
      width={size}
      height={size}
      viewBox='0 0 16 16'
    >
      <path d={icons[props.name]}></path>
    </svg>
  );
};

export default Icon;
