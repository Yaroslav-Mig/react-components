import { ButtonHTMLAttributes, DetailedHTMLProps, FC, MouseEvent } from 'react';
import clsx from 'clsx';
import css from './Button.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type colorStr = 'default' | 'primary' | 'secondary';

type SuperButtonProps = DefaultButtonPropsType & {
  btnType?: colorStr;
};

const Button: FC<SuperButtonProps> = (props) => {
  const { onClick, className, btnType = 'default', disabled, ...attr } = props;
  const { btn } = css;

  const styles = clsx(btn, className, { [css[`${btnType}`]]: btnType });

  const clickAction = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    onClick && onClick(e);
  };

  return <button className={styles} onClick={clickAction} disabled={disabled} {...attr} />;
};

export default Button;
