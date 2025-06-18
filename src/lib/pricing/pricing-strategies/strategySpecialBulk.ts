import { IConditionsBulk } from "../../types/special-offer/SpecialOfferConditions.js";

export function strategySpecialBulk(qty: number, fullPrice: number, conditions: IConditionsBulk) {
	let accum = 0
	if (qty >= conditions.min)
		accum += qty * conditions.price
	else
		accum += qty * fullPrice

	return accum
}