import { SpecialOfferType } from "../lib/types/special-offer/SpecialOfferType.js";
import { pricingStrategyBulk } from "./services/pricingStrategyBulk.js";
import { pricingStrategyFullPrice } from "./services/pricingStrategyFullPrice.js";
import { pricingStrategyMxN } from "./services/pricingStrategyMxN.js";

/**
 * retrieves all the possible strategy executable logic to be used by the Resolver.
 * (This could be connected to an external service) 
 * @returns HashMap<Functions>
 */
export function getAllPricingStrategies() {
	const allPricingStrategies: { [key: string]: Function } = {}
	allPricingStrategies[SpecialOfferType.M_X_N] = pricingStrategyMxN
	allPricingStrategies[SpecialOfferType.BULK] = pricingStrategyBulk
	allPricingStrategies[SpecialOfferType.NONE] = pricingStrategyFullPrice
	return allPricingStrategies
}

export function getPricingStrategy(specialOfferType: SpecialOfferType) {
	return getAllPricingStrategies()[specialOfferType]
}

