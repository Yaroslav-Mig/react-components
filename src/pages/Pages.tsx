import { Navigate, Route, Routes } from 'react-router-dom'

import { PATH } from '../components/Layout'
import ButtonStand from './button/ButtonStand'
import ButtonGroupStand from './button-group/ButtonGroupStand'

const Pages = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Navigate to={PATH.BUTTON} replace />}/>
			<Route path={PATH.BUTTON} element={<ButtonStand />}/>
			<Route path={PATH.BUTTON_GROUP} element={<ButtonGroupStand />}/>
		</Routes>
	)
}

export default Pages