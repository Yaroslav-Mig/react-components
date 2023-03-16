import Button from './Button';
import css from './Button.module.css';

const ButtonStand = () => {
  return (
    <>
      <div>
        <h3>1. Default buttons, hover effect, active and onClick function:</h3>
        <div className={css.box}>
          <Button onClick={() => console.log('I`m button')}>Button default</Button>
          <Button onClick={() => console.log('I`m button')} btnType='primary'>
            Button primary
          </Button>
          <Button onClick={() => console.log('I`m button')} btnType='secondary'>
            Button secondary
          </Button>
        </div>
      </div>

      <div>
        <h3>2. Active buttons and hover effect:</h3>
        <div className={css.box}>
          <Button isActive>Button active</Button>
          <Button btnType='primary' isActive>
            Button active
          </Button>
          <Button btnType='secondary' isActive>
            Button active
          </Button>
        </div>
      </div>

      <div>
        <h3>3. Disabled buttons:</h3>
        <div className={css.box}>
          <Button disabled>Button disabled</Button>
          <Button btnType='primary' disabled>
            Button disabled
          </Button>
          <Button btnType='secondary' disabled>
            Button disabled
          </Button>
        </div>
      </div>

      <div>
        <h3>4. Supporting data, type and etc. attributes</h3>
        <div className={css.box}>
          <Button data-name='button' btnType='primary'>
            Button disabled
          </Button>
          <Button type='submit' btnType='secondary'>
            Button disabled
          </Button>
        </div>
      </div>

      <div>
        <h3>5. Private class:</h3>
        <div className={css.box}>
          <Button className='outline'>Button</Button>
        </div>
      </div>
    </>
  );
};

export default ButtonStand;
