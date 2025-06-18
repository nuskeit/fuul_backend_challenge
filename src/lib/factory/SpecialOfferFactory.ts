import { Factory } from "../types/factory-asociated-types/Factory.js";
import { ISpecialOffer } from "../types/ISpecialOffer.js";
import { IConditionsBulk, IConditionsMxN } from "../types/special-offer/SpecialOfferConditions.js";
import { SpecialOfferType } from "../types/special-offer/SpecialOfferType.js";
import { safeType } from "../util/safeType.js";

export class SpecialOfferFactory implements Factory<ISpecialOffer> {


	static create<T>(typeName?: string, paramsObject?: object): T {
		return new this().create(typeName, paramsObject) as unknown as T
	}

	create(typeName?: string, paramsObject?: object): ISpecialOffer {

		// **********************************************************************
		// Every new special offer must have its conditions object assigned here, 
		// so the resolver can automatically calculate the appropriate price.
		// **********************************************************************

		// M_X_N Special
		if (typeName === SpecialOfferType.M_X_N) {
			const conditions = safeType<IConditionsMxN>(paramsObject, "conditions")
			return {
				productCode: safeType<string>(paramsObject, "productCode"),
				type: SpecialOfferType.M_X_N,
				descrip: `For every ${conditions.every}, pay ${conditions.pay}`,
				conditions
			}
		}

		// BULK Special
		if (typeName === SpecialOfferType.BULK) {

			const productCode = safeType<string>(paramsObject, "productCode")
			const conditions = safeType<IConditionsBulk>(paramsObject, "conditions")
			const min = safeType<number>(conditions, "min")
			const price = safeType<number>(conditions, "price")

			return {
				productCode,
				type: SpecialOfferType.BULK,
				descrip: `Take ${min} and above and pay ${price} each`,
				conditions
			}
		}

		// Every typeName must be addressed!
		throw new Error("SpecialOfferFactory: unhandled typeName " + typeName)
	}
}
