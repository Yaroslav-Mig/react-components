import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import css from './Image.module.css';

type DefaultImageProps = ImgHTMLAttributes<HTMLImageElement>;

type imgRadiusType = 'rounded' | 'oval' | 'circle';

type SuperImageProps = DefaultImageProps & {
  width?: number;
  height?: number;
  radius?: imgRadiusType;
  outerClass?: string;
};

type ImgProps = DefaultImageProps & {
  $width?: number;
  $height?: number;
};

const Img = styled.img<ImgProps>`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
`;

const Image = (props: SuperImageProps): JSX.Element => {
  let {
    src,
    alt = 'image',
    width = 100,
    height,
    className,
    outerClass,
    radius,
    ...attrs
  } = props;

  const { img } = css;

  const classes = clsx(img, outerClass, {
    [css[`${className}`]]: className,
    [css[`${radius}`]]: radius,
  });

  if (!src) {
    src = `https://via.placeholder.com/${width}x${height = width}`;
  }

  return <Img className={classes} src={src} alt={alt} $width={width} $height={height} {...attrs} />;
};

export default Image;
