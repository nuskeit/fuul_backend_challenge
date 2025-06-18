import { NftDto } from "../../lib/types/dto/NftDto.js"
import { SpecialOfferDto } from "../../lib/types/dto/SpecialOfferDto.js"

export class Database {

	// Fake for NFTs
	static async getNfts(): Promise<NftDto[]> {
		const data = [
			{
				code: "APE",
				name: "Bored Apes",
				price: 75
			},
			{
				code: "PUNK",
				name: "Crypto Punks",
				price: 60
			},
			{
				code: "MEEBIT",
				name: "Meebits",
				price: 4
			},
		]
		return data
	}

	// Fake for NFT
	static async getNft(code: string): Promise<NftDto | undefined> {
		const data = await this.getNfts()
		return data.find(_ => _.code == code)
	}

	// Fake for SpecialOffers
	static async getSpecialOffers(): Promise<SpecialOfferDto[]> {
		const data = [
			{
				productCode: "APE",
				type: "M_X_N",
				conditions: { every: 2, pay: 1 }
			}, {
				productCode: "PUNK",
				type: "BULK",
				conditions: { min: 3, price: 50 }
			},
		]
		return data
	}

	// Fake for SpecialOffer
	static async getSpecialOffer(productCode: string): Promise<SpecialOfferDto | undefined> {
		const data = await Database.getSpecialOffers()
		return data.find(_ => _.productCode === productCode)
	}

	// Fake for Purchases
	static async getPurchases(): Promise<string[][]> {
		const data = [
			["APE", "PUNK", "MEEBIT"],
			["APE", "PUNK", "APE"],
			["PUNK", "PUNK", "PUNK", "APE", "PUNK"],
			["APE", "PUNK", "APE", "APE", "MEEBIT", "PUNK", "PUNK"],
		]
		return data
	}

	// Fake for Purchase
	static async getPurchase(index: number): Promise<string[] | undefined> {
		const data = await Database.getPurchases()
		return data[index]
	}
}