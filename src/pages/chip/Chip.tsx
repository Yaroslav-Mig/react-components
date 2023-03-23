import { MouseEvent, ReactElement } from 'react';

import { FontAwesomeIconProps, FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import css from './Chip.module.css';
import clsx from 'clsx';

import Image from '../image/Image';

type ChipProps = CommonChipProps & ConditionalChipProps;
type Id = string | number | null;

type CommonChipProps = {
  id?: Id;
  text: string | number;
  className?: string;
  outerClass?: string;
  isActive?: boolean;
  withClose?: boolean;
  onClickChip?: (e: MouseEvent<HTMLDivElement>, id: Id) => void;
  onCloseChip?: (e: MouseEvent<HTMLSpanElement>, id: Id) => void;
};

type ConditionalChipProps =
  | {
      withIcon: boolean;
      renderIcon?: (
        settings: Omit<FontAwesomeIconProps, 'icon'>
      ) => ReactElement<FontAwesomeIconProps>;
      iconSize?: SizeProp;
      withImage?: never;
      imageSrc?: never;
      imgAlt?: never;
    }
  | {
      withIcon?: never;
      renderIcon?: never;
      iconSize?: never;
      withImage?: boolean;
      imageSrc?: string;
      imgAlt?: string;
    };

const Chip = (props: ChipProps): JSX.Element => {
  const {
    id = null,
    text,
    outerClass,
    className,
    isActive,
    withIcon,
    iconSize = 'sm',
    renderIcon,
    withImage,
    imageSrc,
    imgAlt,
    withClose,
    onClickChip,
    onCloseChip,
  } = props;

  const { chip, chipText, chipIcon, chipImage, chipClose, active } = css;

  const classChip = clsx(chip, outerClass, {
    [css[`${className}`]]: className,
    [active]: isActive,
  });

  const clickChipHandler = (e: MouseEvent<HTMLDivElement>) => {
    onClickChip && onClickChip(e, id);
  };

  const closeChipHandler = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    onCloseChip && onCloseChip(e, id);
  };

  const icon = renderIcon && renderIcon({ size: iconSize });

  return (
    <div className={classChip} onClick={clickChipHandler}>
      {withImage ? (
        <span className={chipImage}>
          <Image src={imageSrc} alt={imgAlt} width={26} height={26} />
        </span>
      ) : null}

      {withIcon ? <span className={chipIcon}>{icon}</span> : null}

      <span className={chipText}>{text}</span>

      {withClose ? (
        <span className={chipClose} onClick={closeChipHandler}>
          <FontAwesomeIcon icon={faXmark} />
        </span>
      ) : null}
    </div>
  );
};

export default Chip;
