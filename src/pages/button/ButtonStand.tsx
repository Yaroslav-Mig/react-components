import React from 'react'
import Button from './Button'

const ButtonStand = () => {
	return (
		<>
			<div>
				<h3>1. Different buttons, hover effect and onClick function:</h3>
				<Button onClick={() => console.log('I`m button')}>
					Button default
				</Button>
				<Button onClick={() => console.log('I`m button')} btnType='primary'>
					Button primary
				</Button>
				<Button onClick={() => console.log('I`m button')} btnType='secondary'>
					Button secondary
				</Button>
			</div>

		</>
	)
}

export default ButtonStand