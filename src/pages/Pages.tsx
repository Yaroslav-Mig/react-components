import { Navigate, Route, Routes } from 'react-router-dom'
import { PATH } from '../components/Layout'

import Button from './button/Button'

const Pages = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Navigate to={PATH.BUTTON} replace />}/>
			<Route path={PATH.BUTTON} element={<Button />}/>
		</Routes>
	)
}

export default Pages