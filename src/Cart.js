import React from "react"
import { connect } from "react-redux"
import "./Cart.css"
import Product from "./Product"
import Header from "./Header"
import Summary from "./Summary"

export const Cart = ({
	title,
	products,
	add,
	remove,
	clear,
}) => (
	<section className="cart">
		<Header {...{title,add,clear}} />
		<table>
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
		<Summary {...{products}} />
	</section>
)

// a Redux reducer is just a state machine
let simpleCounter = 1000; // because I'm being lazy right now
export const runCart = (list = [], action) => {
	switch (action.type) {
		case "CLEAR_CART":
			return []
		case "REMOVE_PRODUCT":
			const idx = action.index
			return [
				...list.slice(0,idx),
				...list.slice(idx + 1)
			]
		case "ADD_PRODUCT":
			const id = simpleCounter++
			return [
				...list,
				{
					id: id,
					name: "Product " + id,
					comment: "This is a product comment that is long enough to exceed the size of its container.",
					price: 12.50,
					tax: 0.11,
				}
			]
		default:
			return list
	}
}

// The default export is the stateful component

const mapStateToProps = items => ({
	title: "Your Cart",
	products: items,
})

const mapDispatchToProps = {
	add: () => ({type: "ADD_PRODUCT"}),
	remove: idx => ({type: "REMOVE_PRODUCT", index: idx}),
	clear: () => ({type: "CLEAR_CART"}),
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
