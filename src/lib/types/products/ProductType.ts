export const ProducType = {
	NFT: "NFT",
} as const
export type ProducType = keyof typeof ProducType
