import { NftFactory } from "../../lib/factory/NftFactory.js";
import { INft } from "../../lib/types/INft.js";
import { IRepository } from "../../lib/types/IRepository.js";
import { ProducType } from "../../lib/types/products/ProductType.js";
import { Database } from "../database/DatabasePlugIn.js";

export const getProdutsRepo = () => new ProdutsRepo()

class ProdutsRepo implements IRepository<INft> {

	async getAll(): Promise<INft[]> {
		const data = await Database.getNfts()
		return data.map(_ => NftFactory.create(ProducType.NFT, _))
	}

	async getSingle(key: string): Promise<INft> {
		const data = await Database.getNft(key)
		return NftFactory.create(ProducType.NFT, data)
	}
}

