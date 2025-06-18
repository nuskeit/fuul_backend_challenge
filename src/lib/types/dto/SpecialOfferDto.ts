export type SpecialOfferDto = {
	productCode: string,
	type: string,
	conditions: { every: number, pay: number } | { min: number, price: number }
}