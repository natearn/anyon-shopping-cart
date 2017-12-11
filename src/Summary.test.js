import React from 'react'
import { render } from 'react-dom'
import Summary from './Summary'

test('renders without crashing', () => {
	const div = document.createElement('div')
	render(<Summary />, div);
})
