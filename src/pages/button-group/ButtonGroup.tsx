import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import css from './ButtonGroup.module.css';

type ButtonGroupProps = {
  children: ReactNode;
  className?: string;
  isVertical?: boolean;
};

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  const { children, className, isVertical = false, ...attrs } = props;
  const { box, vertical } = css;
  const classes = clsx(box, { [vertical]: isVertical });

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};

export default ButtonGroup;
