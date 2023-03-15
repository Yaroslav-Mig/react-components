import { Navigate, Route, Routes } from 'react-router-dom'
import { PATH } from '../components/Layout'

import ButtonStand from './button/ButtonStand'

const Pages = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Navigate to={PATH.BUTTON} replace />}/>
			<Route path={PATH.BUTTON} element={<ButtonStand />}/>
		</Routes>
	)
}

export default Pages