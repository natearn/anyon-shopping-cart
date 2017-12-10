import React from "react"

import "./Cart.css"
import Product from "./Product"

const dummyData = {
    title: "A Title",
    products: [1,2,3,4].map(id => ({
        id: id,
        name: "Product " + id,
        comment: "This is a product comment that is long enough to exceed the size of its container.",
        price: 12.50,
        tax: 0.11,
    })),
    add: () => console.log("ADD"),
    remove: ({name}) => console.log("REMOVE " + name),
    clear: () => console.log("CLEAR"),
}

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
			<span>
				<button onClick={add}>Add</button>
				<button onClick={clear}>Clear</button>
			</span>
		</header>
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
	</section>
)



})


export default () => Cart(dummyData)
