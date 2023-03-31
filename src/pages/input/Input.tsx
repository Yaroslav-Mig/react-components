import { DetailedHTMLProps, InputHTMLAttributes, FC, ReactNode, ChangeEvent } from 'react';
import clsx from 'clsx';
import css from './Input.module.css';

type DefaultInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperInputProps = DefaultInputProps &
  Partial<{
    children: ReactNode;
    label: string;
    error: string;
    isValid: boolean;
    outerClass: string;
  }>;

const {
  box,
  wrapper,
  wrapper__label,
  input,
  input_error,
  valid,
  box__required,
  box__required_move,
  box__label,
  box__error,
} = css;

const Input: FC<SuperInputProps> = (props) => {
  const { id, type: t, label, error, isValid, children, onChange, ...attrs } = props;

  const classInput = clsx(input, attrs.outerClass, {
    [input_error]: error,
  });
  const isType = t === 'color' || t === 'radio' || t === 'checkbox' || t === 'range';
  const classRequired = clsx(box__required, { [box__required_move]: isType });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange?.(e);

  return (
    <div className={box}>
      {attrs.required ? <span className={classRequired}>required</span> : null}

      {label ? (
        <label htmlFor={id} className={box__label}>
          {label}
        </label>
      ) : null}

      <label className={wrapper}>
        <input id={id} className={classInput} type={t} onChange={changeHandler} {...attrs} />
        {isValid ? <span className={valid}></span> : null}
        {children ? <span className={wrapper__label}>{children}</span> : null}
      </label>

      {error ? <span className={box__error}>{error}</span> : null}
    </div>
  );
};

export default Input;
