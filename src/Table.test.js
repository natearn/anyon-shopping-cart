import React from 'react'
import { render } from 'react-dom'
import Table from './Table'

test('renders without crashing', () => {
	const div = document.createElement('div')
	render(<Table />, div);
})
