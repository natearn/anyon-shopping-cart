import React from "react"
import { Provider, connect } from "react-redux"
import { createStore } from "redux"
import "./Cart.css"
import Header from "./Header"
import Table from "./Table"
import Summary from "./Summary"

export const Cart = ({
	products,
	add,
	remove,
	clear,
}) => (
	<section className="cart">
		<Header {...{add,clear}} />
		<Table {...{products,remove}} />
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
					tax: ([0.11,0.09,0.13])[(id % 3)]
				}
			]
		default:
			return list
	}
}

// The default export is the stateful, autonomous component

const mapStateToProps = items => ({
	products: items,
})

const mapDispatchToProps = {
	add: () => ({type: "ADD_PRODUCT"}),
	remove: idx => ({type: "REMOVE_PRODUCT", index: idx}),
	clear: () => ({type: "CLEAR_CART"}),
}

export default class AutoCart extends React.Component {
	state = {store: createStore(runCart)}
	render() {
		const CartContainer = connect(mapStateToProps,mapDispatchToProps)(Cart)
		return (
			<Provider store={this.state.store}>
				<CartContainer />
			</Provider>
		)
	}
}
