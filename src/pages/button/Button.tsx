import { ButtonHTMLAttributes, DetailedHTMLProps, FC, MouseEvent } from 'react';
import clsx from 'clsx';
import css from './Button.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type btnColor = 'default' | 'primary' | 'secondary';

type SuperButtonProps = DefaultButtonPropsType & {
  variant?: btnColor;
  isActive?: boolean;
};

const Button: FC<SuperButtonProps> = (props) => {
  const {
    onClick,
    className,
    variant: btnType = className ? undefined : 'default',
    disabled = false,
    isActive = false,
    ...attrs
  } = props;

  const { btn, btn_disabled } = css;

  const classes = clsx(btn, {
    [css[`${btnType}`]]: btnType,
    [css[`${className}`]]: className,
    [css[`btn__${btnType}_active`]]: isActive,
    [btn_disabled]: disabled,
  });

  const clickAction = (e: MouseEvent<HTMLButtonElement>): void => {
    !attrs.type && e.preventDefault();
    onClick && onClick(e);
  };

  return <button className={classes} onClick={clickAction} disabled={disabled} {...attrs} />;
};

export default Button;
