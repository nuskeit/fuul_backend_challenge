
// Specific conditions for each Special Offer.
// Add one for every new Special Offer.
export interface IConditionsMxN { every: number, pay: number }
export interface IConditionsBulk { min: number, price: number }

/**
 * All possible types unifier
 */
export type SpecialOfferConditions = IConditionsMxN | IConditionsBulk
