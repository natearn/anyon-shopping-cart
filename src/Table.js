import React from "react"
import Product from "./Product"
import "./Table.css"

const Table = ({
	products,
	remove,
}) =>
(
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

export default Table
