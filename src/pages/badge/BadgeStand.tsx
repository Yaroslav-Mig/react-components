import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCommentDots,
  faEnvelope,
  faInbox,
  faKey,
  faMessage,
  faPhone,
  faSignal,
	faWifi,
} from '@fortawesome/free-solid-svg-icons';
import css from './Badge.module.css';

import Button from '../button/Button';
import Badge from './Badge';

const BadgeStand = () => {
  return (
    <>
      <h3>1. Badges with text: </h3>
      <Button outerClass={css.btn} variant='primary'>
        <FontAwesomeIcon icon={faEnvelope} size='lg' />
        <Badge value='new' defaultWidth />
      </Button>
      <Button outerClass={css.btn} variant='primary'>
        <FontAwesomeIcon icon={faEnvelope} size='lg' />
        <Badge value='new' isCircle defaultWidth />
      </Button>

      <h3>2. Badges with number: </h3>
      <Button outerClass={css.btn} variant='secondary'>
        <FontAwesomeIcon icon={faMessage} size='lg' />
        <Badge value='17' />
      </Button>
      <Button outerClass={css.btn} variant='secondary'>
        <FontAwesomeIcon icon={faMessage} size='lg' />
        <Badge value='7' isCircle />
      </Button>

      <h3>3. Inline badges: </h3>
      <Button outerClass={css.btn}>
        <FontAwesomeIcon icon={faSignal} size='lg' />
        <Badge value='Check signal' isInline defaultWidth />
      </Button>
      <Button outerClass={css.btn}>
        <FontAwesomeIcon icon={faPhone} size='lg' />
        <Badge value='Call' isInline defaultWidth />
      </Button>

      <h4>4. Warning, alert, success, info badges: </h4>
      <Button outerClass={css.btn} variant='primary'>
        <FontAwesomeIcon icon={faKey} size='lg'/>
        <Badge value='1' type='warning' isCircle />
      </Button>
      <Button outerClass={css.btn} variant='primary'>
        <FontAwesomeIcon icon={faInbox} size='lg'/>
        <Badge value='2' type='alert' isCircle />
			</Button>
			<Button outerClass={css.btn} variant='primary'>
        <FontAwesomeIcon icon={faWifi} size='lg'/>
        <Badge value='1' type='success' isCircle />
			</Button>
			<Button outerClass={css.btn} variant='primary'>
        <FontAwesomeIcon icon={faCommentDots} size='lg'/>
        <Badge value='1' type='info' isCircle />
			</Button>

			<h4>5. Warning, alert, success, info badges: </h4>
      <Button outerClass={css.btn}>
        <FontAwesomeIcon icon={faKey} size='lg'/>
        <Badge value='1' type='warning' variant='outer'/>
      </Button>
      <Button outerClass={css.btn}>
        <FontAwesomeIcon icon={faInbox} size='lg'/>
        <Badge value='2' type='alert' variant='outer'/>
			</Button>
			<Button outerClass={css.btn}>
        <FontAwesomeIcon icon={faWifi} size='lg'/>
        <Badge value='1' type='success' variant='outer'/>
			</Button>
			<Button outerClass={css.btn}>
        <FontAwesomeIcon icon={faCommentDots} size='lg'/>
        <Badge value='1' type='info' variant='outer'/>
      </Button>
    </>
  );
};

export default BadgeStand;
