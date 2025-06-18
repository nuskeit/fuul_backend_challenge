import { SpecialOfferType } from "../../types/special-offer/SpecialOfferType.js";
import { strategyFullPrice } from "./strategyFullPrice.js";
import { strategySpecialBulk } from "./strategySpecialBulk.js";
import { strategySpecialMxN } from "./strategySpecialMxN.js";

export function getAllPricingStrategies() {
	const allPricingStrategies: { [key: string]: Function } = {}
	allPricingStrategies[SpecialOfferType.M_X_N] = strategySpecialMxN
	allPricingStrategies[SpecialOfferType.BULK] = strategySpecialBulk
	allPricingStrategies[SpecialOfferType.NONE] = strategyFullPrice
	return allPricingStrategies
}

export function getPricingStrategy(specialOfferType: SpecialOfferType) {
	return getAllPricingStrategies()[specialOfferType]
}

