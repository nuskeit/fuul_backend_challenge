import { Factory } from "../types/factory-asociated-types/Factory.js";
import { INft } from "../types/INft.js";
import { ProducType } from "../types/products/ProductType.js";
import { safeType } from "../util/safeType.js";

export class NftFactory implements Factory<INft> {

	static create<T>(typeName?: string, paramsObject?: object): T {
		return new this().create(typeName, paramsObject) as unknown as T
	}

	create(typeName?: string, paramsObject?: object): INft {
		// NFT
		if (typeName === ProducType.NFT) {
			return {
				code: safeType<string>(paramsObject, "code"),
				name: safeType<string>(paramsObject, "name"),
				price: safeType<number>(paramsObject, "price")
			}
		}

		// Every typeName must be addressed!
		throw new Error("SpecialOfferFactory: unhandled typeName " + typeName)
	}
}
