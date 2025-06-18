import { IConditionsMxN } from "../../types/special-offer/SpecialOfferConditions.js";

export function strategySpecialMxN(qty: number, fullPrice: number, conditions: IConditionsMxN) {
	let accum = 0
	const rest = (qty % conditions.every)
	accum += rest * fullPrice

	const q = qty - rest
	accum += q * fullPrice / (conditions.every / conditions.pay)

	return accum
}