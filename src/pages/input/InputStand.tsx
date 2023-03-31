import Input from './Input';
import InputState from './InputState';

const InputStand = () => {
  return (
    <>
      <div>
        <h3>1. Input type text with error and empty input:</h3>
        <Input id='text' type='text' value='' error='empty input' />
      </div>

      <div>
        <h3>2. Input type number (with label):</h3>
        <Input id='number' type='number' label='select number' />
      </div>

      <div>
        <h3>3. Input type week with label:</h3>
        <Input id='week' type='week' label='week' />
      </div>

      <div>
        <h3>4. Input type file </h3>
        <Input id='file' type='file' />
      </div>

      <div>
        <h3>5. Input type password with required:</h3>
        <Input id='password' type='password' label='enter password' required />
      </div>

      <div>
        <h3>6. Input type color with required:</h3>
        <Input id='file' type='color' required/>
      </div>

      <div>
        <h3>7. Input type range with onChange:</h3>
        <Input id='range' type='range' onChange={() => console.log('change range')} />
      </div>

      <div>
        <h3>8. Input type radio with disabled:</h3>
				<Input id='radio' type='radio' disabled>Confirm</Input>
      </div>

      <div>
        <h3>9. Input state with label, required, error, valid and children:</h3>
        <InputState />
      </div>
    </>
  );
};

export default InputStand;
