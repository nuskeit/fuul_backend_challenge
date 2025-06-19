
/**
 * Resolves the strategy buy at least MIN items, and pay SPECIAL_PRICE
 * @param qty purchased quantity
 * @param fullPrice 
 * @param conditions 0:MIN, 1:SPECIAL_PRICE
 * @returns number
 */
export function pricingStrategyBulk(
	qty: number,
	fullPrice: number,
	conditions: [number, number]) {
	const [min, price] = conditions

	let accum = 0
	if (qty >= min)
		accum += qty * price
	else
		accum += qty * fullPrice

	return accum
}