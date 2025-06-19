import { Factory } from "../types/factory-asociated-types/Factory.js";
import { ISpecialOffer } from "../types/special-offer/ISpecialOffer.js";
import { SpecialOfferType } from "../types/special-offer/SpecialOfferType.js";
import { safeType } from "../util/safeType.js";

export class SpecialOfferFactory implements Factory<ISpecialOffer> {

	static create<T>(typeName?: string, paramsObject?: object): T {
		return new this().create(typeName, paramsObject) as unknown as T
	}

	create(typeName?: string, paramsObject?: object): ISpecialOffer {

		if (typeName && typeName in Object.keys(SpecialOfferType)) throw new Error(`SpecialOfferFactory: ` +
			`the Special Offer type ${typeName} does not exist.`)

		const productCode = safeType<string>(paramsObject, "productCode")
		const conditions = safeType<number[]>(paramsObject, "conditions")

		return {
			productCode,
			type: typeName as SpecialOfferType,
			conditions
		}

	}
}
