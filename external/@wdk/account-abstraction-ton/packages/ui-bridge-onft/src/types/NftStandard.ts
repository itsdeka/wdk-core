export type NftStandard = 'ERC1155' | 'ERC721';
export const NftStandard = {
  ERC1155: 'ERC1155' as NftStandard,
  ERC721: 'ERC721' as NftStandard,
} as const;
