import { useState } from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../button/Button';

const ButtonGroupStand = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const toggleHandler = () => setToggle((prev) => !prev);

  return (
    <>
      <div>
        <h3>1. Horizontal button group:</h3>
        <ButtonGroup>
          <Button>First</Button>
          <Button>Middle</Button>
          <Button isActive>Last</Button>
        </ButtonGroup>
      </div>

      <div>
        <h3>2. Vertical button group:</h3>
        <ButtonGroup isVertical>
          <Button variant='primary'>First</Button>
          <Button variant='primary' isActive>
            Middle
          </Button>
          <Button variant='primary'>Last</Button>
        </ButtonGroup>
      </div>

      <div>
        <h3>3. Switcher button group</h3>
        <ButtonGroup>
          <Button variant='secondary' onClick={toggleHandler} isActive={toggle}>
            On
          </Button>
          <Button variant='secondary' onClick={toggleHandler} isActive={!toggle}>
            Off
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default ButtonGroupStand;
