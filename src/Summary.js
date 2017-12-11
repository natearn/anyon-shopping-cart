import React from "react"
import "./Summary.css"
import { asCurrency, asPercent } from "./format"

const Summary = ({products}) => {

	const taxes = products.reduce(
		(ts,{price,tax}) => {
			// looks like this is the idiomatic way to create
			// variable keys in JavaScript objects (mutation)
			ts[tax] = (price * tax) + (ts[tax] || 0)
			return ts
		},
		{}
	)
	const totalTax = Object.values(taxes).reduce((sum,val) => sum + val, 0)
	const netTotal = products.reduce((sum,{price}) => sum + price, 0)
	const grandTotal = netTotal + totalTax

	// TODO: more appropriate mark-up for this
	// FIXME: parsing the keys back into numbers is a code smell
	return (
		<section className="summary">
			<div>
				<h2>Net Total<span>{asCurrency(netTotal)}</span></h2>
			</div>
			<div>
				<h2>Tax<span>{asCurrency(totalTax)}</span></h2>
				{Object.keys(taxes).map(Number.parseFloat).map(tax =>
					<SubTax key={tax} amount={tax} total={taxes[tax]} />
				)}
			</div>
			<div>
				<h2>Grand Total<span>{asCurrency(grandTotal)}</span></h2>
			</div>
		</section>
	)
}

const SubTax = ({
	amount,
	total,
}) => (
	<div className="subtax">
		<span>↳ {asPercent(amount)}</span>
		<span>{asCurrency(total)}</span>
	</div>
)

export default Summary
