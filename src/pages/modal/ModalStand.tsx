import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import Modal from './Modal';
import Button from '../button/Button';
import Badge from '../badge/Badge';

const ModalStand = () => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const btnCallAction = () => {
    setToggleModal(true);
  };
  const submitAction = () => {
    console.log('submit action');
    setToggleModal(false);
  };
  const cancelAction = () => {
    console.log('cancel action');
    setToggleModal(false);
  };

  return (
    <>
      <div>
        <h3>1.Modal window:</h3>
        <Button onClick={btnCallAction}>
          <FontAwesomeIcon icon={faPhone} size='lg' />
          <Badge value='Call' isInline defaultWidth />
        </Button>
        <Modal isOpen={toggleModal} onCancel={cancelAction} onSubmit={submitAction}></Modal>
      </div>
    </>
  );
};

export default ModalStand;
