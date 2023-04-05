import { Navigate, Route, Routes } from 'react-router-dom';

import { PATH } from '../components/Layout';
import ButtonStand from './button/ButtonStand';
import ButtonGroupStand from './button-group/ButtonGroupStand';
import IconStand from './icon/IconStand';
import ImageStand from './image/ImageStand';
import ChipStand from './chip/ChipStand';
import BadgeStand from './badge/BadgeStand';
import InputStand from './input/InputStand';
import TooltipStand from './tooltip/TooltipStand';
import ModalStand from './modal/ModalStand';

const Pages = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={PATH.BUTTON} replace />} />
      <Route path={PATH.BUTTON} element={<ButtonStand />} />
      <Route path={PATH.BUTTON_GROUP} element={<ButtonGroupStand />} />
      <Route path={PATH.ICON} element={<IconStand />} />
      <Route path={PATH.IMAGE} element={<ImageStand />} />
      <Route path={PATH.CHIP} element={<ChipStand />} />
      <Route path={PATH.BADGE} element={<BadgeStand />} />
      <Route path={PATH.INPUT} element={<InputStand />} />
      <Route path={PATH.TOOLTIP} element={<TooltipStand />} />
      <Route path={PATH.MODAL} element={<ModalStand />} />
    </Routes>
  );
};

export default Pages;
