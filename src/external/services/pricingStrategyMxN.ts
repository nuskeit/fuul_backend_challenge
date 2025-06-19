
/**
 * Resolves the strategy every M items, pay N
 * @param qty purchased quantity
 * @param fullPrice 
 * @param conditions 0:M, 1:N
 * @returns number
 */
export function pricingStrategyMxN(qty: number, fullPrice: number, conditions: [number, number]) {
	const [every, pay] = conditions

	let accum = 0
	const rest = (qty % every)
	accum += rest * fullPrice

	const q = qty - rest
	accum += q * fullPrice / (every / pay)

	return accum
}