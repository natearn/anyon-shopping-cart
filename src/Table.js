import React from "react"
import { asCurrency, asPercent } from "./format"
import "./Table.css"

const Table = ({
	products,
	remove,
}) => (
	<table className="table">
		<thead>
			<tr>
				<th>#</th>
				<th>Name</th>
				<th>Comments</th>
				<th>Price</th>
				<th>Tax</th>
				<th>Total Items</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			{products.map((item,idx) => (
				<Product
					key={item.id}
					index={idx}
					{...item}
					remove={() => remove(idx)}
				/>
			))}
		</tbody>
	</table>
)

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

export default Table
