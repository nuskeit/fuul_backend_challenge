import { IRepository } from "../../lib/types/IRepository.js";
import { Database } from "../database/DatabasePlugIn.js";

export const getPurchasesRepo = () => new PurchasesRepo()

class PurchasesRepo implements IRepository<string[]> {

	async getAll(): Promise<string[][]> {
		const data = await Database.getPurchases()
		return data
	}

	async getSingle(index: number): Promise<string[] | undefined> {
		const data = await Database.getPurchase(index)
		return data
	}
}

