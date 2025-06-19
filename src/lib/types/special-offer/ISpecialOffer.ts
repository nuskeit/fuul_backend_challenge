import { SpecialOfferType } from "./SpecialOfferType.js";

export interface ISpecialOffer {
	productCode: string
	type: SpecialOfferType
	conditions: number[]
}

