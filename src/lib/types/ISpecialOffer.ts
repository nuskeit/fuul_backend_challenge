import { SpecialOfferConditions } from "./special-offer/SpecialOfferConditions.js";
import { SpecialOfferType } from "./special-offer/SpecialOfferType.js";

export interface ISpecialOffer {
	productCode: string
	type: SpecialOfferType
	descrip: string
	conditions: SpecialOfferConditions
}

