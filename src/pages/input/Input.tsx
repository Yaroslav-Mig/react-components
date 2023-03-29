import { DetailedHTMLProps, InputHTMLAttributes, FC, ReactNode, ChangeEvent } from 'react';
import clsx from 'clsx';
import css from './Input.module.css';

type DefaultInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperInputProps = DefaultInputProps & {
  children?: ReactNode;
  outerClass?: string;
  label?: string;
  error?: string;
};

const { box, input, input_error, box__required, box__label, box__error } = css;

const Input: FC<SuperInputProps> = (props) => {
  const { id, label, error, onChange, ...attrs } = props;

  const classInput = clsx(input, attrs.outerClass, {
    [input_error]: error,
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange?.(e);

  return (
    <div className={box}>
      {attrs.required ? <span className={box__required}>required</span> : null}

      {label ? (
        <label htmlFor={id} className={box__label}>
          {label}
        </label>
      ) : null}

      <input id={id} className={classInput} onChange={changeHandler} {...attrs} />

      {error ? <span className={box__error}>{error}</span> : null}
    </div>
  );
};

export default Input;
