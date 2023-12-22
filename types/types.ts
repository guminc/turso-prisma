import { z } from "zod";

export const userStatusEnums = ["active", "pending"] as const;
export const UserStatusEnum = z.enum(userStatusEnums);

export type IMintInfo = {
  value_decimal?: string;
  value?: string;
  max_to_mint?: number;
  mint_image?: string;
  public_mint_date?: string | Date;
} | null;

export type IUser = {
  username: string | null;
  address: string;
  address_lowercase: string;
  avatar_uri: string;
  banner_uri: string;
  description: string;
  joined_time: Date;
  token?: string;
  nonce: number;
  signature?: string;
  isActiveUser?: boolean;
  accessToken?: string;
  is_valid_affiliate?: boolean;
  is_super_affiliate?: boolean;
  super_affiliate_code?: string;
  ens?: string;
};

export type ICollection = {
  name: string;
  floor_price: number;
  max_items: number | number[];
  num_items: number;
  mint_info?: IMintInfo;
  symbol: string;
  token_address?: string;
  token_address_lowercase?: string;
  description: string;
  trait_types: string[];
  trait_details?: Record<string, Record<string, number>>;
  banner_uri: string;
  avatar_uri: string;
  hero_uri?: string;
  verified: boolean;
  creator: string;
  creator_data?: Pick<
    IUser,
    "avatar_uri" | "username" | "address" | "address_lowercase" | "ens"
  >;
  num_owners: number;
  discord: string;
  telegram: string;
  twitter: string;
  private_chat_url: string;
  royalties_address: string;
  royalties: number;
  isHidden?: boolean;
  sort_order?: number;
  is_mint_active?: boolean;
  custom_mint_function?: string;
  website?: string;
  is_archetype?: boolean;
  created_at: Date;
  legendary_cutoff?: number;
  epic_cutoff?: number;
  rare_cutoff?: number;
  uncommon_cutoff?: number;
  common_cutoff?: number;
  is_DMCA: boolean;
  contract_version: number;
  public_mint_date: Date;
  maxBatchSize: number;
  affiliate_percent: number;
  trait_counts?: Record<string, Record<string, number>>;
  medium?: string;
  socials: Partial<{
    opensea: string;
    looksrare: string;
    blur: string;
    nftx: string;
    sudoswap: string;
    x2y2: string;
  }>;
  contract_type?: IContractType;
  isSubpageOnly?: boolean;
  slug: string;
  height?: number;
  width?: number;
  width_custom?: number;
  num_total_items?: number;
  affiliatePrivate?: boolean;
  affiliateSignupLink?: string;
  proof_cached?: boolean;
  discounts?: IDiscount;
  isPending?: boolean;
  mint_data?: IMintData;
  floor?: {
    floorPriceRaw: string;
    floorPriceDecimal: number;
    updated_at: string;
  };
  mint_sales?: IMintSales;
  ownerAltPayout?: string;
  superAffiliatePayout?: string;
  last_refreshed?: string;
};

export type IMintSales = {
  last_12h_decimal?: number;
  last_1h_decimal?: number;
  last_24h_decimal?: number;
  last_7d_decimal?: number;
  last_6h_decimal?: number;
  last_1m_decimal?: number;
  last_6m_decimal?: number;
  all_time_decimal?: number;
  all_time_raw?: string;
  updated_at?: string;
};

export type IDiscount = {
  affiliateDiscount: number;
  mintTiers: IMintTier[];
};

export type IContractType =
  | "dutch"
  | "ERC721"
  | "ERC1155"
  | "ERC1155-Random"
  | "curve";

export type IMintTier = {
  numMints: number;
  mintDiscount: number; // BPS
};

export type IMintData = {
  time_last_mint?: number;
  mints_last_1h?: number;
  mints_last_12h?: number;
  mints_last_24h?: number;
  mints_last_7d?: number;
  date_last_mint?: string;
} | null;

export type INft = {
  _id?: string;
  token_address_lowercase: string;
  token_id: string;
  amount?: string;
  attributes: IAttribute[];
  contract_type: string;
  external_url?: string;
  image_url: string;
  name: string;
  old_image_url: string;
  token_address: string;
  uri_name?: string;
  network: string;
  token_id_int: number;
  description: string;
  frozen?: number;
  is_valid?: number;
  metadata: string;
  old_image: string;
  original_name?: string;
  owner_of: string;
  owner_of_lowercase: string;
  symbol?: string;
  synced_at?: Date;
  syncing?: number;
  token_uri: string;
  uploaded_at?: Date;
  website?: string;
  is_DMCA?: boolean;
  open_rarity?: {
    rank: number;
    score: number;
    unique_attributes: number;
  };
  image_url_shrunk?: string;
  width?: number;
  height?: number;
  animation_url?: string;
  vrm_url?: string;
  width_custom?: number;
  owners?: Record<string, number>; // only ERC1155
  max_items?: number; // only ERC1155
  num_items?: number; // only ERC1155
};

export type IAttribute = { trait_type: string; value: string };
