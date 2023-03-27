import { DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';
import css from './Badge.module.css';

type DefaultSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

type BadgeType = 'warning' | 'alert' | 'success' | 'info';

type SuperBadgeProps = DefaultSpanProps & {
  value: string | number;
  type?: BadgeType;
  variant?: 'outer';
  outerClass?: string;
  isInline?: boolean;
  isCircle?: boolean;
  defaultWidth?: boolean;
};

const { badge, inline, circle, text } = css;

const Badge = (props: SuperBadgeProps): JSX.Element => {
  const { value, type, className, isInline, isCircle, defaultWidth, variant, ...attrs } = props;

  const classes = clsx(badge, attrs.outerClass, {
    [inline]: isInline,
    [circle]: isCircle,
    [text]: defaultWidth,
    [css[`${type}`]]: type,
    [css[`${variant}`]]: variant,
    [css[`${className}`]]: className,
  });

  return <span className={classes}>{value}</span>;
};

export default Badge;
