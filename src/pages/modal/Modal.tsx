import { FC, ReactNode, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import css from './Modal.module.css';

import Button from '../button/Button';

type ModalProps = {
  isOpen: boolean;
  divId?: string;
  title?: string;
  children?: ReactNode;
  onCancel: () => void;
  onSubmit: () => void;
};

const { overlay, box, header, header__title, header__icon, body, footer } = css;
const portalRoot = document.getElementById('portal') as HTMLElement;

const Modal: FC<ModalProps> = (props) => {
  const {
    isOpen,
    title = 'Please, confirm your actions or not',
    divId,
    children,
    onCancel,
    onSubmit,
  } = props;

  const element = useMemo(() => {
    const el = document.createElement('div');
    el.className = overlay;
    divId && el.setAttribute('id', divId);
    return el;
  }, [divId]);

  useEffect(() => {
    if (isOpen) {
      portalRoot.appendChild(element);
      return () => {
        portalRoot.removeChild(element);
      };
    }
  }, [isOpen, element]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={box}>
      <div className={header}>
        <span className={header__title}>{title}</span>
        <FontAwesomeIcon
          icon={faXmark}
          className={header__icon}
          cursor={'pointer'}
          onClick={onCancel}
        />
      </div>
      <div className={body}>{children}</div>
      <div className={footer}>
        <Button onClick={onSubmit}>Submit</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </div>
    </div>,
    element
  );
};

export default Modal;
