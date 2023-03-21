// import { icon, library } from '@fortawesome/fontawesome-svg-core';
import Button from '../button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolder,
  faHashtag,
  faCamera,
  faBan,
  faEnvelope,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import css from './Icon.module.css';
import ButtonGroup from '../button-group/ButtonGroup';

const IconStand = () => {
  return (
    <>
      <div>
        <h3>1. Hybrid icons:</h3>
        <div className={`${css.box} fa-lg`}>
          <span className={`${css['span-1']} fa-stack `}>
            <FontAwesomeIcon icon={faFolder} className='fa-stack-2x' />
            <FontAwesomeIcon icon={faHashtag} className='fa-stack-1x' inverse />
          </span>
          <span className='fa-stack'>
            <FontAwesomeIcon icon={faCamera} className='fa-stack-1x' />
            <FontAwesomeIcon icon={faBan} className={`${css.camera} fa-stack-2x`} />
          </span>
          <span
            className={`${css['span-1']} fa-stack`}
            onClick={() => {
              console.log('click');
            }}
          >
            <FontAwesomeIcon
              className={`${css.mask} fa-stack`}
              icon={faHashtag}
              mask={faFolder}
              transform='shrink-7'
            />
          </span>
          <span className={`${css['span-1']} ${css.mask} fa-layers fa-fw fa-2x`}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span className='fa-layers-counter'>7</span>
          </span>
        </div>
      </div>

      <div>
        <h3>2. Button with icon:</h3>
        <Button onClick={() => console.log('Click')}>
          <span>Download </span>
          <FontAwesomeIcon icon={faDownload} size='lg' transform='right-5' />
        </Button>
      </div>

      <div>
        <h3>3. Button group with icons:</h3>
        <ButtonGroup>
          <Button variant='primary' outerClass={css['btn_socials']}>
            <FontAwesomeIcon icon={faTwitter} size='lg'/>
          </Button>
          <Button variant='primary' outerClass={css['btn_socials']}>
            <FontAwesomeIcon icon={faFacebook} size='lg'/>
          </Button>
          <Button variant='primary' outerClass={css['btn_socials']}>
            <FontAwesomeIcon icon={faInstagram} size='lg'/>
          </Button>
          <Button variant='primary' outerClass={css['btn_socials']}>
            <FontAwesomeIcon icon={faLinkedin} size='lg'/>
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default IconStand;
