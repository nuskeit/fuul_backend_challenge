import { getProdutsRepo } from "../data/repo/ProdutsRepo.js";
import { getSpecialOffersRepo } from "../data/repo/SpecialOffersRepo.js";
import { createCart } from "../lib/types/cart/createCart.js";
import { pricingStrategyResolver } from "../lib/pricing/pricingStrategyResolver.js";
import { SpecialOfferType } from "../lib/types/special-offer/SpecialOfferType.js";

export async function getTotalPrice(inlineProd: string[]) {

	// Create cart first: NFT, Quantity
	const cart = createCart(inlineProd)

	const specialOfferRepo = getSpecialOffersRepo()
	const prodRepo = getProdutsRepo()

	const f = async () => {
		// **All independent requsts must run in parallel**
		const allPrices = await Promise.all(Object.keys(cart).map(async key => {

			const promiseNft = prodRepo.getSingle(key)
			const promiseSpecialOffer = specialOfferRepo.getSingle(key)

			return Promise.all([promiseNft, promiseSpecialOffer]).then(values => {
				const nft = values[0]
				const specialOffer = values[1]

				let price = 0
				// resolve the pricing logic according to all the possible cases and make
				// the calculations.
				price = pricingStrategyResolver(specialOffer?.type || SpecialOfferType.NONE)(
					cart[key].quantity,
					nft.price,
					specialOffer?.conditions
				)
				return price
			})
		}))

		// finally, add all final prices in the cart
		return allPrices.reduce((a, b) => a + b)
	}

	// return Promise.
	return f()
}



