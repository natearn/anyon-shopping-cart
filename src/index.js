import React from 'react'
import { render } from 'react-dom'
import './index.css'
import Cart from './Cart'
import registerServiceWorker from './registerServiceWorker'

render(
	<Cart />,
	document.getElementById('root')
)
registerServiceWorker()
