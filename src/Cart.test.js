import React from 'react'
import { render } from 'react-dom'
import CartApp,{ Cart } from './Cart'

test('the pure cart renders without crashing', () => {
	const div = document.createElement('div')
	render(<Cart />, div);
})

test('the self-contained cart renders without crashing', () => {
	const div = document.createElement('div')
	render(<CartApp />, div);
})
