import { useState, ChangeEvent, FocusEvent } from 'react';
import Input from './Input';

const InputState = () => {
  const [text, setText] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

  const errorStr = 'Empty input';

  const onChangeAction = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setText(e.currentTarget.value.trimStart());
    error && setError('');
  };

  const onBlurAction = (): void => {
    !text.trim() && setError(errorStr);
	};

  const onFocusAction = (): void => setError('');

  return (
    <>
      <Input
        id='user'
        type='search'
        value={text}
        label='enter text:'
        error={error}
        required
        onChange={onChangeAction}
        onBlur={onBlurAction}
        onFocus={onFocusAction}
      />
    </>
  );
};

export default InputState;
