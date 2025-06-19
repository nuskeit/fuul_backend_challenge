import { HashMap } from "../types/HashMap.js";
import { SpecialOfferType } from "../types/special-offer/SpecialOfferType.js";
import { getPricingStrategy } from "../../external/PricingStrategiesPort.js";

type PricingStrategiesContainer = HashMap<Function>

/**
 * Resolver retrieves the method for calculating the pricing strategy, determined
 * by the specialOfferType provided.
 * @param specialOfferType defines the adopted pricing strategy
 * @param strategies for high performance, provide all valid pricing strategies
 * @returns 
 */
export function pricingStrategyResolver(specialOfferType: SpecialOfferType, 
	strategies?: PricingStrategiesContainer) {

	// For performance reasons, when running a batch, all active pricing 
	// trategies should be provided, to prevent getting them individually.
	// When running 'live', the resolver will retrieve the correct logic 
	// at the time of transaction.
	const pricingStrategies = strategies 
	|| { [specialOfferType]: getPricingStrategy(specialOfferType) }

	// in case specialOfferType is empty
	const strategy = pricingStrategies[specialOfferType || SpecialOfferType.NONE]
	if (strategy === undefined)
		// in case strategy is not found
		return pricingStrategies[SpecialOfferType.NONE]

	return strategy
}

