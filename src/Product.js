import React from "react"
import "./Product.css"

const Product = ({
	index,
	name,
	comment,
	price,
	tax,
	remove,
}) => {

	// TODO: make locale and currency configurable
	let locale = 'de-DE'
	let currency = 'EUR'

	const asPercent = n => n.toLocaleString(locale,{style:"percent"})

	const asCurrency = n => n.toLocaleString(locale,{
		style: "currency",
		currency: currency,
	})

	const total = asCurrency(price * (1 + tax))

	return (
		<tr className="product">
			<td>{index}</td>
			<td>{name}</td>
			<td>{comment}</td>
			<td>{asCurrency(price)}</td>
			<td>{asPercent(tax)}</td>
			<td>{total}</td>
			<td><button onClick={remove}>×</button></td>
		</tr>
	)
}

export default Product
