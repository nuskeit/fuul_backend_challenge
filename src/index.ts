import { getPurchasesRepo } from "./data/repo/PurchasesRepo.js";
import { getTotalPrice } from "./services/getTotalPrice.js";

(async () => {

	const purchasesRepo = getPurchasesRepo()
	const testPurchases = await purchasesRepo.getAll()

	testPurchases.forEach(async purchase => {
		const finalPrice = await getTotalPrice(purchase)
		console.log('\nInbound:', purchase, '\nFinal price:', finalPrice, "\n");
	})

})();