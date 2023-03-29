import Input from './Input';
import InputState from './InputState';

const InputStand = () => {
  return (
    <>
      {/* <div>
        <h3>1. Input type text:</h3>
        <Input id='user' type='search' label='enter text:' error='error' required />
			</div> */}

			<div>
        <h3>2. Input state:</h3>
        <InputState/>
			</div>
    </>
  );
};

export default InputStand;
