import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import css from './Chip.module.css';

import Chip from './Chip';
import ChipState from './ChipState';

const ChipStand = () => {
  const onCloseAction = () => {
    console.log('clicked on a close icon');
  };

  return (
    <>
      <div>
        <h3>1. Chip with text:</h3>
        <Chip text='Login name' />
      </div>

      <div>
        <h3>2. Chip with long text:</h3>
        <Chip text='Very long chip text should be cropped' />
      </div>

      <div>
        <h3>3. Chips with icon and close button:</h3>
        <div className={css.box}>
          <Chip
            text='Log in'
            withIcon
            renderIcon={(props) => <FontAwesomeIcon icon={faUser} size={props.size} />}
          />
          <Chip text='Log out' withClose />
        </div>
      </div>

      <div>
        <h3>4. Full chip with icons:</h3>
        <Chip
          text='Barcelona'
          withIcon
          renderIcon={(props) => <FontAwesomeIcon icon={faUser} size={props.size} />}
          withClose
        />
      </div>

      <div>
        <h3>5. Chip with image:</h3>
        <Chip
          text='CSS'
          withImage
          imageSrc='https://cdn-icons-png.flaticon.com/512/732/732190.png'
          imgAlt='css'
        />
      </div>

      <div>
        <h3>6. Chip with images and click to close:</h3>
        <div className={css.box}>
          <Chip
            text='React'
            withImage
            imageSrc='https://cdn-icons-png.flaticon.com/512/753/753244.png'
            imgAlt='react'
            withClose
            onCloseChip={onCloseAction}
          />
          <Chip
            text='Typescript'
            withImage
            imageSrc='https://cdn-icons-png.flaticon.com/512/5968/5968326.png'
            imgAlt='typescript'
            withClose
            onCloseChip={onCloseAction}
          />
          <Chip
            text='Javascript'
            withImage
            imageSrc='https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
            imgAlt='javascript'
            withClose
            onCloseChip={onCloseAction}
          />
				</div>
			</div>

			<div>
        <h3>7. Chip with state, icon, active and remove:</h3>
        <ChipState/>
      </div>
    </>
  );
};

export default ChipStand;
