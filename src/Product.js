import React from "react"
import "./Product.css"
import { asCurrency, asPercent } from "./format"

const Product = ({
	index,
	name,
	comment,
	price,
	tax,
	remove,
}) => {

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
