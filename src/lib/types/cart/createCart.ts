import { Cart } from "./Cart.js";

export function createCart(inlineProd: string[]): Cart {

	const cart = new Cart()

	inlineProd.forEach(nft => {
		cart[nft] = { desc: nft, quantity: (cart[nft]?.quantity || 0) + 1 }
	})

	return cart

}