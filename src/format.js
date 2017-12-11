
// TODO: make locale and currency configurable
const locale = 'de-DE'
const currency = 'EUR'

export const asPercent = n => n.toLocaleString(locale,{style:"percent"})

export const asCurrency = n => n.toLocaleString(locale,{
	style: "currency",
	currency: currency,
})
