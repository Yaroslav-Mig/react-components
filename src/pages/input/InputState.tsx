import { useState, ChangeEvent } from 'react';
import Input from './Input';

const menuList = [
  { id: '1', name: 'French fries', isChoose: false },
  { id: '2', name: 'Vegetable salad', isChoose: false },
  { id: '3', name: 'Soup', isChoose: false },
  { id: '4', name: 'Pork chop', isChoose: false },
  { id: '5', name: 'Roast chicken', isChoose: false },
] as { id: string; name: string; isChoose: boolean }[];

const InputState = () => {
  const [text, setText] = useState<string>('');
  const [error, setError] = useState<string>('');
	const [menu, setMenu] = useState(menuList);

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

  const chooseMeals = (id: string, status: boolean): void => {
		const updatedOrder = menu.map((el) => (el.id === id ? { ...el, isChoose: status } : el));
		setMenu(updatedOrder)
  };

  const mappedMenu = menu.map((el) => {
    const onChangeAction = (e: ChangeEvent<HTMLInputElement>): void => {
      chooseMeals(el.id, e.currentTarget.checked);
    };

    return (
      <div key={el.id}>
				<Input
					key={el.id}
          id={el.id}
          type='checkbox'
          checked={el.isChoose}
          onChange={onChangeAction}
        >
          {el.name}
        </Input>
      </div>
    );
  });

  return (
    <form>
      <Input
        id='user'
        type='email'
        value={text}
        label='enter e-mail:'
        error={error}
        required
        isValid
        onChange={onChangeAction}
        onBlur={onBlurAction}
        onFocus={onFocusAction}
      />
      <fieldset>
        <legend>Choose your meals for order</legend>
        {mappedMenu}
      </fieldset>
    </form>
  );
};

export default InputState;
