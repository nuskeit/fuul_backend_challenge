import { SpecialOfferFactory } from "../../lib/factory/SpecialOfferFactory.js";
import { IRepository } from "../../lib/types/IRepository.js";
import { ISpecialOffer } from "../../lib/types/ISpecialOffer.js";
import { Database } from "../database/DatabasePlugIn.js";

export const getSpecialOffersRepo = () => new SpecialOffersRepo()

class SpecialOffersRepo implements IRepository<ISpecialOffer> {

	async getAll(): Promise<ISpecialOffer[]> {
		const data = await Database.getSpecialOffers()
		return data.map(_ => SpecialOfferFactory.create(_.type, _))
	}

	async getSingle(key: string | number): Promise<ISpecialOffer | undefined> {
		const data = await Database.getSpecialOffer(key.toString())
		if (data === undefined) return
		return SpecialOfferFactory.create(data?.type, data)
	}

}

