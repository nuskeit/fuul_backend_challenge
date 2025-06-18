/**
 * NONE is the explicit fallback for when it's needed.
 */
export const SpecialOfferType = {
	M_X_N: "M_X_N",
	BULK: "BULK",
	NONE: "NONE",
} as const
export type SpecialOfferType = keyof typeof SpecialOfferType
