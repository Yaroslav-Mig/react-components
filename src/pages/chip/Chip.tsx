import { ComponentType, MouseEvent } from 'react';
import { FontAwesomeIconProps, FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      Icon: ComponentType<FontAwesomeIconProps>;
      withImage?: never;
      imageSrc?: never;
      imgAlt?: never;
    }
  | {
      withIcon?: never;
      Icon?: never;
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
    Icon,
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

  return (
    <div className={classChip} onClick={clickChipHandler}>
      {withImage ? (
        <span className={chipImage}>
          <Image src={imageSrc} alt={imgAlt} width={26} height={26} />
        </span>
      ) : null}

      {withIcon ? (
        <span className={chipIcon}>
          <Icon icon={['fas', 'user']} size='sm' />
        </span>
      ) : null}

      <span className={chipText}>{text}</span>

      {withClose ? (
        <span className={chipClose} onClick={closeChipHandler}>
          <FontAwesomeIcon icon={['fas', 'xmark']} />
        </span>
      ) : null}
    </div>
  );
};

export default Chip;
