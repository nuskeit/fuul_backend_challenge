/**
 * Resolves the Full Price strategy
 * @param qty 
 * @param fullPrice 
 * @returns number
 */
export function pricingStrategyFullPrice(qty: number, fullPrice: number) {
	return qty * fullPrice
}
