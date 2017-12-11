import React from "react"
import "./Header.css"

const Header = ({
	title = 'Your Cart',
	add,
	clear,
}) => (
	<header className="header">
		<h1>{title}</h1>
		<span>
			<button onClick={add}>Add</button>
			<button onClick={clear}>Clear</button>
		</span>
	</header>
)

export default Header
