import { PricingStrategy } from "../types/PricingStrategy.js";
import { SpecialOfferType } from "../types/special-offer/SpecialOfferType.js";
import { getPricingStrategy } from "./pricing-strategies/getAllPricingStrategies.js";

/**
 * Resolver retrieves the method for calculating the pricing strategy, determined
 * by the specialOfferType provided.
 * @param specialOfferType defines the adopted pricing strategy
 * @param strategies for high performance, provide all valid pricing strategies
 * @returns 
 */
export function specialOfferResolver(specialOfferType: SpecialOfferType, strategies?: PricingStrategy) {

	// this is a performance treat:
	// Although the resolver will retrieve the correct logic regardless, when 
	// running a batch, all active pricing trategies should be provided to 
	// prevent getting them individually
	const pricingStrategies = strategies || { [specialOfferType]: getPricingStrategy(specialOfferType) }

	// this covers the case of specialOfferType being empty
	const strategy = pricingStrategies[specialOfferType || SpecialOfferType.NONE]
	if (strategy === undefined)
		// this covers the case of strategy not found
		return pricingStrategies[SpecialOfferType.NONE]

	return strategy
}

