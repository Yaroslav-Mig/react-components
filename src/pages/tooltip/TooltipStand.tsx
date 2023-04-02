import Tooltip from './Tooltip';
import Chip from '../chip/Chip';
import Button from '../button/Button';

const TooltipStand = () => {
  return (
    <>
      <div>
        <h3>1. Right tooltip with big description:</h3>
        <Tooltip
          position='right'
          hint="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a pot."
        >
          Mounting
        </Tooltip>
      </div>

      <div>
        <h3>2. Left tooltip with outer styles</h3>
        <Tooltip position='left' hint='Small hint'>
          Text
        </Tooltip>
      </div>

      <div>
        <h3>3. Bottom tooltip of button:</h3>
        <Tooltip position='bottom' hint='Click to add item'>
          <Button>Add</Button>
        </Tooltip>
      </div>

      <div>
        <h3>4. Top tooltip of chip:</h3>
        <Tooltip position='top' hint='Exit from account'>
          <Chip text='Log out' withClose />
        </Tooltip>
      </div>
    </>
  );
};

export default TooltipStand;
