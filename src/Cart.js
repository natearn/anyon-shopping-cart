import React from "react"

import "./Cart.css"

const Cart = ({
	title,
	products,
	add,
	remove,
	clear,
}) => (
	<section className="cart">
		<header>
			<h1>{title}</h1>
			<button onClick={add}>Add</button>
			<button onClick={clear}>Clear</button>
		</header>
		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Comments</th>
					<th>Price</th>
					<th>Tax</th>
					<th>Total</th>
				</tr>
			</thead>
			<tbody>
				{products.map((item,idx) => (
					<CartRow
						key={item.id}
						index={idx}
						remove={() => remove(item)}
						{...item}
					/>
				))}
			</tbody>
		</table>
	</section>
)

const calcTotal = (price,tax) => price * (1 + tax)

const CartRow = ({
	index,
	remove,
	name,
	comment,
	price,
	tax,
}) => (
	<tr>
		<td>{index}</td>
		<td>{name}</td>
		<td>{comment}</td>
		<td>{price}</td>
		<td>{tax}</td>
		<td>{calcTotal(price,tax)}</td>
		<td><button onClick={remove}>×</button></td>
	</tr>
)

export default Cart
