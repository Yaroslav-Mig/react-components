import { FC, ReactNode, useState } from 'react';

import clsx from 'clsx';
import styled from 'styled-components';
import css from './Tooltip.module.css';

type TooltipProps = {
  children: ReactNode;
  hint: string;
  position: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  outerClass?: string;
};

const Span = styled.span<{ $width?: number }>`
  width: ${(props) => props.$width}px;
`;

const { box, text, content } = css;

const Tooltip: FC<TooltipProps> = (props) => {
  const { children, hint, position, className, outerClass } = props;
  const [visible, setVisible] = useState<boolean>(false);

  const classHint = clsx(text, outerClass, {
    [css[`${className}`]]: className,
    [css[`${position}`]]: position,
  });

  let width = Math.ceil(hint.length / 10) * 10;
  width = width <= 70 ? 70 : width;

  const mouseEnterHandler = () => setVisible(true);
  const mouseLeaveHandler = () => setVisible(false);

  return (
    <div className={box}>
      {visible && (
        <Span className={classHint} $width={width}>
          {hint}
        </Span>
      )}

      <span className={content} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
        {children}
      </span>
    </div>
  );
};

export default Tooltip;
