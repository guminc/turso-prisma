import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { getAddress } from 'ethers'
import { userStatusEnums } from '../types'

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['Serializable']);

export const CollectionScalarFieldEnumSchema = z.enum(['id','name','max_items','max_batch_size','symbol','creator_address','is_hidden','sort_order','is_mint_active','is_archetype','is_pending','discounts','owner_alt_payout','super_affiliate_payout','contract_version','slug','mint_info','socials','token_address','token_address_lowercase','trait_counts','avatar_uri','banner_uri','description','hero_uri','twitter','website','discord','num_items','num_owners','last_refreshed','user_id','created_at','updated_at']);

export const NftScalarFieldEnumSchema = z.enum(['id','token_address','token_address_lowercase','token_id','attributes','block_minted','contract_type','description','dna','edition','image','image_url','metadata','name','network','old_image_url','old_token_uri','owner_of','token_id_int','token_uri','collection_id','created_at','updated_at']);

export const MintDataScalarFieldEnumSchema = z.enum(['id','block_last_mint','date_last_mint','mints_last_1h','mints_last_12h','mints_last_24h','mints_last_7d','mints_last_1m','mints_last_6m','floor_price_raw','floor_price_decimal','all_time_raw','all_time_decimal','last_12h_decimal','last_1h_decimal','last_24h_decimal','last_7d_decimal','last_1m_decimal','last_6m_decimal','date_last_sale','collection_id','created_at','updated_at']);

export const OpenRarityScalarFieldEnumSchema = z.enum(['id','rank','score','unique_attributes','nft_id','created_at','updated_at']);

export const UserScalarFieldEnumSchema = z.enum(['id','address','avatar_uri','banner_uri','username','description','ens','status','email','created_at','updated_at']);

export const ConnectionScalarFieldEnumSchema = z.enum(['id','provider_name','provider_id','created_at','updated_at','user_id']);

export const PasswordScalarFieldEnumSchema = z.enum(['hash','user_id']);

export const ChainScalarFieldEnumSchema = z.enum(['id','slug','name','symbol','is_testnet','created_at','updated_at']);

export const WalletScalarFieldEnumSchema = z.enum(['id','address','owner_id','chain_id','created_at','updated_at']);

export const SessionScalarFieldEnumSchema = z.enum(['id','expiration_date','user_id','wallet_id','user_agent','locale','ip_address','nonce','created_at','updated_at']);

export const PermissionScalarFieldEnumSchema = z.enum(['id','action','entity','access','description','created_at','updated_at']);

export const RoleScalarFieldEnumSchema = z.enum(['id','name','description','created_at','updated_at']);

export const MintSaleTransactionScalarFieldEnumSchema = z.enum(['id','transaction_hash','block_number','timestamp','token_address','value_decimal','value_raw','from','created_at','updated_at']);

export const InstarevealCollectionScalarFieldEnumSchema = z.enum(['id','address','paths','created_at','updated_at']);

export const ReferralScalarFieldEnumSchema = z.enum(['id','collection_address','referral_amount_eth','referral_amount_wei','affiliate','transaction_hash','minter_ens','txn_value','date','block_number','affiliate_ens','created_at','updated_at']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// COLLECTION SCHEMA
/////////////////////////////////////////

export const CollectionSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  max_items: z.number().int(),
  max_batch_size: z.number().int(),
  symbol: z.string(),
  creator_address: z.string(),
  is_hidden: z.boolean(),
  sort_order: z.number().int(),
  is_mint_active: z.boolean(),
  is_archetype: z.boolean(),
  is_pending: z.boolean(),
  discounts: z.string(),
  owner_alt_payout: z.string(),
  super_affiliate_payout: z.string(),
  contract_version: z.number().int(),
  slug: z.string(),
  mint_info: z.string(),
  socials: z.string(),
  token_address: z.string(),
  token_address_lowercase: z.string(),
  trait_counts: z.string(),
  avatar_uri: z.string(),
  banner_uri: z.string(),
  description: z.string(),
  hero_uri: z.string(),
  twitter: z.string(),
  website: z.string(),
  discord: z.string(),
  num_items: z.number().int(),
  num_owners: z.number().int(),
  last_refreshed: z.coerce.date(),
  user_id: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Collection = z.infer<typeof CollectionSchema>

/////////////////////////////////////////
// NFT SCHEMA
/////////////////////////////////////////

export const NftSchema = z.object({
  id: z.string().cuid(),
  token_address: z.string(),
  token_address_lowercase: z.string(),
  token_id: z.string(),
  attributes: z.string(),
  block_minted: z.number().int(),
  contract_type: z.string(),
  description: z.string(),
  dna: z.string(),
  edition: z.number().int(),
  image: z.string(),
  image_url: z.string(),
  metadata: z.string(),
  name: z.string(),
  network: z.string(),
  old_image_url: z.string(),
  old_token_uri: z.string(),
  owner_of: z.string(),
  token_id_int: z.number().int(),
  token_uri: z.string(),
  collection_id: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Nft = z.infer<typeof NftSchema>

/////////////////////////////////////////
// MINT DATA SCHEMA
/////////////////////////////////////////

export const MintDataSchema = z.object({
  id: z.string().cuid(),
  block_last_mint: z.number().int(),
  date_last_mint: z.coerce.date(),
  mints_last_1h: z.number().int(),
  mints_last_12h: z.number().int(),
  mints_last_24h: z.number().int(),
  mints_last_7d: z.number().int(),
  mints_last_1m: z.number().int(),
  mints_last_6m: z.number().int(),
  floor_price_raw: z.string(),
  floor_price_decimal: z.number(),
  all_time_raw: z.string(),
  all_time_decimal: z.number(),
  last_12h_decimal: z.number(),
  last_1h_decimal: z.number(),
  last_24h_decimal: z.number(),
  last_7d_decimal: z.number(),
  last_1m_decimal: z.number(),
  last_6m_decimal: z.number(),
  date_last_sale: z.coerce.date(),
  collection_id: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type MintData = z.infer<typeof MintDataSchema>

/////////////////////////////////////////
// OPEN RARITY SCHEMA
/////////////////////////////////////////

export const OpenRaritySchema = z.object({
  id: z.string().cuid(),
  rank: z.number().int(),
  score: z.number(),
  unique_attributes: z.number().int(),
  nft_id: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type OpenRarity = z.infer<typeof OpenRaritySchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  address: z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),
  avatar_uri: z.string().url({ message: "Invalid url" }).nullish(),
  banner_uri: z.string().url({ message: "Invalid url" }).nullish(),
  username: z.string().max(64, { message: "too lengthy" }).nullish(),
  description: z.string().max(512, { message: "too long" }).nullish(),
  ens: z.string().nullish(),
  status: z.string(),
  email: z.string().nullish(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date().nullish(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER CUSTOM VALIDATORS SCHEMA
/////////////////////////////////////////

export const UserCustomValidatorsSchema = UserSchema

export type UserCustomValidators = z.infer<typeof UserCustomValidatorsSchema>

/////////////////////////////////////////
// CONNECTION SCHEMA
/////////////////////////////////////////

export const ConnectionSchema = z.object({
  id: z.string().cuid(),
  provider_name: z.string(),
  provider_id: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  user_id: z.string(),
})

export type Connection = z.infer<typeof ConnectionSchema>

/////////////////////////////////////////
// PASSWORD SCHEMA
/////////////////////////////////////////

export const PasswordSchema = z.object({
  hash: z.string(),
  user_id: z.string(),
})

export type Password = z.infer<typeof PasswordSchema>

/////////////////////////////////////////
// CHAIN SCHEMA
/////////////////////////////////////////

export const ChainSchema = z.object({
  id: z.number().int(),
  slug: z.string(),
  name: z.string(),
  symbol: z.string(),
  is_testnet: z.boolean(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date().nullish(),
})

export type Chain = z.infer<typeof ChainSchema>

/////////////////////////////////////////
// WALLET SCHEMA
/////////////////////////////////////////

export const WalletSchema = z.object({
  id: z.string().cuid(),
  address: z.string(),
  owner_id: z.string(),
  chain_id: z.number().int(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Wallet = z.infer<typeof WalletSchema>

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string().cuid(),
  expiration_date: z.coerce.date(),
  user_id: z.string(),
  wallet_id: z.string(),
  user_agent: z.string(),
  locale: z.string().nullish(),
  ip_address: z.string().nullish(),
  nonce: z.string().nullish(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// PERMISSION SCHEMA
/////////////////////////////////////////

export const PermissionSchema = z.object({
  id: z.string().cuid(),
  action: z.string(),
  entity: z.string(),
  access: z.string(),
  description: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Permission = z.infer<typeof PermissionSchema>

/////////////////////////////////////////
// ROLE SCHEMA
/////////////////////////////////////////

export const RoleSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  description: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Role = z.infer<typeof RoleSchema>

/////////////////////////////////////////
// MINT SALE TRANSACTION SCHEMA
/////////////////////////////////////////

export const MintSaleTransactionSchema = z.object({
  id: z.string().cuid(),
  transaction_hash: z.string(),
  block_number: z.number().int(),
  timestamp: z.coerce.date(),
  token_address: z.string(),
  value_decimal: z.number(),
  value_raw: z.string(),
  from: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type MintSaleTransaction = z.infer<typeof MintSaleTransactionSchema>

/////////////////////////////////////////
// INSTAREVEAL COLLECTION SCHEMA
/////////////////////////////////////////

export const InstarevealCollectionSchema = z.object({
  id: z.string().cuid(),
  address: z.string(),
  paths: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type InstarevealCollection = z.infer<typeof InstarevealCollectionSchema>

/////////////////////////////////////////
// REFERRAL SCHEMA
/////////////////////////////////////////

export const ReferralSchema = z.object({
  id: z.string().cuid(),
  collection_address: z.string(),
  referral_amount_eth: z.string(),
  referral_amount_wei: z.string(),
  affiliate: z.string(),
  transaction_hash: z.string(),
  minter_ens: z.string(),
  txn_value: z.string(),
  date: z.coerce.date(),
  block_number: z.number().int(),
  affiliate_ens: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Referral = z.infer<typeof ReferralSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// COLLECTION
//------------------------------------------------------

export const CollectionIncludeSchema: z.ZodType<Prisma.CollectionInclude> = z.object({
  mint_data: z.union([z.boolean(),z.lazy(() => MintDataArgsSchema)]).optional(),
  creator: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  nfts: z.union([z.boolean(),z.lazy(() => NftFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CollectionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CollectionArgsSchema: z.ZodType<Prisma.CollectionDefaultArgs> = z.object({
  select: z.lazy(() => CollectionSelectSchema).optional(),
  include: z.lazy(() => CollectionIncludeSchema).optional(),
}).strict();

export const CollectionCountOutputTypeArgsSchema: z.ZodType<Prisma.CollectionCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CollectionCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CollectionCountOutputTypeSelectSchema: z.ZodType<Prisma.CollectionCountOutputTypeSelect> = z.object({
  nfts: z.boolean().optional(),
}).strict();

export const CollectionSelectSchema: z.ZodType<Prisma.CollectionSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  max_items: z.boolean().optional(),
  max_batch_size: z.boolean().optional(),
  symbol: z.boolean().optional(),
  creator_address: z.boolean().optional(),
  is_hidden: z.boolean().optional(),
  sort_order: z.boolean().optional(),
  is_mint_active: z.boolean().optional(),
  is_archetype: z.boolean().optional(),
  is_pending: z.boolean().optional(),
  discounts: z.boolean().optional(),
  owner_alt_payout: z.boolean().optional(),
  super_affiliate_payout: z.boolean().optional(),
  contract_version: z.boolean().optional(),
  slug: z.boolean().optional(),
  mint_info: z.boolean().optional(),
  socials: z.boolean().optional(),
  token_address: z.boolean().optional(),
  token_address_lowercase: z.boolean().optional(),
  trait_counts: z.boolean().optional(),
  avatar_uri: z.boolean().optional(),
  banner_uri: z.boolean().optional(),
  description: z.boolean().optional(),
  hero_uri: z.boolean().optional(),
  twitter: z.boolean().optional(),
  website: z.boolean().optional(),
  discord: z.boolean().optional(),
  num_items: z.boolean().optional(),
  num_owners: z.boolean().optional(),
  last_refreshed: z.boolean().optional(),
  user_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  mint_data: z.union([z.boolean(),z.lazy(() => MintDataArgsSchema)]).optional(),
  creator: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  nfts: z.union([z.boolean(),z.lazy(() => NftFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CollectionCountOutputTypeArgsSchema)]).optional(),
}).strict()

// NFT
//------------------------------------------------------

export const NftIncludeSchema: z.ZodType<Prisma.NftInclude> = z.object({
  open_rarity: z.union([z.boolean(),z.lazy(() => OpenRarityArgsSchema)]).optional(),
  collection: z.union([z.boolean(),z.lazy(() => CollectionArgsSchema)]).optional(),
}).strict()

export const NftArgsSchema: z.ZodType<Prisma.NftDefaultArgs> = z.object({
  select: z.lazy(() => NftSelectSchema).optional(),
  include: z.lazy(() => NftIncludeSchema).optional(),
}).strict();

export const NftSelectSchema: z.ZodType<Prisma.NftSelect> = z.object({
  id: z.boolean().optional(),
  token_address: z.boolean().optional(),
  token_address_lowercase: z.boolean().optional(),
  token_id: z.boolean().optional(),
  attributes: z.boolean().optional(),
  block_minted: z.boolean().optional(),
  contract_type: z.boolean().optional(),
  description: z.boolean().optional(),
  dna: z.boolean().optional(),
  edition: z.boolean().optional(),
  image: z.boolean().optional(),
  image_url: z.boolean().optional(),
  metadata: z.boolean().optional(),
  name: z.boolean().optional(),
  network: z.boolean().optional(),
  old_image_url: z.boolean().optional(),
  old_token_uri: z.boolean().optional(),
  owner_of: z.boolean().optional(),
  token_id_int: z.boolean().optional(),
  token_uri: z.boolean().optional(),
  collection_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  open_rarity: z.union([z.boolean(),z.lazy(() => OpenRarityArgsSchema)]).optional(),
  collection: z.union([z.boolean(),z.lazy(() => CollectionArgsSchema)]).optional(),
}).strict()

// MINT DATA
//------------------------------------------------------

export const MintDataIncludeSchema: z.ZodType<Prisma.MintDataInclude> = z.object({
  collection: z.union([z.boolean(),z.lazy(() => CollectionArgsSchema)]).optional(),
}).strict()

export const MintDataArgsSchema: z.ZodType<Prisma.MintDataDefaultArgs> = z.object({
  select: z.lazy(() => MintDataSelectSchema).optional(),
  include: z.lazy(() => MintDataIncludeSchema).optional(),
}).strict();

export const MintDataSelectSchema: z.ZodType<Prisma.MintDataSelect> = z.object({
  id: z.boolean().optional(),
  block_last_mint: z.boolean().optional(),
  date_last_mint: z.boolean().optional(),
  mints_last_1h: z.boolean().optional(),
  mints_last_12h: z.boolean().optional(),
  mints_last_24h: z.boolean().optional(),
  mints_last_7d: z.boolean().optional(),
  mints_last_1m: z.boolean().optional(),
  mints_last_6m: z.boolean().optional(),
  floor_price_raw: z.boolean().optional(),
  floor_price_decimal: z.boolean().optional(),
  all_time_raw: z.boolean().optional(),
  all_time_decimal: z.boolean().optional(),
  last_12h_decimal: z.boolean().optional(),
  last_1h_decimal: z.boolean().optional(),
  last_24h_decimal: z.boolean().optional(),
  last_7d_decimal: z.boolean().optional(),
  last_1m_decimal: z.boolean().optional(),
  last_6m_decimal: z.boolean().optional(),
  date_last_sale: z.boolean().optional(),
  collection_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  collection: z.union([z.boolean(),z.lazy(() => CollectionArgsSchema)]).optional(),
}).strict()

// OPEN RARITY
//------------------------------------------------------

export const OpenRarityIncludeSchema: z.ZodType<Prisma.OpenRarityInclude> = z.object({
  nft: z.union([z.boolean(),z.lazy(() => NftArgsSchema)]).optional(),
}).strict()

export const OpenRarityArgsSchema: z.ZodType<Prisma.OpenRarityDefaultArgs> = z.object({
  select: z.lazy(() => OpenRaritySelectSchema).optional(),
  include: z.lazy(() => OpenRarityIncludeSchema).optional(),
}).strict();

export const OpenRaritySelectSchema: z.ZodType<Prisma.OpenRaritySelect> = z.object({
  id: z.boolean().optional(),
  rank: z.boolean().optional(),
  score: z.boolean().optional(),
  unique_attributes: z.boolean().optional(),
  nft_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  nft: z.union([z.boolean(),z.lazy(() => NftArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  collections: z.union([z.boolean(),z.lazy(() => CollectionFindManyArgsSchema)]).optional(),
  wallets: z.union([z.boolean(),z.lazy(() => WalletFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  roles: z.union([z.boolean(),z.lazy(() => RoleFindManyArgsSchema)]).optional(),
  connections: z.union([z.boolean(),z.lazy(() => ConnectionFindManyArgsSchema)]).optional(),
  password: z.union([z.boolean(),z.lazy(() => PasswordArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  collections: z.boolean().optional(),
  wallets: z.boolean().optional(),
  sessions: z.boolean().optional(),
  roles: z.boolean().optional(),
  connections: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  address: z.boolean().optional(),
  avatar_uri: z.boolean().optional(),
  banner_uri: z.boolean().optional(),
  username: z.boolean().optional(),
  description: z.boolean().optional(),
  ens: z.boolean().optional(),
  status: z.boolean().optional(),
  email: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  collections: z.union([z.boolean(),z.lazy(() => CollectionFindManyArgsSchema)]).optional(),
  wallets: z.union([z.boolean(),z.lazy(() => WalletFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  roles: z.union([z.boolean(),z.lazy(() => RoleFindManyArgsSchema)]).optional(),
  connections: z.union([z.boolean(),z.lazy(() => ConnectionFindManyArgsSchema)]).optional(),
  password: z.union([z.boolean(),z.lazy(() => PasswordArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CONNECTION
//------------------------------------------------------

export const ConnectionIncludeSchema: z.ZodType<Prisma.ConnectionInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const ConnectionArgsSchema: z.ZodType<Prisma.ConnectionDefaultArgs> = z.object({
  select: z.lazy(() => ConnectionSelectSchema).optional(),
  include: z.lazy(() => ConnectionIncludeSchema).optional(),
}).strict();

export const ConnectionSelectSchema: z.ZodType<Prisma.ConnectionSelect> = z.object({
  id: z.boolean().optional(),
  provider_name: z.boolean().optional(),
  provider_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  user_id: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// PASSWORD
//------------------------------------------------------

export const PasswordIncludeSchema: z.ZodType<Prisma.PasswordInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const PasswordArgsSchema: z.ZodType<Prisma.PasswordDefaultArgs> = z.object({
  select: z.lazy(() => PasswordSelectSchema).optional(),
  include: z.lazy(() => PasswordIncludeSchema).optional(),
}).strict();

export const PasswordSelectSchema: z.ZodType<Prisma.PasswordSelect> = z.object({
  hash: z.boolean().optional(),
  user_id: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// CHAIN
//------------------------------------------------------

export const ChainIncludeSchema: z.ZodType<Prisma.ChainInclude> = z.object({
  wallet: z.union([z.boolean(),z.lazy(() => WalletFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ChainCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ChainArgsSchema: z.ZodType<Prisma.ChainDefaultArgs> = z.object({
  select: z.lazy(() => ChainSelectSchema).optional(),
  include: z.lazy(() => ChainIncludeSchema).optional(),
}).strict();

export const ChainCountOutputTypeArgsSchema: z.ZodType<Prisma.ChainCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ChainCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ChainCountOutputTypeSelectSchema: z.ZodType<Prisma.ChainCountOutputTypeSelect> = z.object({
  wallet: z.boolean().optional(),
}).strict();

export const ChainSelectSchema: z.ZodType<Prisma.ChainSelect> = z.object({
  id: z.boolean().optional(),
  slug: z.boolean().optional(),
  name: z.boolean().optional(),
  symbol: z.boolean().optional(),
  is_testnet: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  wallet: z.union([z.boolean(),z.lazy(() => WalletFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ChainCountOutputTypeArgsSchema)]).optional(),
}).strict()

// WALLET
//------------------------------------------------------

export const WalletIncludeSchema: z.ZodType<Prisma.WalletInclude> = z.object({
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  chain: z.union([z.boolean(),z.lazy(() => ChainArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WalletCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const WalletArgsSchema: z.ZodType<Prisma.WalletDefaultArgs> = z.object({
  select: z.lazy(() => WalletSelectSchema).optional(),
  include: z.lazy(() => WalletIncludeSchema).optional(),
}).strict();

export const WalletCountOutputTypeArgsSchema: z.ZodType<Prisma.WalletCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => WalletCountOutputTypeSelectSchema).nullish(),
}).strict();

export const WalletCountOutputTypeSelectSchema: z.ZodType<Prisma.WalletCountOutputTypeSelect> = z.object({
  sessions: z.boolean().optional(),
}).strict();

export const WalletSelectSchema: z.ZodType<Prisma.WalletSelect> = z.object({
  id: z.boolean().optional(),
  address: z.boolean().optional(),
  owner_id: z.boolean().optional(),
  chain_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  chain: z.union([z.boolean(),z.lazy(() => ChainArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WalletCountOutputTypeArgsSchema)]).optional(),
}).strict()

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  wallet: z.union([z.boolean(),z.lazy(() => WalletArgsSchema)]).optional(),
}).strict()

export const SessionArgsSchema: z.ZodType<Prisma.SessionDefaultArgs> = z.object({
  select: z.lazy(() => SessionSelectSchema).optional(),
  include: z.lazy(() => SessionIncludeSchema).optional(),
}).strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
  id: z.boolean().optional(),
  expiration_date: z.boolean().optional(),
  user_id: z.boolean().optional(),
  wallet_id: z.boolean().optional(),
  user_agent: z.boolean().optional(),
  locale: z.boolean().optional(),
  ip_address: z.boolean().optional(),
  nonce: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  wallet: z.union([z.boolean(),z.lazy(() => WalletArgsSchema)]).optional(),
}).strict()

// PERMISSION
//------------------------------------------------------

export const PermissionIncludeSchema: z.ZodType<Prisma.PermissionInclude> = z.object({
  roles: z.union([z.boolean(),z.lazy(() => RoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PermissionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PermissionArgsSchema: z.ZodType<Prisma.PermissionDefaultArgs> = z.object({
  select: z.lazy(() => PermissionSelectSchema).optional(),
  include: z.lazy(() => PermissionIncludeSchema).optional(),
}).strict();

export const PermissionCountOutputTypeArgsSchema: z.ZodType<Prisma.PermissionCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PermissionCountOutputTypeSelectSchema).nullish(),
}).strict();

export const PermissionCountOutputTypeSelectSchema: z.ZodType<Prisma.PermissionCountOutputTypeSelect> = z.object({
  roles: z.boolean().optional(),
}).strict();

export const PermissionSelectSchema: z.ZodType<Prisma.PermissionSelect> = z.object({
  id: z.boolean().optional(),
  action: z.boolean().optional(),
  entity: z.boolean().optional(),
  access: z.boolean().optional(),
  description: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  roles: z.union([z.boolean(),z.lazy(() => RoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PermissionCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ROLE
//------------------------------------------------------

export const RoleIncludeSchema: z.ZodType<Prisma.RoleInclude> = z.object({
  users: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  permissions: z.union([z.boolean(),z.lazy(() => PermissionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RoleArgsSchema: z.ZodType<Prisma.RoleDefaultArgs> = z.object({
  select: z.lazy(() => RoleSelectSchema).optional(),
  include: z.lazy(() => RoleIncludeSchema).optional(),
}).strict();

export const RoleCountOutputTypeArgsSchema: z.ZodType<Prisma.RoleCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => RoleCountOutputTypeSelectSchema).nullish(),
}).strict();

export const RoleCountOutputTypeSelectSchema: z.ZodType<Prisma.RoleCountOutputTypeSelect> = z.object({
  users: z.boolean().optional(),
  permissions: z.boolean().optional(),
}).strict();

export const RoleSelectSchema: z.ZodType<Prisma.RoleSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  users: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  permissions: z.union([z.boolean(),z.lazy(() => PermissionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoleCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MINT SALE TRANSACTION
//------------------------------------------------------

export const MintSaleTransactionSelectSchema: z.ZodType<Prisma.MintSaleTransactionSelect> = z.object({
  id: z.boolean().optional(),
  transaction_hash: z.boolean().optional(),
  block_number: z.boolean().optional(),
  timestamp: z.boolean().optional(),
  token_address: z.boolean().optional(),
  value_decimal: z.boolean().optional(),
  value_raw: z.boolean().optional(),
  from: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
}).strict()

// INSTAREVEAL COLLECTION
//------------------------------------------------------

export const InstarevealCollectionSelectSchema: z.ZodType<Prisma.InstarevealCollectionSelect> = z.object({
  id: z.boolean().optional(),
  address: z.boolean().optional(),
  paths: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
}).strict()

// REFERRAL
//------------------------------------------------------

export const ReferralSelectSchema: z.ZodType<Prisma.ReferralSelect> = z.object({
  id: z.boolean().optional(),
  collection_address: z.boolean().optional(),
  referral_amount_eth: z.boolean().optional(),
  referral_amount_wei: z.boolean().optional(),
  affiliate: z.boolean().optional(),
  transaction_hash: z.boolean().optional(),
  minter_ens: z.boolean().optional(),
  txn_value: z.boolean().optional(),
  date: z.boolean().optional(),
  block_number: z.boolean().optional(),
  affiliate_ens: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const CollectionWhereInputSchema: z.ZodType<Prisma.CollectionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CollectionWhereInputSchema),z.lazy(() => CollectionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CollectionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CollectionWhereInputSchema),z.lazy(() => CollectionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  max_items: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  max_batch_size: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  symbol: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  creator_address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  is_hidden: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  sort_order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  is_mint_active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  is_archetype: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  is_pending: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  discounts: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  owner_alt_payout: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  super_affiliate_payout: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  contract_version: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mint_info: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  socials: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token_address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token_address_lowercase: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  trait_counts: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  avatar_uri: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  banner_uri: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hero_uri: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  twitter: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  website: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  discord: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  num_items: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  num_owners: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  last_refreshed: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mint_data: z.union([ z.lazy(() => MintDataNullableRelationFilterSchema),z.lazy(() => MintDataWhereInputSchema) ]).optional().nullable(),
  creator: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  nfts: z.lazy(() => NftListRelationFilterSchema).optional()
}).strict();

export const CollectionOrderByWithRelationInputSchema: z.ZodType<Prisma.CollectionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  max_items: z.lazy(() => SortOrderSchema).optional(),
  max_batch_size: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  creator_address: z.lazy(() => SortOrderSchema).optional(),
  is_hidden: z.lazy(() => SortOrderSchema).optional(),
  sort_order: z.lazy(() => SortOrderSchema).optional(),
  is_mint_active: z.lazy(() => SortOrderSchema).optional(),
  is_archetype: z.lazy(() => SortOrderSchema).optional(),
  is_pending: z.lazy(() => SortOrderSchema).optional(),
  discounts: z.lazy(() => SortOrderSchema).optional(),
  owner_alt_payout: z.lazy(() => SortOrderSchema).optional(),
  super_affiliate_payout: z.lazy(() => SortOrderSchema).optional(),
  contract_version: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  mint_info: z.lazy(() => SortOrderSchema).optional(),
  socials: z.lazy(() => SortOrderSchema).optional(),
  token_address: z.lazy(() => SortOrderSchema).optional(),
  token_address_lowercase: z.lazy(() => SortOrderSchema).optional(),
  trait_counts: z.lazy(() => SortOrderSchema).optional(),
  avatar_uri: z.lazy(() => SortOrderSchema).optional(),
  banner_uri: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  hero_uri: z.lazy(() => SortOrderSchema).optional(),
  twitter: z.lazy(() => SortOrderSchema).optional(),
  website: z.lazy(() => SortOrderSchema).optional(),
  discord: z.lazy(() => SortOrderSchema).optional(),
  num_items: z.lazy(() => SortOrderSchema).optional(),
  num_owners: z.lazy(() => SortOrderSchema).optional(),
  last_refreshed: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  mint_data: z.lazy(() => MintDataOrderByWithRelationInputSchema).optional(),
  creator: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  nfts: z.lazy(() => NftOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CollectionWhereUniqueInputSchema: z.ZodType<Prisma.CollectionWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    user_id: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    user_id: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  user_id: z.string().optional(),
  AND: z.union([ z.lazy(() => CollectionWhereInputSchema),z.lazy(() => CollectionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CollectionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CollectionWhereInputSchema),z.lazy(() => CollectionWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  max_items: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  max_batch_size: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  symbol: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  creator_address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  is_hidden: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  sort_order: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  is_mint_active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  is_archetype: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  is_pending: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  discounts: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  owner_alt_payout: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  super_affiliate_payout: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  contract_version: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mint_info: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  socials: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token_address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token_address_lowercase: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  trait_counts: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  avatar_uri: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  banner_uri: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hero_uri: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  twitter: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  website: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  discord: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  num_items: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  num_owners: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  last_refreshed: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mint_data: z.union([ z.lazy(() => MintDataNullableRelationFilterSchema),z.lazy(() => MintDataWhereInputSchema) ]).optional().nullable(),
  creator: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  nfts: z.lazy(() => NftListRelationFilterSchema).optional()
}).strict());

export const CollectionOrderByWithAggregationInputSchema: z.ZodType<Prisma.CollectionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  max_items: z.lazy(() => SortOrderSchema).optional(),
  max_batch_size: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  creator_address: z.lazy(() => SortOrderSchema).optional(),
  is_hidden: z.lazy(() => SortOrderSchema).optional(),
  sort_order: z.lazy(() => SortOrderSchema).optional(),
  is_mint_active: z.lazy(() => SortOrderSchema).optional(),
  is_archetype: z.lazy(() => SortOrderSchema).optional(),
  is_pending: z.lazy(() => SortOrderSchema).optional(),
  discounts: z.lazy(() => SortOrderSchema).optional(),
  owner_alt_payout: z.lazy(() => SortOrderSchema).optional(),
  super_affiliate_payout: z.lazy(() => SortOrderSchema).optional(),
  contract_version: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  mint_info: z.lazy(() => SortOrderSchema).optional(),
  socials: z.lazy(() => SortOrderSchema).optional(),
  token_address: z.lazy(() => SortOrderSchema).optional(),
  token_address_lowercase: z.lazy(() => SortOrderSchema).optional(),
  trait_counts: z.lazy(() => SortOrderSchema).optional(),
  avatar_uri: z.lazy(() => SortOrderSchema).optional(),
  banner_uri: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  hero_uri: z.lazy(() => SortOrderSchema).optional(),
  twitter: z.lazy(() => SortOrderSchema).optional(),
  website: z.lazy(() => SortOrderSchema).optional(),
  discord: z.lazy(() => SortOrderSchema).optional(),
  num_items: z.lazy(() => SortOrderSchema).optional(),
  num_owners: z.lazy(() => SortOrderSchema).optional(),
  last_refreshed: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CollectionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CollectionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CollectionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CollectionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CollectionSumOrderByAggregateInputSchema).optional()
}).strict();

export const CollectionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CollectionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CollectionScalarWhereWithAggregatesInputSchema),z.lazy(() => CollectionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CollectionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CollectionScalarWhereWithAggregatesInputSchema),z.lazy(() => CollectionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  max_items: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  max_batch_size: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  symbol: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  creator_address: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  is_hidden: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  sort_order: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  is_mint_active: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  is_archetype: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  is_pending: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  discounts: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  owner_alt_payout: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  super_affiliate_payout: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  contract_version: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mint_info: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  socials: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token_address: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token_address_lowercase: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  trait_counts: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  avatar_uri: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  banner_uri: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  hero_uri: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  twitter: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  website: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  discord: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  num_items: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  num_owners: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  last_refreshed: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const NftWhereInputSchema: z.ZodType<Prisma.NftWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NftWhereInputSchema),z.lazy(() => NftWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NftWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NftWhereInputSchema),z.lazy(() => NftWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token_address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token_address_lowercase: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  attributes: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  block_minted: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  contract_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dna: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  edition: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image_url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  metadata: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  network: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  old_image_url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  old_token_uri: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  owner_of: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token_id_int: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  token_uri: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  collection_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  open_rarity: z.union([ z.lazy(() => OpenRarityNullableRelationFilterSchema),z.lazy(() => OpenRarityWhereInputSchema) ]).optional().nullable(),
  collection: z.union([ z.lazy(() => CollectionRelationFilterSchema),z.lazy(() => CollectionWhereInputSchema) ]).optional(),
}).strict();

export const NftOrderByWithRelationInputSchema: z.ZodType<Prisma.NftOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  token_address: z.lazy(() => SortOrderSchema).optional(),
  token_address_lowercase: z.lazy(() => SortOrderSchema).optional(),
  token_id: z.lazy(() => SortOrderSchema).optional(),
  attributes: z.lazy(() => SortOrderSchema).optional(),
  block_minted: z.lazy(() => SortOrderSchema).optional(),
  contract_type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  dna: z.lazy(() => SortOrderSchema).optional(),
  edition: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  network: z.lazy(() => SortOrderSchema).optional(),
  old_image_url: z.lazy(() => SortOrderSchema).optional(),
  old_token_uri: z.lazy(() => SortOrderSchema).optional(),
  owner_of: z.lazy(() => SortOrderSchema).optional(),
  token_id_int: z.lazy(() => SortOrderSchema).optional(),
  token_uri: z.lazy(() => SortOrderSchema).optional(),
  collection_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  open_rarity: z.lazy(() => OpenRarityOrderByWithRelationInputSchema).optional(),
  collection: z.lazy(() => CollectionOrderByWithRelationInputSchema).optional()
}).strict();

export const NftWhereUniqueInputSchema: z.ZodType<Prisma.NftWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => NftWhereInputSchema),z.lazy(() => NftWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NftWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NftWhereInputSchema),z.lazy(() => NftWhereInputSchema).array() ]).optional(),
  token_address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token_address_lowercase: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  attributes: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  block_minted: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  contract_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dna: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  edition: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image_url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  metadata: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  network: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  old_image_url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  old_token_uri: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  owner_of: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token_id_int: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  token_uri: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  collection_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  open_rarity: z.union([ z.lazy(() => OpenRarityNullableRelationFilterSchema),z.lazy(() => OpenRarityWhereInputSchema) ]).optional().nullable(),
  collection: z.union([ z.lazy(() => CollectionRelationFilterSchema),z.lazy(() => CollectionWhereInputSchema) ]).optional(),
}).strict());

export const NftOrderByWithAggregationInputSchema: z.ZodType<Prisma.NftOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  token_address: z.lazy(() => SortOrderSchema).optional(),
  token_address_lowercase: z.lazy(() => SortOrderSchema).optional(),
  token_id: z.lazy(() => SortOrderSchema).optional(),
  attributes: z.lazy(() => SortOrderSchema).optional(),
  block_minted: z.lazy(() => SortOrderSchema).optional(),
  contract_type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  dna: z.lazy(() => SortOrderSchema).optional(),
  edition: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  network: z.lazy(() => SortOrderSchema).optional(),
  old_image_url: z.lazy(() => SortOrderSchema).optional(),
  old_token_uri: z.lazy(() => SortOrderSchema).optional(),
  owner_of: z.lazy(() => SortOrderSchema).optional(),
  token_id_int: z.lazy(() => SortOrderSchema).optional(),
  token_uri: z.lazy(() => SortOrderSchema).optional(),
  collection_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NftCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => NftAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NftMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NftMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => NftSumOrderByAggregateInputSchema).optional()
}).strict();

export const NftScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NftScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => NftScalarWhereWithAggregatesInputSchema),z.lazy(() => NftScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => NftScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NftScalarWhereWithAggregatesInputSchema),z.lazy(() => NftScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token_address: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token_address_lowercase: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  attributes: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  block_minted: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  contract_type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dna: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  edition: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  image: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  image_url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  metadata: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  network: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  old_image_url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  old_token_uri: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  owner_of: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token_id_int: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  token_uri: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  collection_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MintDataWhereInputSchema: z.ZodType<Prisma.MintDataWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MintDataWhereInputSchema),z.lazy(() => MintDataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MintDataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MintDataWhereInputSchema),z.lazy(() => MintDataWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  block_last_mint: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  date_last_mint: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mints_last_1h: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  mints_last_12h: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  mints_last_24h: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  mints_last_7d: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  mints_last_1m: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  mints_last_6m: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  floor_price_raw: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  floor_price_decimal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  all_time_raw: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  all_time_decimal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  last_12h_decimal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  last_1h_decimal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  last_24h_decimal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  last_7d_decimal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  last_1m_decimal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  last_6m_decimal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  date_last_sale: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  collection_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  collection: z.union([ z.lazy(() => CollectionRelationFilterSchema),z.lazy(() => CollectionWhereInputSchema) ]).optional(),
}).strict();

export const MintDataOrderByWithRelationInputSchema: z.ZodType<Prisma.MintDataOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  block_last_mint: z.lazy(() => SortOrderSchema).optional(),
  date_last_mint: z.lazy(() => SortOrderSchema).optional(),
  mints_last_1h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_12h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_24h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_7d: z.lazy(() => SortOrderSchema).optional(),
  mints_last_1m: z.lazy(() => SortOrderSchema).optional(),
  mints_last_6m: z.lazy(() => SortOrderSchema).optional(),
  floor_price_raw: z.lazy(() => SortOrderSchema).optional(),
  floor_price_decimal: z.lazy(() => SortOrderSchema).optional(),
  all_time_raw: z.lazy(() => SortOrderSchema).optional(),
  all_time_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_12h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_1h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_24h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_7d_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_1m_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_6m_decimal: z.lazy(() => SortOrderSchema).optional(),
  date_last_sale: z.lazy(() => SortOrderSchema).optional(),
  collection_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  collection: z.lazy(() => CollectionOrderByWithRelationInputSchema).optional()
}).strict();

export const MintDataWhereUniqueInputSchema: z.ZodType<Prisma.MintDataWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    collection_id: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    collection_id: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  collection_id: z.string().optional(),
  AND: z.union([ z.lazy(() => MintDataWhereInputSchema),z.lazy(() => MintDataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MintDataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MintDataWhereInputSchema),z.lazy(() => MintDataWhereInputSchema).array() ]).optional(),
  block_last_mint: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  date_last_mint: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mints_last_1h: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  mints_last_12h: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  mints_last_24h: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  mints_last_7d: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  mints_last_1m: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  mints_last_6m: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  floor_price_raw: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  floor_price_decimal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  all_time_raw: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  all_time_decimal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  last_12h_decimal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  last_1h_decimal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  last_24h_decimal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  last_7d_decimal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  last_1m_decimal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  last_6m_decimal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  date_last_sale: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  collection: z.union([ z.lazy(() => CollectionRelationFilterSchema),z.lazy(() => CollectionWhereInputSchema) ]).optional(),
}).strict());

export const MintDataOrderByWithAggregationInputSchema: z.ZodType<Prisma.MintDataOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  block_last_mint: z.lazy(() => SortOrderSchema).optional(),
  date_last_mint: z.lazy(() => SortOrderSchema).optional(),
  mints_last_1h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_12h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_24h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_7d: z.lazy(() => SortOrderSchema).optional(),
  mints_last_1m: z.lazy(() => SortOrderSchema).optional(),
  mints_last_6m: z.lazy(() => SortOrderSchema).optional(),
  floor_price_raw: z.lazy(() => SortOrderSchema).optional(),
  floor_price_decimal: z.lazy(() => SortOrderSchema).optional(),
  all_time_raw: z.lazy(() => SortOrderSchema).optional(),
  all_time_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_12h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_1h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_24h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_7d_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_1m_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_6m_decimal: z.lazy(() => SortOrderSchema).optional(),
  date_last_sale: z.lazy(() => SortOrderSchema).optional(),
  collection_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MintDataCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => MintDataAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MintDataMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MintDataMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => MintDataSumOrderByAggregateInputSchema).optional()
}).strict();

export const MintDataScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MintDataScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MintDataScalarWhereWithAggregatesInputSchema),z.lazy(() => MintDataScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MintDataScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MintDataScalarWhereWithAggregatesInputSchema),z.lazy(() => MintDataScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  block_last_mint: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  date_last_mint: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  mints_last_1h: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  mints_last_12h: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  mints_last_24h: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  mints_last_7d: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  mints_last_1m: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  mints_last_6m: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  floor_price_raw: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  floor_price_decimal: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  all_time_raw: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  all_time_decimal: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  last_12h_decimal: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  last_1h_decimal: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  last_24h_decimal: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  last_7d_decimal: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  last_1m_decimal: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  last_6m_decimal: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  date_last_sale: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  collection_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const OpenRarityWhereInputSchema: z.ZodType<Prisma.OpenRarityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OpenRarityWhereInputSchema),z.lazy(() => OpenRarityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OpenRarityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OpenRarityWhereInputSchema),z.lazy(() => OpenRarityWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rank: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  score: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  unique_attributes: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  nft_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  nft: z.union([ z.lazy(() => NftRelationFilterSchema),z.lazy(() => NftWhereInputSchema) ]).optional(),
}).strict();

export const OpenRarityOrderByWithRelationInputSchema: z.ZodType<Prisma.OpenRarityOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rank: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  unique_attributes: z.lazy(() => SortOrderSchema).optional(),
  nft_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  nft: z.lazy(() => NftOrderByWithRelationInputSchema).optional()
}).strict();

export const OpenRarityWhereUniqueInputSchema: z.ZodType<Prisma.OpenRarityWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    nft_id: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    nft_id: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  nft_id: z.string().optional(),
  AND: z.union([ z.lazy(() => OpenRarityWhereInputSchema),z.lazy(() => OpenRarityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OpenRarityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OpenRarityWhereInputSchema),z.lazy(() => OpenRarityWhereInputSchema).array() ]).optional(),
  rank: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  score: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  unique_attributes: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  nft: z.union([ z.lazy(() => NftRelationFilterSchema),z.lazy(() => NftWhereInputSchema) ]).optional(),
}).strict());

export const OpenRarityOrderByWithAggregationInputSchema: z.ZodType<Prisma.OpenRarityOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rank: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  unique_attributes: z.lazy(() => SortOrderSchema).optional(),
  nft_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OpenRarityCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OpenRarityAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OpenRarityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OpenRarityMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OpenRaritySumOrderByAggregateInputSchema).optional()
}).strict();

export const OpenRarityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OpenRarityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OpenRarityScalarWhereWithAggregatesInputSchema),z.lazy(() => OpenRarityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OpenRarityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OpenRarityScalarWhereWithAggregatesInputSchema),z.lazy(() => OpenRarityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rank: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  score: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  unique_attributes: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  nft_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  avatar_uri: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  banner_uri: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  username: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ens: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  collections: z.lazy(() => CollectionListRelationFilterSchema).optional(),
  wallets: z.lazy(() => WalletListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  roles: z.lazy(() => RoleListRelationFilterSchema).optional(),
  connections: z.lazy(() => ConnectionListRelationFilterSchema).optional(),
  password: z.union([ z.lazy(() => PasswordNullableRelationFilterSchema),z.lazy(() => PasswordWhereInputSchema) ]).optional().nullable(),
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  avatar_uri: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  banner_uri: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ens: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  collections: z.lazy(() => CollectionOrderByRelationAggregateInputSchema).optional(),
  wallets: z.lazy(() => WalletOrderByRelationAggregateInputSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
  roles: z.lazy(() => RoleOrderByRelationAggregateInputSchema).optional(),
  connections: z.lazy(() => ConnectionOrderByRelationAggregateInputSchema).optional(),
  password: z.lazy(() => PasswordOrderByWithRelationInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    address: z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' })
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    address: z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  address: z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }).optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  avatar_uri: z.union([ z.lazy(() => StringNullableFilterSchema),z.string().url({ message: "Invalid url" }) ]).optional().nullable(),
  banner_uri: z.union([ z.lazy(() => StringNullableFilterSchema),z.string().url({ message: "Invalid url" }) ]).optional().nullable(),
  username: z.union([ z.lazy(() => StringNullableFilterSchema),z.string().max(64, { message: "too lengthy" }) ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string().max(512, { message: "too long" }) ]).optional().nullable(),
  ens: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  collections: z.lazy(() => CollectionListRelationFilterSchema).optional(),
  wallets: z.lazy(() => WalletListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  roles: z.lazy(() => RoleListRelationFilterSchema).optional(),
  connections: z.lazy(() => ConnectionListRelationFilterSchema).optional(),
  password: z.union([ z.lazy(() => PasswordNullableRelationFilterSchema),z.lazy(() => PasswordWhereInputSchema) ]).optional().nullable(),
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  avatar_uri: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  banner_uri: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ens: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  avatar_uri: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  banner_uri: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  username: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  ens: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const ConnectionWhereInputSchema: z.ZodType<Prisma.ConnectionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ConnectionWhereInputSchema),z.lazy(() => ConnectionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConnectionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConnectionWhereInputSchema),z.lazy(() => ConnectionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const ConnectionOrderByWithRelationInputSchema: z.ZodType<Prisma.ConnectionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  provider_name: z.lazy(() => SortOrderSchema).optional(),
  provider_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const ConnectionWhereUniqueInputSchema: z.ZodType<Prisma.ConnectionWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    provider_id: z.string(),
    provider_name_provider_id: z.lazy(() => ConnectionProvider_nameProvider_idCompoundUniqueInputSchema),
    provider_id_user_id: z.lazy(() => ConnectionProvider_idUser_idCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
    provider_id: z.string(),
    provider_name_provider_id: z.lazy(() => ConnectionProvider_nameProvider_idCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string().cuid(),
    provider_id: z.string(),
    provider_id_user_id: z.lazy(() => ConnectionProvider_idUser_idCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string().cuid(),
    provider_id: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    provider_name_provider_id: z.lazy(() => ConnectionProvider_nameProvider_idCompoundUniqueInputSchema),
    provider_id_user_id: z.lazy(() => ConnectionProvider_idUser_idCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string().cuid(),
    provider_name_provider_id: z.lazy(() => ConnectionProvider_nameProvider_idCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string().cuid(),
    provider_id_user_id: z.lazy(() => ConnectionProvider_idUser_idCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    provider_id: z.string(),
    provider_name_provider_id: z.lazy(() => ConnectionProvider_nameProvider_idCompoundUniqueInputSchema),
    provider_id_user_id: z.lazy(() => ConnectionProvider_idUser_idCompoundUniqueInputSchema),
  }),
  z.object({
    provider_id: z.string(),
    provider_name_provider_id: z.lazy(() => ConnectionProvider_nameProvider_idCompoundUniqueInputSchema),
  }),
  z.object({
    provider_id: z.string(),
    provider_id_user_id: z.lazy(() => ConnectionProvider_idUser_idCompoundUniqueInputSchema),
  }),
  z.object({
    provider_id: z.string(),
  }),
  z.object({
    provider_name_provider_id: z.lazy(() => ConnectionProvider_nameProvider_idCompoundUniqueInputSchema),
    provider_id_user_id: z.lazy(() => ConnectionProvider_idUser_idCompoundUniqueInputSchema),
  }),
  z.object({
    provider_name_provider_id: z.lazy(() => ConnectionProvider_nameProvider_idCompoundUniqueInputSchema),
  }),
  z.object({
    provider_id_user_id: z.lazy(() => ConnectionProvider_idUser_idCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  provider_id: z.string().optional(),
  provider_name_provider_id: z.lazy(() => ConnectionProvider_nameProvider_idCompoundUniqueInputSchema).optional(),
  provider_id_user_id: z.lazy(() => ConnectionProvider_idUser_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ConnectionWhereInputSchema),z.lazy(() => ConnectionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConnectionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConnectionWhereInputSchema),z.lazy(() => ConnectionWhereInputSchema).array() ]).optional(),
  provider_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const ConnectionOrderByWithAggregationInputSchema: z.ZodType<Prisma.ConnectionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  provider_name: z.lazy(() => SortOrderSchema).optional(),
  provider_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ConnectionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ConnectionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ConnectionMinOrderByAggregateInputSchema).optional()
}).strict();

export const ConnectionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ConnectionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ConnectionScalarWhereWithAggregatesInputSchema),z.lazy(() => ConnectionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConnectionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConnectionScalarWhereWithAggregatesInputSchema),z.lazy(() => ConnectionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  provider_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  provider_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const PasswordWhereInputSchema: z.ZodType<Prisma.PasswordWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PasswordWhereInputSchema),z.lazy(() => PasswordWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PasswordWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PasswordWhereInputSchema),z.lazy(() => PasswordWhereInputSchema).array() ]).optional(),
  hash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const PasswordOrderByWithRelationInputSchema: z.ZodType<Prisma.PasswordOrderByWithRelationInput> = z.object({
  hash: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const PasswordWhereUniqueInputSchema: z.ZodType<Prisma.PasswordWhereUniqueInput> = z.object({
  user_id: z.string()
})
.and(z.object({
  user_id: z.string().optional(),
  AND: z.union([ z.lazy(() => PasswordWhereInputSchema),z.lazy(() => PasswordWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PasswordWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PasswordWhereInputSchema),z.lazy(() => PasswordWhereInputSchema).array() ]).optional(),
  hash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const PasswordOrderByWithAggregationInputSchema: z.ZodType<Prisma.PasswordOrderByWithAggregationInput> = z.object({
  hash: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PasswordCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PasswordMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PasswordMinOrderByAggregateInputSchema).optional()
}).strict();

export const PasswordScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PasswordScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PasswordScalarWhereWithAggregatesInputSchema),z.lazy(() => PasswordScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PasswordScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PasswordScalarWhereWithAggregatesInputSchema),z.lazy(() => PasswordScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  hash: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ChainWhereInputSchema: z.ZodType<Prisma.ChainWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChainWhereInputSchema),z.lazy(() => ChainWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChainWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChainWhereInputSchema),z.lazy(() => ChainWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  symbol: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  is_testnet: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  wallet: z.lazy(() => WalletListRelationFilterSchema).optional()
}).strict();

export const ChainOrderByWithRelationInputSchema: z.ZodType<Prisma.ChainOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  is_testnet: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  wallet: z.lazy(() => WalletOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ChainWhereUniqueInputSchema: z.ZodType<Prisma.ChainWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    slug: z.string(),
    name: z.string(),
    symbol: z.string()
  }),
  z.object({
    id: z.number().int(),
    slug: z.string(),
    name: z.string(),
  }),
  z.object({
    id: z.number().int(),
    slug: z.string(),
    symbol: z.string(),
  }),
  z.object({
    id: z.number().int(),
    slug: z.string(),
  }),
  z.object({
    id: z.number().int(),
    name: z.string(),
    symbol: z.string(),
  }),
  z.object({
    id: z.number().int(),
    name: z.string(),
  }),
  z.object({
    id: z.number().int(),
    symbol: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    slug: z.string(),
    name: z.string(),
    symbol: z.string(),
  }),
  z.object({
    slug: z.string(),
    name: z.string(),
  }),
  z.object({
    slug: z.string(),
    symbol: z.string(),
  }),
  z.object({
    slug: z.string(),
  }),
  z.object({
    name: z.string(),
    symbol: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
  z.object({
    symbol: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  slug: z.string().optional(),
  name: z.string().optional(),
  symbol: z.string().optional(),
  AND: z.union([ z.lazy(() => ChainWhereInputSchema),z.lazy(() => ChainWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChainWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChainWhereInputSchema),z.lazy(() => ChainWhereInputSchema).array() ]).optional(),
  is_testnet: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  wallet: z.lazy(() => WalletListRelationFilterSchema).optional()
}).strict());

export const ChainOrderByWithAggregationInputSchema: z.ZodType<Prisma.ChainOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  is_testnet: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ChainCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ChainAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ChainMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ChainMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ChainSumOrderByAggregateInputSchema).optional()
}).strict();

export const ChainScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ChainScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ChainScalarWhereWithAggregatesInputSchema),z.lazy(() => ChainScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChainScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChainScalarWhereWithAggregatesInputSchema),z.lazy(() => ChainScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  symbol: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  is_testnet: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const WalletWhereInputSchema: z.ZodType<Prisma.WalletWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WalletWhereInputSchema),z.lazy(() => WalletWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WalletWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WalletWhereInputSchema),z.lazy(() => WalletWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  owner_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  chain_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  owner: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  chain: z.union([ z.lazy(() => ChainRelationFilterSchema),z.lazy(() => ChainWhereInputSchema) ]).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional()
}).strict();

export const WalletOrderByWithRelationInputSchema: z.ZodType<Prisma.WalletOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  owner_id: z.lazy(() => SortOrderSchema).optional(),
  chain_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  owner: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  chain: z.lazy(() => ChainOrderByWithRelationInputSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional()
}).strict();

export const WalletWhereUniqueInputSchema: z.ZodType<Prisma.WalletWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    address: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    address: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  address: z.string().optional(),
  AND: z.union([ z.lazy(() => WalletWhereInputSchema),z.lazy(() => WalletWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WalletWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WalletWhereInputSchema),z.lazy(() => WalletWhereInputSchema).array() ]).optional(),
  owner_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  chain_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  owner: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  chain: z.union([ z.lazy(() => ChainRelationFilterSchema),z.lazy(() => ChainWhereInputSchema) ]).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional()
}).strict());

export const WalletOrderByWithAggregationInputSchema: z.ZodType<Prisma.WalletOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  owner_id: z.lazy(() => SortOrderSchema).optional(),
  chain_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WalletCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => WalletAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WalletMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WalletMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => WalletSumOrderByAggregateInputSchema).optional()
}).strict();

export const WalletScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WalletScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => WalletScalarWhereWithAggregatesInputSchema),z.lazy(() => WalletScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WalletScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WalletScalarWhereWithAggregatesInputSchema),z.lazy(() => WalletScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  owner_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  chain_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiration_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  wallet_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user_agent: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  locale: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ip_address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nonce: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  wallet: z.union([ z.lazy(() => WalletRelationFilterSchema),z.lazy(() => WalletWhereInputSchema) ]).optional(),
}).strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiration_date: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  wallet_id: z.lazy(() => SortOrderSchema).optional(),
  user_agent: z.lazy(() => SortOrderSchema).optional(),
  locale: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ip_address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nonce: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  wallet: z.lazy(() => WalletOrderByWithRelationInputSchema).optional()
}).strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    user_id_user_agent: z.lazy(() => SessionUser_idUser_agentCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    user_id_user_agent: z.lazy(() => SessionUser_idUser_agentCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  user_id_user_agent: z.lazy(() => SessionUser_idUser_agentCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  expiration_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  wallet_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user_agent: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  locale: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ip_address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nonce: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  wallet: z.union([ z.lazy(() => WalletRelationFilterSchema),z.lazy(() => WalletWhereInputSchema) ]).optional(),
}).strict());

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiration_date: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  wallet_id: z.lazy(() => SortOrderSchema).optional(),
  user_agent: z.lazy(() => SortOrderSchema).optional(),
  locale: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ip_address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nonce: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional()
}).strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expiration_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  wallet_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  user_agent: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  locale: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  ip_address: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  nonce: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const PermissionWhereInputSchema: z.ZodType<Prisma.PermissionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PermissionWhereInputSchema),z.lazy(() => PermissionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PermissionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PermissionWhereInputSchema),z.lazy(() => PermissionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  action: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  entity: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  access: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  roles: z.lazy(() => RoleListRelationFilterSchema).optional()
}).strict();

export const PermissionOrderByWithRelationInputSchema: z.ZodType<Prisma.PermissionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  entity: z.lazy(() => SortOrderSchema).optional(),
  access: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  roles: z.lazy(() => RoleOrderByRelationAggregateInputSchema).optional()
}).strict();

export const PermissionWhereUniqueInputSchema: z.ZodType<Prisma.PermissionWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    action_entity_access: z.lazy(() => PermissionActionEntityAccessCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    action_entity_access: z.lazy(() => PermissionActionEntityAccessCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  action_entity_access: z.lazy(() => PermissionActionEntityAccessCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PermissionWhereInputSchema),z.lazy(() => PermissionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PermissionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PermissionWhereInputSchema),z.lazy(() => PermissionWhereInputSchema).array() ]).optional(),
  action: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  entity: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  access: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  roles: z.lazy(() => RoleListRelationFilterSchema).optional()
}).strict());

export const PermissionOrderByWithAggregationInputSchema: z.ZodType<Prisma.PermissionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  entity: z.lazy(() => SortOrderSchema).optional(),
  access: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PermissionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PermissionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PermissionMinOrderByAggregateInputSchema).optional()
}).strict();

export const PermissionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PermissionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PermissionScalarWhereWithAggregatesInputSchema),z.lazy(() => PermissionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PermissionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PermissionScalarWhereWithAggregatesInputSchema),z.lazy(() => PermissionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  action: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  entity: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  access: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const RoleWhereInputSchema: z.ZodType<Prisma.RoleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  users: z.lazy(() => UserListRelationFilterSchema).optional(),
  permissions: z.lazy(() => PermissionListRelationFilterSchema).optional()
}).strict();

export const RoleOrderByWithRelationInputSchema: z.ZodType<Prisma.RoleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  users: z.lazy(() => UserOrderByRelationAggregateInputSchema).optional(),
  permissions: z.lazy(() => PermissionOrderByRelationAggregateInputSchema).optional()
}).strict();

export const RoleWhereUniqueInputSchema: z.ZodType<Prisma.RoleWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    name: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  users: z.lazy(() => UserListRelationFilterSchema).optional(),
  permissions: z.lazy(() => PermissionListRelationFilterSchema).optional()
}).strict());

export const RoleOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RoleCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RoleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RoleMinOrderByAggregateInputSchema).optional()
}).strict();

export const RoleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RoleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RoleScalarWhereWithAggregatesInputSchema),z.lazy(() => RoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleScalarWhereWithAggregatesInputSchema),z.lazy(() => RoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MintSaleTransactionWhereInputSchema: z.ZodType<Prisma.MintSaleTransactionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MintSaleTransactionWhereInputSchema),z.lazy(() => MintSaleTransactionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MintSaleTransactionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MintSaleTransactionWhereInputSchema),z.lazy(() => MintSaleTransactionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  transaction_hash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  block_number: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  timestamp: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  token_address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value_decimal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  value_raw: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  from: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MintSaleTransactionOrderByWithRelationInputSchema: z.ZodType<Prisma.MintSaleTransactionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  transaction_hash: z.lazy(() => SortOrderSchema).optional(),
  block_number: z.lazy(() => SortOrderSchema).optional(),
  timestamp: z.lazy(() => SortOrderSchema).optional(),
  token_address: z.lazy(() => SortOrderSchema).optional(),
  value_decimal: z.lazy(() => SortOrderSchema).optional(),
  value_raw: z.lazy(() => SortOrderSchema).optional(),
  from: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MintSaleTransactionWhereUniqueInputSchema: z.ZodType<Prisma.MintSaleTransactionWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => MintSaleTransactionWhereInputSchema),z.lazy(() => MintSaleTransactionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MintSaleTransactionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MintSaleTransactionWhereInputSchema),z.lazy(() => MintSaleTransactionWhereInputSchema).array() ]).optional(),
  transaction_hash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  block_number: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  timestamp: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  token_address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value_decimal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  value_raw: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  from: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const MintSaleTransactionOrderByWithAggregationInputSchema: z.ZodType<Prisma.MintSaleTransactionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  transaction_hash: z.lazy(() => SortOrderSchema).optional(),
  block_number: z.lazy(() => SortOrderSchema).optional(),
  timestamp: z.lazy(() => SortOrderSchema).optional(),
  token_address: z.lazy(() => SortOrderSchema).optional(),
  value_decimal: z.lazy(() => SortOrderSchema).optional(),
  value_raw: z.lazy(() => SortOrderSchema).optional(),
  from: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MintSaleTransactionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => MintSaleTransactionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MintSaleTransactionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MintSaleTransactionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => MintSaleTransactionSumOrderByAggregateInputSchema).optional()
}).strict();

export const MintSaleTransactionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MintSaleTransactionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MintSaleTransactionScalarWhereWithAggregatesInputSchema),z.lazy(() => MintSaleTransactionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MintSaleTransactionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MintSaleTransactionScalarWhereWithAggregatesInputSchema),z.lazy(() => MintSaleTransactionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  transaction_hash: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  block_number: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  timestamp: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  token_address: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  value_decimal: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  value_raw: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  from: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const InstarevealCollectionWhereInputSchema: z.ZodType<Prisma.InstarevealCollectionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InstarevealCollectionWhereInputSchema),z.lazy(() => InstarevealCollectionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InstarevealCollectionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InstarevealCollectionWhereInputSchema),z.lazy(() => InstarevealCollectionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  paths: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const InstarevealCollectionOrderByWithRelationInputSchema: z.ZodType<Prisma.InstarevealCollectionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  paths: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstarevealCollectionWhereUniqueInputSchema: z.ZodType<Prisma.InstarevealCollectionWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => InstarevealCollectionWhereInputSchema),z.lazy(() => InstarevealCollectionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InstarevealCollectionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InstarevealCollectionWhereInputSchema),z.lazy(() => InstarevealCollectionWhereInputSchema).array() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  paths: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const InstarevealCollectionOrderByWithAggregationInputSchema: z.ZodType<Prisma.InstarevealCollectionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  paths: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InstarevealCollectionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InstarevealCollectionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InstarevealCollectionMinOrderByAggregateInputSchema).optional()
}).strict();

export const InstarevealCollectionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InstarevealCollectionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InstarevealCollectionScalarWhereWithAggregatesInputSchema),z.lazy(() => InstarevealCollectionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InstarevealCollectionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InstarevealCollectionScalarWhereWithAggregatesInputSchema),z.lazy(() => InstarevealCollectionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  paths: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ReferralWhereInputSchema: z.ZodType<Prisma.ReferralWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReferralWhereInputSchema),z.lazy(() => ReferralWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReferralWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReferralWhereInputSchema),z.lazy(() => ReferralWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  collection_address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  referral_amount_eth: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  referral_amount_wei: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  affiliate: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  transaction_hash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  minter_ens: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  txn_value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  block_number: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  affiliate_ens: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ReferralOrderByWithRelationInputSchema: z.ZodType<Prisma.ReferralOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  collection_address: z.lazy(() => SortOrderSchema).optional(),
  referral_amount_eth: z.lazy(() => SortOrderSchema).optional(),
  referral_amount_wei: z.lazy(() => SortOrderSchema).optional(),
  affiliate: z.lazy(() => SortOrderSchema).optional(),
  transaction_hash: z.lazy(() => SortOrderSchema).optional(),
  minter_ens: z.lazy(() => SortOrderSchema).optional(),
  txn_value: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  block_number: z.lazy(() => SortOrderSchema).optional(),
  affiliate_ens: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReferralWhereUniqueInputSchema: z.ZodType<Prisma.ReferralWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => ReferralWhereInputSchema),z.lazy(() => ReferralWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReferralWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReferralWhereInputSchema),z.lazy(() => ReferralWhereInputSchema).array() ]).optional(),
  collection_address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  referral_amount_eth: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  referral_amount_wei: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  affiliate: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  transaction_hash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  minter_ens: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  txn_value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  block_number: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  affiliate_ens: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const ReferralOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReferralOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  collection_address: z.lazy(() => SortOrderSchema).optional(),
  referral_amount_eth: z.lazy(() => SortOrderSchema).optional(),
  referral_amount_wei: z.lazy(() => SortOrderSchema).optional(),
  affiliate: z.lazy(() => SortOrderSchema).optional(),
  transaction_hash: z.lazy(() => SortOrderSchema).optional(),
  minter_ens: z.lazy(() => SortOrderSchema).optional(),
  txn_value: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  block_number: z.lazy(() => SortOrderSchema).optional(),
  affiliate_ens: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ReferralCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ReferralAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReferralMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReferralMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ReferralSumOrderByAggregateInputSchema).optional()
}).strict();

export const ReferralScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReferralScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ReferralScalarWhereWithAggregatesInputSchema),z.lazy(() => ReferralScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReferralScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReferralScalarWhereWithAggregatesInputSchema),z.lazy(() => ReferralScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  collection_address: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  referral_amount_eth: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  referral_amount_wei: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  affiliate: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  transaction_hash: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  minter_ens: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  txn_value: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  block_number: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  affiliate_ens: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CollectionCreateInputSchema: z.ZodType<Prisma.CollectionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  max_items: z.number().int(),
  max_batch_size: z.number().int(),
  symbol: z.string(),
  creator_address: z.string(),
  is_hidden: z.boolean(),
  sort_order: z.number().int(),
  is_mint_active: z.boolean(),
  is_archetype: z.boolean(),
  is_pending: z.boolean(),
  discounts: z.string(),
  owner_alt_payout: z.string(),
  super_affiliate_payout: z.string(),
  contract_version: z.number().int(),
  slug: z.string(),
  mint_info: z.string(),
  socials: z.string(),
  token_address: z.string(),
  token_address_lowercase: z.string(),
  trait_counts: z.string(),
  avatar_uri: z.string(),
  banner_uri: z.string(),
  description: z.string(),
  hero_uri: z.string(),
  twitter: z.string(),
  website: z.string(),
  discord: z.string(),
  num_items: z.number().int(),
  num_owners: z.number().int(),
  last_refreshed: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  mint_data: z.lazy(() => MintDataCreateNestedOneWithoutCollectionInputSchema).optional(),
  creator: z.lazy(() => UserCreateNestedOneWithoutCollectionsInputSchema),
  nfts: z.lazy(() => NftCreateNestedManyWithoutCollectionInputSchema).optional()
}).strict();

export const CollectionUncheckedCreateInputSchema: z.ZodType<Prisma.CollectionUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  max_items: z.number().int(),
  max_batch_size: z.number().int(),
  symbol: z.string(),
  creator_address: z.string(),
  is_hidden: z.boolean(),
  sort_order: z.number().int(),
  is_mint_active: z.boolean(),
  is_archetype: z.boolean(),
  is_pending: z.boolean(),
  discounts: z.string(),
  owner_alt_payout: z.string(),
  super_affiliate_payout: z.string(),
  contract_version: z.number().int(),
  slug: z.string(),
  mint_info: z.string(),
  socials: z.string(),
  token_address: z.string(),
  token_address_lowercase: z.string(),
  trait_counts: z.string(),
  avatar_uri: z.string(),
  banner_uri: z.string(),
  description: z.string(),
  hero_uri: z.string(),
  twitter: z.string(),
  website: z.string(),
  discord: z.string(),
  num_items: z.number().int(),
  num_owners: z.number().int(),
  last_refreshed: z.coerce.date(),
  user_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  mint_data: z.lazy(() => MintDataUncheckedCreateNestedOneWithoutCollectionInputSchema).optional(),
  nfts: z.lazy(() => NftUncheckedCreateNestedManyWithoutCollectionInputSchema).optional()
}).strict();

export const CollectionUpdateInputSchema: z.ZodType<Prisma.CollectionUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  max_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  max_batch_size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_hidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  sort_order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  is_mint_active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_archetype: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_pending: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  discounts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_alt_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  super_affiliate_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contract_version: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mint_info: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trait_counts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  banner_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hero_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  twitter: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discord: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  num_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  num_owners: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  last_refreshed: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mint_data: z.lazy(() => MintDataUpdateOneWithoutCollectionNestedInputSchema).optional(),
  creator: z.lazy(() => UserUpdateOneRequiredWithoutCollectionsNestedInputSchema).optional(),
  nfts: z.lazy(() => NftUpdateManyWithoutCollectionNestedInputSchema).optional()
}).strict();

export const CollectionUncheckedUpdateInputSchema: z.ZodType<Prisma.CollectionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  max_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  max_batch_size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_hidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  sort_order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  is_mint_active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_archetype: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_pending: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  discounts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_alt_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  super_affiliate_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contract_version: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mint_info: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trait_counts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  banner_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hero_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  twitter: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discord: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  num_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  num_owners: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  last_refreshed: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mint_data: z.lazy(() => MintDataUncheckedUpdateOneWithoutCollectionNestedInputSchema).optional(),
  nfts: z.lazy(() => NftUncheckedUpdateManyWithoutCollectionNestedInputSchema).optional()
}).strict();

export const CollectionUpdateManyMutationInputSchema: z.ZodType<Prisma.CollectionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  max_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  max_batch_size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_hidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  sort_order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  is_mint_active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_archetype: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_pending: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  discounts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_alt_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  super_affiliate_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contract_version: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mint_info: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trait_counts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  banner_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hero_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  twitter: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discord: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  num_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  num_owners: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  last_refreshed: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CollectionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CollectionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  max_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  max_batch_size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_hidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  sort_order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  is_mint_active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_archetype: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_pending: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  discounts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_alt_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  super_affiliate_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contract_version: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mint_info: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trait_counts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  banner_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hero_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  twitter: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discord: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  num_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  num_owners: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  last_refreshed: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NftCreateInputSchema: z.ZodType<Prisma.NftCreateInput> = z.object({
  id: z.string().cuid().optional(),
  token_address: z.string(),
  token_address_lowercase: z.string(),
  token_id: z.string(),
  attributes: z.string(),
  block_minted: z.number().int(),
  contract_type: z.string(),
  description: z.string(),
  dna: z.string(),
  edition: z.number().int(),
  image: z.string(),
  image_url: z.string(),
  metadata: z.string(),
  name: z.string(),
  network: z.string(),
  old_image_url: z.string(),
  old_token_uri: z.string(),
  owner_of: z.string(),
  token_id_int: z.number().int(),
  token_uri: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  open_rarity: z.lazy(() => OpenRarityCreateNestedOneWithoutNftInputSchema).optional(),
  collection: z.lazy(() => CollectionCreateNestedOneWithoutNftsInputSchema)
}).strict();

export const NftUncheckedCreateInputSchema: z.ZodType<Prisma.NftUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  token_address: z.string(),
  token_address_lowercase: z.string(),
  token_id: z.string(),
  attributes: z.string(),
  block_minted: z.number().int(),
  contract_type: z.string(),
  description: z.string(),
  dna: z.string(),
  edition: z.number().int(),
  image: z.string(),
  image_url: z.string(),
  metadata: z.string(),
  name: z.string(),
  network: z.string(),
  old_image_url: z.string(),
  old_token_uri: z.string(),
  owner_of: z.string(),
  token_id_int: z.number().int(),
  token_uri: z.string(),
  collection_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  open_rarity: z.lazy(() => OpenRarityUncheckedCreateNestedOneWithoutNftInputSchema).optional()
}).strict();

export const NftUpdateInputSchema: z.ZodType<Prisma.NftUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attributes: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_minted: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  contract_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dna: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  edition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  network: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  old_image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  old_token_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_of: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_id_int: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  token_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  open_rarity: z.lazy(() => OpenRarityUpdateOneWithoutNftNestedInputSchema).optional(),
  collection: z.lazy(() => CollectionUpdateOneRequiredWithoutNftsNestedInputSchema).optional()
}).strict();

export const NftUncheckedUpdateInputSchema: z.ZodType<Prisma.NftUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attributes: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_minted: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  contract_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dna: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  edition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  network: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  old_image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  old_token_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_of: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_id_int: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  token_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  collection_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  open_rarity: z.lazy(() => OpenRarityUncheckedUpdateOneWithoutNftNestedInputSchema).optional()
}).strict();

export const NftUpdateManyMutationInputSchema: z.ZodType<Prisma.NftUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attributes: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_minted: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  contract_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dna: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  edition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  network: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  old_image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  old_token_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_of: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_id_int: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  token_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NftUncheckedUpdateManyInputSchema: z.ZodType<Prisma.NftUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attributes: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_minted: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  contract_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dna: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  edition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  network: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  old_image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  old_token_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_of: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_id_int: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  token_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  collection_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MintDataCreateInputSchema: z.ZodType<Prisma.MintDataCreateInput> = z.object({
  id: z.string().cuid().optional(),
  block_last_mint: z.number().int(),
  date_last_mint: z.coerce.date(),
  mints_last_1h: z.number().int(),
  mints_last_12h: z.number().int(),
  mints_last_24h: z.number().int(),
  mints_last_7d: z.number().int(),
  mints_last_1m: z.number().int(),
  mints_last_6m: z.number().int(),
  floor_price_raw: z.string(),
  floor_price_decimal: z.number(),
  all_time_raw: z.string(),
  all_time_decimal: z.number(),
  last_12h_decimal: z.number(),
  last_1h_decimal: z.number(),
  last_24h_decimal: z.number(),
  last_7d_decimal: z.number(),
  last_1m_decimal: z.number(),
  last_6m_decimal: z.number(),
  date_last_sale: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  collection: z.lazy(() => CollectionCreateNestedOneWithoutMint_dataInputSchema)
}).strict();

export const MintDataUncheckedCreateInputSchema: z.ZodType<Prisma.MintDataUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  block_last_mint: z.number().int(),
  date_last_mint: z.coerce.date(),
  mints_last_1h: z.number().int(),
  mints_last_12h: z.number().int(),
  mints_last_24h: z.number().int(),
  mints_last_7d: z.number().int(),
  mints_last_1m: z.number().int(),
  mints_last_6m: z.number().int(),
  floor_price_raw: z.string(),
  floor_price_decimal: z.number(),
  all_time_raw: z.string(),
  all_time_decimal: z.number(),
  last_12h_decimal: z.number(),
  last_1h_decimal: z.number(),
  last_24h_decimal: z.number(),
  last_7d_decimal: z.number(),
  last_1m_decimal: z.number(),
  last_6m_decimal: z.number(),
  date_last_sale: z.coerce.date(),
  collection_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const MintDataUpdateInputSchema: z.ZodType<Prisma.MintDataUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_last_mint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_last_mint: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_1h: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_12h: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_24h: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_7d: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_1m: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_6m: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  floor_price_raw: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  floor_price_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  all_time_raw: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  all_time_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_12h_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_1h_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_24h_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_7d_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_1m_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_6m_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  date_last_sale: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  collection: z.lazy(() => CollectionUpdateOneRequiredWithoutMint_dataNestedInputSchema).optional()
}).strict();

export const MintDataUncheckedUpdateInputSchema: z.ZodType<Prisma.MintDataUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_last_mint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_last_mint: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_1h: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_12h: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_24h: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_7d: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_1m: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_6m: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  floor_price_raw: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  floor_price_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  all_time_raw: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  all_time_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_12h_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_1h_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_24h_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_7d_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_1m_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_6m_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  date_last_sale: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  collection_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MintDataUpdateManyMutationInputSchema: z.ZodType<Prisma.MintDataUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_last_mint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_last_mint: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_1h: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_12h: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_24h: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_7d: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_1m: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_6m: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  floor_price_raw: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  floor_price_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  all_time_raw: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  all_time_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_12h_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_1h_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_24h_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_7d_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_1m_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_6m_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  date_last_sale: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MintDataUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MintDataUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_last_mint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_last_mint: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_1h: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_12h: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_24h: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_7d: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_1m: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_6m: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  floor_price_raw: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  floor_price_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  all_time_raw: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  all_time_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_12h_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_1h_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_24h_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_7d_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_1m_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_6m_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  date_last_sale: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  collection_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OpenRarityCreateInputSchema: z.ZodType<Prisma.OpenRarityCreateInput> = z.object({
  id: z.string().cuid().optional(),
  rank: z.number().int(),
  score: z.number(),
  unique_attributes: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  nft: z.lazy(() => NftCreateNestedOneWithoutOpen_rarityInputSchema)
}).strict();

export const OpenRarityUncheckedCreateInputSchema: z.ZodType<Prisma.OpenRarityUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  rank: z.number().int(),
  score: z.number(),
  unique_attributes: z.number().int(),
  nft_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const OpenRarityUpdateInputSchema: z.ZodType<Prisma.OpenRarityUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rank: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  score: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  unique_attributes: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  nft: z.lazy(() => NftUpdateOneRequiredWithoutOpen_rarityNestedInputSchema).optional()
}).strict();

export const OpenRarityUncheckedUpdateInputSchema: z.ZodType<Prisma.OpenRarityUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rank: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  score: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  unique_attributes: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  nft_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OpenRarityUpdateManyMutationInputSchema: z.ZodType<Prisma.OpenRarityUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rank: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  score: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  unique_attributes: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OpenRarityUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OpenRarityUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rank: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  score: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  unique_attributes: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  nft_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),
  avatar_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  banner_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  username: z.string().max(64, { message: "too lengthy" }).optional().nullable(),
  description: z.string().max(512, { message: "too long" }).optional().nullable(),
  ens: z.string().optional().nullable(),
  status: z.string().optional(),
  email: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable(),
  collections: z.lazy(() => CollectionCreateNestedManyWithoutCreatorInputSchema).optional(),
  wallets: z.lazy(() => WalletCreateNestedManyWithoutOwnerInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutUsersInputSchema).optional(),
  connections: z.lazy(() => ConnectionCreateNestedManyWithoutUserInputSchema).optional(),
  password: z.lazy(() => PasswordCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),
  avatar_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  banner_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  username: z.string().max(64, { message: "too lengthy" }).optional().nullable(),
  description: z.string().max(512, { message: "too long" }).optional().nullable(),
  ens: z.string().optional().nullable(),
  status: z.string().optional(),
  email: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable(),
  collections: z.lazy(() => CollectionUncheckedCreateNestedManyWithoutCreatorInputSchema).optional(),
  wallets: z.lazy(() => WalletUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  connections: z.lazy(() => ConnectionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  password: z.lazy(() => PasswordUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banner_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string().max(64, { message: "too lengthy" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string().max(512, { message: "too long" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ens: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collections: z.lazy(() => CollectionUpdateManyWithoutCreatorNestedInputSchema).optional(),
  wallets: z.lazy(() => WalletUpdateManyWithoutOwnerNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutUsersNestedInputSchema).optional(),
  connections: z.lazy(() => ConnectionUpdateManyWithoutUserNestedInputSchema).optional(),
  password: z.lazy(() => PasswordUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banner_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string().max(64, { message: "too lengthy" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string().max(512, { message: "too long" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ens: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collections: z.lazy(() => CollectionUncheckedUpdateManyWithoutCreatorNestedInputSchema).optional(),
  wallets: z.lazy(() => WalletUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  connections: z.lazy(() => ConnectionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  password: z.lazy(() => PasswordUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banner_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string().max(64, { message: "too lengthy" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string().max(512, { message: "too long" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ens: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banner_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string().max(64, { message: "too lengthy" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string().max(512, { message: "too long" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ens: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ConnectionCreateInputSchema: z.ZodType<Prisma.ConnectionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  provider_name: z.string(),
  provider_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutConnectionsInputSchema)
}).strict();

export const ConnectionUncheckedCreateInputSchema: z.ZodType<Prisma.ConnectionUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  provider_name: z.string(),
  provider_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string()
}).strict();

export const ConnectionUpdateInputSchema: z.ZodType<Prisma.ConnectionUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutConnectionsNestedInputSchema).optional()
}).strict();

export const ConnectionUncheckedUpdateInputSchema: z.ZodType<Prisma.ConnectionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ConnectionUpdateManyMutationInputSchema: z.ZodType<Prisma.ConnectionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ConnectionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ConnectionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PasswordCreateInputSchema: z.ZodType<Prisma.PasswordCreateInput> = z.object({
  hash: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutPasswordInputSchema)
}).strict();

export const PasswordUncheckedCreateInputSchema: z.ZodType<Prisma.PasswordUncheckedCreateInput> = z.object({
  hash: z.string(),
  user_id: z.string()
}).strict();

export const PasswordUpdateInputSchema: z.ZodType<Prisma.PasswordUpdateInput> = z.object({
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutPasswordNestedInputSchema).optional()
}).strict();

export const PasswordUncheckedUpdateInputSchema: z.ZodType<Prisma.PasswordUncheckedUpdateInput> = z.object({
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PasswordUpdateManyMutationInputSchema: z.ZodType<Prisma.PasswordUpdateManyMutationInput> = z.object({
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PasswordUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PasswordUncheckedUpdateManyInput> = z.object({
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChainCreateInputSchema: z.ZodType<Prisma.ChainCreateInput> = z.object({
  id: z.number().int(),
  slug: z.string(),
  name: z.string(),
  symbol: z.string(),
  is_testnet: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable(),
  wallet: z.lazy(() => WalletCreateNestedManyWithoutChainInputSchema).optional()
}).strict();

export const ChainUncheckedCreateInputSchema: z.ZodType<Prisma.ChainUncheckedCreateInput> = z.object({
  id: z.number().int(),
  slug: z.string(),
  name: z.string(),
  symbol: z.string(),
  is_testnet: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable(),
  wallet: z.lazy(() => WalletUncheckedCreateNestedManyWithoutChainInputSchema).optional()
}).strict();

export const ChainUpdateInputSchema: z.ZodType<Prisma.ChainUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_testnet: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wallet: z.lazy(() => WalletUpdateManyWithoutChainNestedInputSchema).optional()
}).strict();

export const ChainUncheckedUpdateInputSchema: z.ZodType<Prisma.ChainUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_testnet: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wallet: z.lazy(() => WalletUncheckedUpdateManyWithoutChainNestedInputSchema).optional()
}).strict();

export const ChainUpdateManyMutationInputSchema: z.ZodType<Prisma.ChainUpdateManyMutationInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_testnet: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ChainUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ChainUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_testnet: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const WalletCreateInputSchema: z.ZodType<Prisma.WalletCreateInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutWalletsInputSchema),
  chain: z.lazy(() => ChainCreateNestedOneWithoutWalletInputSchema),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutWalletInputSchema).optional()
}).strict();

export const WalletUncheckedCreateInputSchema: z.ZodType<Prisma.WalletUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string(),
  owner_id: z.string(),
  chain_id: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutWalletInputSchema).optional()
}).strict();

export const WalletUpdateInputSchema: z.ZodType<Prisma.WalletUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutWalletsNestedInputSchema).optional(),
  chain: z.lazy(() => ChainUpdateOneRequiredWithoutWalletNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutWalletNestedInputSchema).optional()
}).strict();

export const WalletUncheckedUpdateInputSchema: z.ZodType<Prisma.WalletUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  chain_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutWalletNestedInputSchema).optional()
}).strict();

export const WalletUpdateManyMutationInputSchema: z.ZodType<Prisma.WalletUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WalletUncheckedUpdateManyInputSchema: z.ZodType<Prisma.WalletUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  chain_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  expiration_date: z.coerce.date(),
  user_agent: z.string().optional(),
  locale: z.string().optional().nullable(),
  ip_address: z.string().optional().nullable(),
  nonce: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema),
  wallet: z.lazy(() => WalletCreateNestedOneWithoutSessionsInputSchema)
}).strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  expiration_date: z.coerce.date(),
  user_id: z.string(),
  wallet_id: z.string(),
  user_agent: z.string().optional(),
  locale: z.string().optional().nullable(),
  ip_address: z.string().optional().nullable(),
  nonce: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiration_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_agent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ip_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nonce: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema).optional(),
  wallet: z.lazy(() => WalletUpdateOneRequiredWithoutSessionsNestedInputSchema).optional()
}).strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiration_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  wallet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_agent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ip_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nonce: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiration_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_agent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ip_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nonce: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiration_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  wallet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_agent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ip_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nonce: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PermissionCreateInputSchema: z.ZodType<Prisma.PermissionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  action: z.string(),
  entity: z.string(),
  access: z.string(),
  description: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutPermissionsInputSchema).optional()
}).strict();

export const PermissionUncheckedCreateInputSchema: z.ZodType<Prisma.PermissionUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  action: z.string(),
  entity: z.string(),
  access: z.string(),
  description: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutPermissionsInputSchema).optional()
}).strict();

export const PermissionUpdateInputSchema: z.ZodType<Prisma.PermissionUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  action: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  entity: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  access: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutPermissionsNestedInputSchema).optional()
}).strict();

export const PermissionUncheckedUpdateInputSchema: z.ZodType<Prisma.PermissionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  action: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  entity: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  access: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutPermissionsNestedInputSchema).optional()
}).strict();

export const PermissionUpdateManyMutationInputSchema: z.ZodType<Prisma.PermissionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  action: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  entity: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  access: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PermissionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PermissionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  action: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  entity: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  access: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleCreateInputSchema: z.ZodType<Prisma.RoleCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutRolesInputSchema).optional(),
  permissions: z.lazy(() => PermissionCreateNestedManyWithoutRolesInputSchema).optional()
}).strict();

export const RoleUncheckedCreateInputSchema: z.ZodType<Prisma.RoleUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutRolesInputSchema).optional(),
  permissions: z.lazy(() => PermissionUncheckedCreateNestedManyWithoutRolesInputSchema).optional()
}).strict();

export const RoleUpdateInputSchema: z.ZodType<Prisma.RoleUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateManyWithoutRolesNestedInputSchema).optional(),
  permissions: z.lazy(() => PermissionUpdateManyWithoutRolesNestedInputSchema).optional()
}).strict();

export const RoleUncheckedUpdateInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutRolesNestedInputSchema).optional(),
  permissions: z.lazy(() => PermissionUncheckedUpdateManyWithoutRolesNestedInputSchema).optional()
}).strict();

export const RoleUpdateManyMutationInputSchema: z.ZodType<Prisma.RoleUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MintSaleTransactionCreateInputSchema: z.ZodType<Prisma.MintSaleTransactionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  transaction_hash: z.string(),
  block_number: z.number().int(),
  timestamp: z.coerce.date(),
  token_address: z.string(),
  value_decimal: z.number(),
  value_raw: z.string(),
  from: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const MintSaleTransactionUncheckedCreateInputSchema: z.ZodType<Prisma.MintSaleTransactionUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  transaction_hash: z.string(),
  block_number: z.number().int(),
  timestamp: z.coerce.date(),
  token_address: z.string(),
  value_decimal: z.number(),
  value_raw: z.string(),
  from: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const MintSaleTransactionUpdateInputSchema: z.ZodType<Prisma.MintSaleTransactionUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transaction_hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  timestamp: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  value_raw: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  from: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MintSaleTransactionUncheckedUpdateInputSchema: z.ZodType<Prisma.MintSaleTransactionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transaction_hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  timestamp: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  value_raw: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  from: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MintSaleTransactionUpdateManyMutationInputSchema: z.ZodType<Prisma.MintSaleTransactionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transaction_hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  timestamp: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  value_raw: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  from: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MintSaleTransactionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MintSaleTransactionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transaction_hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  timestamp: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  value_raw: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  from: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstarevealCollectionCreateInputSchema: z.ZodType<Prisma.InstarevealCollectionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string(),
  paths: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const InstarevealCollectionUncheckedCreateInputSchema: z.ZodType<Prisma.InstarevealCollectionUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string(),
  paths: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const InstarevealCollectionUpdateInputSchema: z.ZodType<Prisma.InstarevealCollectionUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paths: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstarevealCollectionUncheckedUpdateInputSchema: z.ZodType<Prisma.InstarevealCollectionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paths: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstarevealCollectionUpdateManyMutationInputSchema: z.ZodType<Prisma.InstarevealCollectionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paths: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstarevealCollectionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InstarevealCollectionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paths: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReferralCreateInputSchema: z.ZodType<Prisma.ReferralCreateInput> = z.object({
  id: z.string().cuid().optional(),
  collection_address: z.string(),
  referral_amount_eth: z.string(),
  referral_amount_wei: z.string(),
  affiliate: z.string(),
  transaction_hash: z.string(),
  minter_ens: z.string(),
  txn_value: z.string(),
  date: z.coerce.date(),
  block_number: z.number().int(),
  affiliate_ens: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const ReferralUncheckedCreateInputSchema: z.ZodType<Prisma.ReferralUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  collection_address: z.string(),
  referral_amount_eth: z.string(),
  referral_amount_wei: z.string(),
  affiliate: z.string(),
  transaction_hash: z.string(),
  minter_ens: z.string(),
  txn_value: z.string(),
  date: z.coerce.date(),
  block_number: z.number().int(),
  affiliate_ens: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const ReferralUpdateInputSchema: z.ZodType<Prisma.ReferralUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  collection_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  referral_amount_eth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  referral_amount_wei: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  affiliate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transaction_hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  minter_ens: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  txn_value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  block_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  affiliate_ens: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReferralUncheckedUpdateInputSchema: z.ZodType<Prisma.ReferralUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  collection_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  referral_amount_eth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  referral_amount_wei: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  affiliate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transaction_hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  minter_ens: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  txn_value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  block_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  affiliate_ens: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReferralUpdateManyMutationInputSchema: z.ZodType<Prisma.ReferralUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  collection_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  referral_amount_eth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  referral_amount_wei: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  affiliate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transaction_hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  minter_ens: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  txn_value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  block_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  affiliate_ens: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReferralUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ReferralUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  collection_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  referral_amount_eth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  referral_amount_wei: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  affiliate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transaction_hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  minter_ens: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  txn_value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  block_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  affiliate_ens: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const MintDataNullableRelationFilterSchema: z.ZodType<Prisma.MintDataNullableRelationFilter> = z.object({
  is: z.lazy(() => MintDataWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => MintDataWhereInputSchema).optional().nullable()
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const NftListRelationFilterSchema: z.ZodType<Prisma.NftListRelationFilter> = z.object({
  every: z.lazy(() => NftWhereInputSchema).optional(),
  some: z.lazy(() => NftWhereInputSchema).optional(),
  none: z.lazy(() => NftWhereInputSchema).optional()
}).strict();

export const NftOrderByRelationAggregateInputSchema: z.ZodType<Prisma.NftOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CollectionCountOrderByAggregateInputSchema: z.ZodType<Prisma.CollectionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  max_items: z.lazy(() => SortOrderSchema).optional(),
  max_batch_size: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  creator_address: z.lazy(() => SortOrderSchema).optional(),
  is_hidden: z.lazy(() => SortOrderSchema).optional(),
  sort_order: z.lazy(() => SortOrderSchema).optional(),
  is_mint_active: z.lazy(() => SortOrderSchema).optional(),
  is_archetype: z.lazy(() => SortOrderSchema).optional(),
  is_pending: z.lazy(() => SortOrderSchema).optional(),
  discounts: z.lazy(() => SortOrderSchema).optional(),
  owner_alt_payout: z.lazy(() => SortOrderSchema).optional(),
  super_affiliate_payout: z.lazy(() => SortOrderSchema).optional(),
  contract_version: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  mint_info: z.lazy(() => SortOrderSchema).optional(),
  socials: z.lazy(() => SortOrderSchema).optional(),
  token_address: z.lazy(() => SortOrderSchema).optional(),
  token_address_lowercase: z.lazy(() => SortOrderSchema).optional(),
  trait_counts: z.lazy(() => SortOrderSchema).optional(),
  avatar_uri: z.lazy(() => SortOrderSchema).optional(),
  banner_uri: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  hero_uri: z.lazy(() => SortOrderSchema).optional(),
  twitter: z.lazy(() => SortOrderSchema).optional(),
  website: z.lazy(() => SortOrderSchema).optional(),
  discord: z.lazy(() => SortOrderSchema).optional(),
  num_items: z.lazy(() => SortOrderSchema).optional(),
  num_owners: z.lazy(() => SortOrderSchema).optional(),
  last_refreshed: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CollectionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CollectionAvgOrderByAggregateInput> = z.object({
  max_items: z.lazy(() => SortOrderSchema).optional(),
  max_batch_size: z.lazy(() => SortOrderSchema).optional(),
  sort_order: z.lazy(() => SortOrderSchema).optional(),
  contract_version: z.lazy(() => SortOrderSchema).optional(),
  num_items: z.lazy(() => SortOrderSchema).optional(),
  num_owners: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CollectionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CollectionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  max_items: z.lazy(() => SortOrderSchema).optional(),
  max_batch_size: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  creator_address: z.lazy(() => SortOrderSchema).optional(),
  is_hidden: z.lazy(() => SortOrderSchema).optional(),
  sort_order: z.lazy(() => SortOrderSchema).optional(),
  is_mint_active: z.lazy(() => SortOrderSchema).optional(),
  is_archetype: z.lazy(() => SortOrderSchema).optional(),
  is_pending: z.lazy(() => SortOrderSchema).optional(),
  discounts: z.lazy(() => SortOrderSchema).optional(),
  owner_alt_payout: z.lazy(() => SortOrderSchema).optional(),
  super_affiliate_payout: z.lazy(() => SortOrderSchema).optional(),
  contract_version: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  mint_info: z.lazy(() => SortOrderSchema).optional(),
  socials: z.lazy(() => SortOrderSchema).optional(),
  token_address: z.lazy(() => SortOrderSchema).optional(),
  token_address_lowercase: z.lazy(() => SortOrderSchema).optional(),
  trait_counts: z.lazy(() => SortOrderSchema).optional(),
  avatar_uri: z.lazy(() => SortOrderSchema).optional(),
  banner_uri: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  hero_uri: z.lazy(() => SortOrderSchema).optional(),
  twitter: z.lazy(() => SortOrderSchema).optional(),
  website: z.lazy(() => SortOrderSchema).optional(),
  discord: z.lazy(() => SortOrderSchema).optional(),
  num_items: z.lazy(() => SortOrderSchema).optional(),
  num_owners: z.lazy(() => SortOrderSchema).optional(),
  last_refreshed: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CollectionMinOrderByAggregateInputSchema: z.ZodType<Prisma.CollectionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  max_items: z.lazy(() => SortOrderSchema).optional(),
  max_batch_size: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  creator_address: z.lazy(() => SortOrderSchema).optional(),
  is_hidden: z.lazy(() => SortOrderSchema).optional(),
  sort_order: z.lazy(() => SortOrderSchema).optional(),
  is_mint_active: z.lazy(() => SortOrderSchema).optional(),
  is_archetype: z.lazy(() => SortOrderSchema).optional(),
  is_pending: z.lazy(() => SortOrderSchema).optional(),
  discounts: z.lazy(() => SortOrderSchema).optional(),
  owner_alt_payout: z.lazy(() => SortOrderSchema).optional(),
  super_affiliate_payout: z.lazy(() => SortOrderSchema).optional(),
  contract_version: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  mint_info: z.lazy(() => SortOrderSchema).optional(),
  socials: z.lazy(() => SortOrderSchema).optional(),
  token_address: z.lazy(() => SortOrderSchema).optional(),
  token_address_lowercase: z.lazy(() => SortOrderSchema).optional(),
  trait_counts: z.lazy(() => SortOrderSchema).optional(),
  avatar_uri: z.lazy(() => SortOrderSchema).optional(),
  banner_uri: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  hero_uri: z.lazy(() => SortOrderSchema).optional(),
  twitter: z.lazy(() => SortOrderSchema).optional(),
  website: z.lazy(() => SortOrderSchema).optional(),
  discord: z.lazy(() => SortOrderSchema).optional(),
  num_items: z.lazy(() => SortOrderSchema).optional(),
  num_owners: z.lazy(() => SortOrderSchema).optional(),
  last_refreshed: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CollectionSumOrderByAggregateInputSchema: z.ZodType<Prisma.CollectionSumOrderByAggregateInput> = z.object({
  max_items: z.lazy(() => SortOrderSchema).optional(),
  max_batch_size: z.lazy(() => SortOrderSchema).optional(),
  sort_order: z.lazy(() => SortOrderSchema).optional(),
  contract_version: z.lazy(() => SortOrderSchema).optional(),
  num_items: z.lazy(() => SortOrderSchema).optional(),
  num_owners: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const OpenRarityNullableRelationFilterSchema: z.ZodType<Prisma.OpenRarityNullableRelationFilter> = z.object({
  is: z.lazy(() => OpenRarityWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => OpenRarityWhereInputSchema).optional().nullable()
}).strict();

export const CollectionRelationFilterSchema: z.ZodType<Prisma.CollectionRelationFilter> = z.object({
  is: z.lazy(() => CollectionWhereInputSchema).optional(),
  isNot: z.lazy(() => CollectionWhereInputSchema).optional()
}).strict();

export const NftCountOrderByAggregateInputSchema: z.ZodType<Prisma.NftCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  token_address: z.lazy(() => SortOrderSchema).optional(),
  token_address_lowercase: z.lazy(() => SortOrderSchema).optional(),
  token_id: z.lazy(() => SortOrderSchema).optional(),
  attributes: z.lazy(() => SortOrderSchema).optional(),
  block_minted: z.lazy(() => SortOrderSchema).optional(),
  contract_type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  dna: z.lazy(() => SortOrderSchema).optional(),
  edition: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  network: z.lazy(() => SortOrderSchema).optional(),
  old_image_url: z.lazy(() => SortOrderSchema).optional(),
  old_token_uri: z.lazy(() => SortOrderSchema).optional(),
  owner_of: z.lazy(() => SortOrderSchema).optional(),
  token_id_int: z.lazy(() => SortOrderSchema).optional(),
  token_uri: z.lazy(() => SortOrderSchema).optional(),
  collection_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NftAvgOrderByAggregateInputSchema: z.ZodType<Prisma.NftAvgOrderByAggregateInput> = z.object({
  block_minted: z.lazy(() => SortOrderSchema).optional(),
  edition: z.lazy(() => SortOrderSchema).optional(),
  token_id_int: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NftMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NftMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  token_address: z.lazy(() => SortOrderSchema).optional(),
  token_address_lowercase: z.lazy(() => SortOrderSchema).optional(),
  token_id: z.lazy(() => SortOrderSchema).optional(),
  attributes: z.lazy(() => SortOrderSchema).optional(),
  block_minted: z.lazy(() => SortOrderSchema).optional(),
  contract_type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  dna: z.lazy(() => SortOrderSchema).optional(),
  edition: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  network: z.lazy(() => SortOrderSchema).optional(),
  old_image_url: z.lazy(() => SortOrderSchema).optional(),
  old_token_uri: z.lazy(() => SortOrderSchema).optional(),
  owner_of: z.lazy(() => SortOrderSchema).optional(),
  token_id_int: z.lazy(() => SortOrderSchema).optional(),
  token_uri: z.lazy(() => SortOrderSchema).optional(),
  collection_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NftMinOrderByAggregateInputSchema: z.ZodType<Prisma.NftMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  token_address: z.lazy(() => SortOrderSchema).optional(),
  token_address_lowercase: z.lazy(() => SortOrderSchema).optional(),
  token_id: z.lazy(() => SortOrderSchema).optional(),
  attributes: z.lazy(() => SortOrderSchema).optional(),
  block_minted: z.lazy(() => SortOrderSchema).optional(),
  contract_type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  dna: z.lazy(() => SortOrderSchema).optional(),
  edition: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  network: z.lazy(() => SortOrderSchema).optional(),
  old_image_url: z.lazy(() => SortOrderSchema).optional(),
  old_token_uri: z.lazy(() => SortOrderSchema).optional(),
  owner_of: z.lazy(() => SortOrderSchema).optional(),
  token_id_int: z.lazy(() => SortOrderSchema).optional(),
  token_uri: z.lazy(() => SortOrderSchema).optional(),
  collection_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NftSumOrderByAggregateInputSchema: z.ZodType<Prisma.NftSumOrderByAggregateInput> = z.object({
  block_minted: z.lazy(() => SortOrderSchema).optional(),
  edition: z.lazy(() => SortOrderSchema).optional(),
  token_id_int: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const MintDataCountOrderByAggregateInputSchema: z.ZodType<Prisma.MintDataCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  block_last_mint: z.lazy(() => SortOrderSchema).optional(),
  date_last_mint: z.lazy(() => SortOrderSchema).optional(),
  mints_last_1h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_12h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_24h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_7d: z.lazy(() => SortOrderSchema).optional(),
  mints_last_1m: z.lazy(() => SortOrderSchema).optional(),
  mints_last_6m: z.lazy(() => SortOrderSchema).optional(),
  floor_price_raw: z.lazy(() => SortOrderSchema).optional(),
  floor_price_decimal: z.lazy(() => SortOrderSchema).optional(),
  all_time_raw: z.lazy(() => SortOrderSchema).optional(),
  all_time_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_12h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_1h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_24h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_7d_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_1m_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_6m_decimal: z.lazy(() => SortOrderSchema).optional(),
  date_last_sale: z.lazy(() => SortOrderSchema).optional(),
  collection_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MintDataAvgOrderByAggregateInputSchema: z.ZodType<Prisma.MintDataAvgOrderByAggregateInput> = z.object({
  block_last_mint: z.lazy(() => SortOrderSchema).optional(),
  mints_last_1h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_12h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_24h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_7d: z.lazy(() => SortOrderSchema).optional(),
  mints_last_1m: z.lazy(() => SortOrderSchema).optional(),
  mints_last_6m: z.lazy(() => SortOrderSchema).optional(),
  floor_price_decimal: z.lazy(() => SortOrderSchema).optional(),
  all_time_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_12h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_1h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_24h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_7d_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_1m_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_6m_decimal: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MintDataMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MintDataMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  block_last_mint: z.lazy(() => SortOrderSchema).optional(),
  date_last_mint: z.lazy(() => SortOrderSchema).optional(),
  mints_last_1h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_12h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_24h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_7d: z.lazy(() => SortOrderSchema).optional(),
  mints_last_1m: z.lazy(() => SortOrderSchema).optional(),
  mints_last_6m: z.lazy(() => SortOrderSchema).optional(),
  floor_price_raw: z.lazy(() => SortOrderSchema).optional(),
  floor_price_decimal: z.lazy(() => SortOrderSchema).optional(),
  all_time_raw: z.lazy(() => SortOrderSchema).optional(),
  all_time_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_12h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_1h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_24h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_7d_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_1m_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_6m_decimal: z.lazy(() => SortOrderSchema).optional(),
  date_last_sale: z.lazy(() => SortOrderSchema).optional(),
  collection_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MintDataMinOrderByAggregateInputSchema: z.ZodType<Prisma.MintDataMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  block_last_mint: z.lazy(() => SortOrderSchema).optional(),
  date_last_mint: z.lazy(() => SortOrderSchema).optional(),
  mints_last_1h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_12h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_24h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_7d: z.lazy(() => SortOrderSchema).optional(),
  mints_last_1m: z.lazy(() => SortOrderSchema).optional(),
  mints_last_6m: z.lazy(() => SortOrderSchema).optional(),
  floor_price_raw: z.lazy(() => SortOrderSchema).optional(),
  floor_price_decimal: z.lazy(() => SortOrderSchema).optional(),
  all_time_raw: z.lazy(() => SortOrderSchema).optional(),
  all_time_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_12h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_1h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_24h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_7d_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_1m_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_6m_decimal: z.lazy(() => SortOrderSchema).optional(),
  date_last_sale: z.lazy(() => SortOrderSchema).optional(),
  collection_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MintDataSumOrderByAggregateInputSchema: z.ZodType<Prisma.MintDataSumOrderByAggregateInput> = z.object({
  block_last_mint: z.lazy(() => SortOrderSchema).optional(),
  mints_last_1h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_12h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_24h: z.lazy(() => SortOrderSchema).optional(),
  mints_last_7d: z.lazy(() => SortOrderSchema).optional(),
  mints_last_1m: z.lazy(() => SortOrderSchema).optional(),
  mints_last_6m: z.lazy(() => SortOrderSchema).optional(),
  floor_price_decimal: z.lazy(() => SortOrderSchema).optional(),
  all_time_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_12h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_1h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_24h_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_7d_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_1m_decimal: z.lazy(() => SortOrderSchema).optional(),
  last_6m_decimal: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const NftRelationFilterSchema: z.ZodType<Prisma.NftRelationFilter> = z.object({
  is: z.lazy(() => NftWhereInputSchema).optional(),
  isNot: z.lazy(() => NftWhereInputSchema).optional()
}).strict();

export const OpenRarityCountOrderByAggregateInputSchema: z.ZodType<Prisma.OpenRarityCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rank: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  unique_attributes: z.lazy(() => SortOrderSchema).optional(),
  nft_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OpenRarityAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OpenRarityAvgOrderByAggregateInput> = z.object({
  rank: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  unique_attributes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OpenRarityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OpenRarityMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rank: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  unique_attributes: z.lazy(() => SortOrderSchema).optional(),
  nft_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OpenRarityMinOrderByAggregateInputSchema: z.ZodType<Prisma.OpenRarityMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rank: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  unique_attributes: z.lazy(() => SortOrderSchema).optional(),
  nft_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OpenRaritySumOrderByAggregateInputSchema: z.ZodType<Prisma.OpenRaritySumOrderByAggregateInput> = z.object({
  rank: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  unique_attributes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const CollectionListRelationFilterSchema: z.ZodType<Prisma.CollectionListRelationFilter> = z.object({
  every: z.lazy(() => CollectionWhereInputSchema).optional(),
  some: z.lazy(() => CollectionWhereInputSchema).optional(),
  none: z.lazy(() => CollectionWhereInputSchema).optional()
}).strict();

export const WalletListRelationFilterSchema: z.ZodType<Prisma.WalletListRelationFilter> = z.object({
  every: z.lazy(() => WalletWhereInputSchema).optional(),
  some: z.lazy(() => WalletWhereInputSchema).optional(),
  none: z.lazy(() => WalletWhereInputSchema).optional()
}).strict();

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> = z.object({
  every: z.lazy(() => SessionWhereInputSchema).optional(),
  some: z.lazy(() => SessionWhereInputSchema).optional(),
  none: z.lazy(() => SessionWhereInputSchema).optional()
}).strict();

export const RoleListRelationFilterSchema: z.ZodType<Prisma.RoleListRelationFilter> = z.object({
  every: z.lazy(() => RoleWhereInputSchema).optional(),
  some: z.lazy(() => RoleWhereInputSchema).optional(),
  none: z.lazy(() => RoleWhereInputSchema).optional()
}).strict();

export const ConnectionListRelationFilterSchema: z.ZodType<Prisma.ConnectionListRelationFilter> = z.object({
  every: z.lazy(() => ConnectionWhereInputSchema).optional(),
  some: z.lazy(() => ConnectionWhereInputSchema).optional(),
  none: z.lazy(() => ConnectionWhereInputSchema).optional()
}).strict();

export const PasswordNullableRelationFilterSchema: z.ZodType<Prisma.PasswordNullableRelationFilter> = z.object({
  is: z.lazy(() => PasswordWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => PasswordWhereInputSchema).optional().nullable()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const CollectionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CollectionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WalletOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WalletOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoleOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ConnectionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ConnectionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  avatar_uri: z.lazy(() => SortOrderSchema).optional(),
  banner_uri: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  ens: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  avatar_uri: z.lazy(() => SortOrderSchema).optional(),
  banner_uri: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  ens: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  avatar_uri: z.lazy(() => SortOrderSchema).optional(),
  banner_uri: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  ens: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const ConnectionProvider_nameProvider_idCompoundUniqueInputSchema: z.ZodType<Prisma.ConnectionProvider_nameProvider_idCompoundUniqueInput> = z.object({
  provider_name: z.string(),
  provider_id: z.string()
}).strict();

export const ConnectionProvider_idUser_idCompoundUniqueInputSchema: z.ZodType<Prisma.ConnectionProvider_idUser_idCompoundUniqueInput> = z.object({
  provider_id: z.string(),
  user_id: z.string()
}).strict();

export const ConnectionCountOrderByAggregateInputSchema: z.ZodType<Prisma.ConnectionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  provider_name: z.lazy(() => SortOrderSchema).optional(),
  provider_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ConnectionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ConnectionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  provider_name: z.lazy(() => SortOrderSchema).optional(),
  provider_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ConnectionMinOrderByAggregateInputSchema: z.ZodType<Prisma.ConnectionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  provider_name: z.lazy(() => SortOrderSchema).optional(),
  provider_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PasswordCountOrderByAggregateInputSchema: z.ZodType<Prisma.PasswordCountOrderByAggregateInput> = z.object({
  hash: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PasswordMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PasswordMaxOrderByAggregateInput> = z.object({
  hash: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PasswordMinOrderByAggregateInputSchema: z.ZodType<Prisma.PasswordMinOrderByAggregateInput> = z.object({
  hash: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChainCountOrderByAggregateInputSchema: z.ZodType<Prisma.ChainCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  is_testnet: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChainAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ChainAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChainMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ChainMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  is_testnet: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChainMinOrderByAggregateInputSchema: z.ZodType<Prisma.ChainMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  is_testnet: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChainSumOrderByAggregateInputSchema: z.ZodType<Prisma.ChainSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChainRelationFilterSchema: z.ZodType<Prisma.ChainRelationFilter> = z.object({
  is: z.lazy(() => ChainWhereInputSchema).optional(),
  isNot: z.lazy(() => ChainWhereInputSchema).optional()
}).strict();

export const WalletCountOrderByAggregateInputSchema: z.ZodType<Prisma.WalletCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  owner_id: z.lazy(() => SortOrderSchema).optional(),
  chain_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WalletAvgOrderByAggregateInputSchema: z.ZodType<Prisma.WalletAvgOrderByAggregateInput> = z.object({
  chain_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WalletMaxOrderByAggregateInputSchema: z.ZodType<Prisma.WalletMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  owner_id: z.lazy(() => SortOrderSchema).optional(),
  chain_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WalletMinOrderByAggregateInputSchema: z.ZodType<Prisma.WalletMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  owner_id: z.lazy(() => SortOrderSchema).optional(),
  chain_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WalletSumOrderByAggregateInputSchema: z.ZodType<Prisma.WalletSumOrderByAggregateInput> = z.object({
  chain_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WalletRelationFilterSchema: z.ZodType<Prisma.WalletRelationFilter> = z.object({
  is: z.lazy(() => WalletWhereInputSchema).optional(),
  isNot: z.lazy(() => WalletWhereInputSchema).optional()
}).strict();

export const SessionUser_idUser_agentCompoundUniqueInputSchema: z.ZodType<Prisma.SessionUser_idUser_agentCompoundUniqueInput> = z.object({
  user_id: z.string(),
  user_agent: z.string()
}).strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiration_date: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  wallet_id: z.lazy(() => SortOrderSchema).optional(),
  user_agent: z.lazy(() => SortOrderSchema).optional(),
  locale: z.lazy(() => SortOrderSchema).optional(),
  ip_address: z.lazy(() => SortOrderSchema).optional(),
  nonce: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiration_date: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  wallet_id: z.lazy(() => SortOrderSchema).optional(),
  user_agent: z.lazy(() => SortOrderSchema).optional(),
  locale: z.lazy(() => SortOrderSchema).optional(),
  ip_address: z.lazy(() => SortOrderSchema).optional(),
  nonce: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiration_date: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  wallet_id: z.lazy(() => SortOrderSchema).optional(),
  user_agent: z.lazy(() => SortOrderSchema).optional(),
  locale: z.lazy(() => SortOrderSchema).optional(),
  ip_address: z.lazy(() => SortOrderSchema).optional(),
  nonce: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PermissionActionEntityAccessCompoundUniqueInputSchema: z.ZodType<Prisma.PermissionActionEntityAccessCompoundUniqueInput> = z.object({
  action: z.string(),
  entity: z.string(),
  access: z.string()
}).strict();

export const PermissionCountOrderByAggregateInputSchema: z.ZodType<Prisma.PermissionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  entity: z.lazy(() => SortOrderSchema).optional(),
  access: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PermissionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PermissionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  entity: z.lazy(() => SortOrderSchema).optional(),
  access: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PermissionMinOrderByAggregateInputSchema: z.ZodType<Prisma.PermissionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  entity: z.lazy(() => SortOrderSchema).optional(),
  access: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserListRelationFilterSchema: z.ZodType<Prisma.UserListRelationFilter> = z.object({
  every: z.lazy(() => UserWhereInputSchema).optional(),
  some: z.lazy(() => UserWhereInputSchema).optional(),
  none: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const PermissionListRelationFilterSchema: z.ZodType<Prisma.PermissionListRelationFilter> = z.object({
  every: z.lazy(() => PermissionWhereInputSchema).optional(),
  some: z.lazy(() => PermissionWhereInputSchema).optional(),
  none: z.lazy(() => PermissionWhereInputSchema).optional()
}).strict();

export const UserOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UserOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PermissionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PermissionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoleCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RoleMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoleMinOrderByAggregateInputSchema: z.ZodType<Prisma.RoleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MintSaleTransactionCountOrderByAggregateInputSchema: z.ZodType<Prisma.MintSaleTransactionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  transaction_hash: z.lazy(() => SortOrderSchema).optional(),
  block_number: z.lazy(() => SortOrderSchema).optional(),
  timestamp: z.lazy(() => SortOrderSchema).optional(),
  token_address: z.lazy(() => SortOrderSchema).optional(),
  value_decimal: z.lazy(() => SortOrderSchema).optional(),
  value_raw: z.lazy(() => SortOrderSchema).optional(),
  from: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MintSaleTransactionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.MintSaleTransactionAvgOrderByAggregateInput> = z.object({
  block_number: z.lazy(() => SortOrderSchema).optional(),
  value_decimal: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MintSaleTransactionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MintSaleTransactionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  transaction_hash: z.lazy(() => SortOrderSchema).optional(),
  block_number: z.lazy(() => SortOrderSchema).optional(),
  timestamp: z.lazy(() => SortOrderSchema).optional(),
  token_address: z.lazy(() => SortOrderSchema).optional(),
  value_decimal: z.lazy(() => SortOrderSchema).optional(),
  value_raw: z.lazy(() => SortOrderSchema).optional(),
  from: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MintSaleTransactionMinOrderByAggregateInputSchema: z.ZodType<Prisma.MintSaleTransactionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  transaction_hash: z.lazy(() => SortOrderSchema).optional(),
  block_number: z.lazy(() => SortOrderSchema).optional(),
  timestamp: z.lazy(() => SortOrderSchema).optional(),
  token_address: z.lazy(() => SortOrderSchema).optional(),
  value_decimal: z.lazy(() => SortOrderSchema).optional(),
  value_raw: z.lazy(() => SortOrderSchema).optional(),
  from: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MintSaleTransactionSumOrderByAggregateInputSchema: z.ZodType<Prisma.MintSaleTransactionSumOrderByAggregateInput> = z.object({
  block_number: z.lazy(() => SortOrderSchema).optional(),
  value_decimal: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstarevealCollectionCountOrderByAggregateInputSchema: z.ZodType<Prisma.InstarevealCollectionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  paths: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstarevealCollectionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InstarevealCollectionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  paths: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstarevealCollectionMinOrderByAggregateInputSchema: z.ZodType<Prisma.InstarevealCollectionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  paths: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReferralCountOrderByAggregateInputSchema: z.ZodType<Prisma.ReferralCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  collection_address: z.lazy(() => SortOrderSchema).optional(),
  referral_amount_eth: z.lazy(() => SortOrderSchema).optional(),
  referral_amount_wei: z.lazy(() => SortOrderSchema).optional(),
  affiliate: z.lazy(() => SortOrderSchema).optional(),
  transaction_hash: z.lazy(() => SortOrderSchema).optional(),
  minter_ens: z.lazy(() => SortOrderSchema).optional(),
  txn_value: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  block_number: z.lazy(() => SortOrderSchema).optional(),
  affiliate_ens: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReferralAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ReferralAvgOrderByAggregateInput> = z.object({
  block_number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReferralMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ReferralMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  collection_address: z.lazy(() => SortOrderSchema).optional(),
  referral_amount_eth: z.lazy(() => SortOrderSchema).optional(),
  referral_amount_wei: z.lazy(() => SortOrderSchema).optional(),
  affiliate: z.lazy(() => SortOrderSchema).optional(),
  transaction_hash: z.lazy(() => SortOrderSchema).optional(),
  minter_ens: z.lazy(() => SortOrderSchema).optional(),
  txn_value: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  block_number: z.lazy(() => SortOrderSchema).optional(),
  affiliate_ens: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReferralMinOrderByAggregateInputSchema: z.ZodType<Prisma.ReferralMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  collection_address: z.lazy(() => SortOrderSchema).optional(),
  referral_amount_eth: z.lazy(() => SortOrderSchema).optional(),
  referral_amount_wei: z.lazy(() => SortOrderSchema).optional(),
  affiliate: z.lazy(() => SortOrderSchema).optional(),
  transaction_hash: z.lazy(() => SortOrderSchema).optional(),
  minter_ens: z.lazy(() => SortOrderSchema).optional(),
  txn_value: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  block_number: z.lazy(() => SortOrderSchema).optional(),
  affiliate_ens: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReferralSumOrderByAggregateInputSchema: z.ZodType<Prisma.ReferralSumOrderByAggregateInput> = z.object({
  block_number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MintDataCreateNestedOneWithoutCollectionInputSchema: z.ZodType<Prisma.MintDataCreateNestedOneWithoutCollectionInput> = z.object({
  create: z.union([ z.lazy(() => MintDataCreateWithoutCollectionInputSchema),z.lazy(() => MintDataUncheckedCreateWithoutCollectionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MintDataCreateOrConnectWithoutCollectionInputSchema).optional(),
  connect: z.lazy(() => MintDataWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutCollectionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCollectionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCollectionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCollectionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCollectionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const NftCreateNestedManyWithoutCollectionInputSchema: z.ZodType<Prisma.NftCreateNestedManyWithoutCollectionInput> = z.object({
  create: z.union([ z.lazy(() => NftCreateWithoutCollectionInputSchema),z.lazy(() => NftCreateWithoutCollectionInputSchema).array(),z.lazy(() => NftUncheckedCreateWithoutCollectionInputSchema),z.lazy(() => NftUncheckedCreateWithoutCollectionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NftCreateOrConnectWithoutCollectionInputSchema),z.lazy(() => NftCreateOrConnectWithoutCollectionInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NftWhereUniqueInputSchema),z.lazy(() => NftWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MintDataUncheckedCreateNestedOneWithoutCollectionInputSchema: z.ZodType<Prisma.MintDataUncheckedCreateNestedOneWithoutCollectionInput> = z.object({
  create: z.union([ z.lazy(() => MintDataCreateWithoutCollectionInputSchema),z.lazy(() => MintDataUncheckedCreateWithoutCollectionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MintDataCreateOrConnectWithoutCollectionInputSchema).optional(),
  connect: z.lazy(() => MintDataWhereUniqueInputSchema).optional()
}).strict();

export const NftUncheckedCreateNestedManyWithoutCollectionInputSchema: z.ZodType<Prisma.NftUncheckedCreateNestedManyWithoutCollectionInput> = z.object({
  create: z.union([ z.lazy(() => NftCreateWithoutCollectionInputSchema),z.lazy(() => NftCreateWithoutCollectionInputSchema).array(),z.lazy(() => NftUncheckedCreateWithoutCollectionInputSchema),z.lazy(() => NftUncheckedCreateWithoutCollectionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NftCreateOrConnectWithoutCollectionInputSchema),z.lazy(() => NftCreateOrConnectWithoutCollectionInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NftWhereUniqueInputSchema),z.lazy(() => NftWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const MintDataUpdateOneWithoutCollectionNestedInputSchema: z.ZodType<Prisma.MintDataUpdateOneWithoutCollectionNestedInput> = z.object({
  create: z.union([ z.lazy(() => MintDataCreateWithoutCollectionInputSchema),z.lazy(() => MintDataUncheckedCreateWithoutCollectionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MintDataCreateOrConnectWithoutCollectionInputSchema).optional(),
  upsert: z.lazy(() => MintDataUpsertWithoutCollectionInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => MintDataWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => MintDataWhereInputSchema) ]).optional(),
  connect: z.lazy(() => MintDataWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MintDataUpdateToOneWithWhereWithoutCollectionInputSchema),z.lazy(() => MintDataUpdateWithoutCollectionInputSchema),z.lazy(() => MintDataUncheckedUpdateWithoutCollectionInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutCollectionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCollectionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCollectionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCollectionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCollectionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCollectionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCollectionsInputSchema),z.lazy(() => UserUpdateWithoutCollectionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCollectionsInputSchema) ]).optional(),
}).strict();

export const NftUpdateManyWithoutCollectionNestedInputSchema: z.ZodType<Prisma.NftUpdateManyWithoutCollectionNestedInput> = z.object({
  create: z.union([ z.lazy(() => NftCreateWithoutCollectionInputSchema),z.lazy(() => NftCreateWithoutCollectionInputSchema).array(),z.lazy(() => NftUncheckedCreateWithoutCollectionInputSchema),z.lazy(() => NftUncheckedCreateWithoutCollectionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NftCreateOrConnectWithoutCollectionInputSchema),z.lazy(() => NftCreateOrConnectWithoutCollectionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NftUpsertWithWhereUniqueWithoutCollectionInputSchema),z.lazy(() => NftUpsertWithWhereUniqueWithoutCollectionInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => NftWhereUniqueInputSchema),z.lazy(() => NftWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NftWhereUniqueInputSchema),z.lazy(() => NftWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NftWhereUniqueInputSchema),z.lazy(() => NftWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NftWhereUniqueInputSchema),z.lazy(() => NftWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NftUpdateWithWhereUniqueWithoutCollectionInputSchema),z.lazy(() => NftUpdateWithWhereUniqueWithoutCollectionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NftUpdateManyWithWhereWithoutCollectionInputSchema),z.lazy(() => NftUpdateManyWithWhereWithoutCollectionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NftScalarWhereInputSchema),z.lazy(() => NftScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MintDataUncheckedUpdateOneWithoutCollectionNestedInputSchema: z.ZodType<Prisma.MintDataUncheckedUpdateOneWithoutCollectionNestedInput> = z.object({
  create: z.union([ z.lazy(() => MintDataCreateWithoutCollectionInputSchema),z.lazy(() => MintDataUncheckedCreateWithoutCollectionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MintDataCreateOrConnectWithoutCollectionInputSchema).optional(),
  upsert: z.lazy(() => MintDataUpsertWithoutCollectionInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => MintDataWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => MintDataWhereInputSchema) ]).optional(),
  connect: z.lazy(() => MintDataWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MintDataUpdateToOneWithWhereWithoutCollectionInputSchema),z.lazy(() => MintDataUpdateWithoutCollectionInputSchema),z.lazy(() => MintDataUncheckedUpdateWithoutCollectionInputSchema) ]).optional(),
}).strict();

export const NftUncheckedUpdateManyWithoutCollectionNestedInputSchema: z.ZodType<Prisma.NftUncheckedUpdateManyWithoutCollectionNestedInput> = z.object({
  create: z.union([ z.lazy(() => NftCreateWithoutCollectionInputSchema),z.lazy(() => NftCreateWithoutCollectionInputSchema).array(),z.lazy(() => NftUncheckedCreateWithoutCollectionInputSchema),z.lazy(() => NftUncheckedCreateWithoutCollectionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NftCreateOrConnectWithoutCollectionInputSchema),z.lazy(() => NftCreateOrConnectWithoutCollectionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NftUpsertWithWhereUniqueWithoutCollectionInputSchema),z.lazy(() => NftUpsertWithWhereUniqueWithoutCollectionInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => NftWhereUniqueInputSchema),z.lazy(() => NftWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NftWhereUniqueInputSchema),z.lazy(() => NftWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NftWhereUniqueInputSchema),z.lazy(() => NftWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NftWhereUniqueInputSchema),z.lazy(() => NftWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NftUpdateWithWhereUniqueWithoutCollectionInputSchema),z.lazy(() => NftUpdateWithWhereUniqueWithoutCollectionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NftUpdateManyWithWhereWithoutCollectionInputSchema),z.lazy(() => NftUpdateManyWithWhereWithoutCollectionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NftScalarWhereInputSchema),z.lazy(() => NftScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OpenRarityCreateNestedOneWithoutNftInputSchema: z.ZodType<Prisma.OpenRarityCreateNestedOneWithoutNftInput> = z.object({
  create: z.union([ z.lazy(() => OpenRarityCreateWithoutNftInputSchema),z.lazy(() => OpenRarityUncheckedCreateWithoutNftInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OpenRarityCreateOrConnectWithoutNftInputSchema).optional(),
  connect: z.lazy(() => OpenRarityWhereUniqueInputSchema).optional()
}).strict();

export const CollectionCreateNestedOneWithoutNftsInputSchema: z.ZodType<Prisma.CollectionCreateNestedOneWithoutNftsInput> = z.object({
  create: z.union([ z.lazy(() => CollectionCreateWithoutNftsInputSchema),z.lazy(() => CollectionUncheckedCreateWithoutNftsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CollectionCreateOrConnectWithoutNftsInputSchema).optional(),
  connect: z.lazy(() => CollectionWhereUniqueInputSchema).optional()
}).strict();

export const OpenRarityUncheckedCreateNestedOneWithoutNftInputSchema: z.ZodType<Prisma.OpenRarityUncheckedCreateNestedOneWithoutNftInput> = z.object({
  create: z.union([ z.lazy(() => OpenRarityCreateWithoutNftInputSchema),z.lazy(() => OpenRarityUncheckedCreateWithoutNftInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OpenRarityCreateOrConnectWithoutNftInputSchema).optional(),
  connect: z.lazy(() => OpenRarityWhereUniqueInputSchema).optional()
}).strict();

export const OpenRarityUpdateOneWithoutNftNestedInputSchema: z.ZodType<Prisma.OpenRarityUpdateOneWithoutNftNestedInput> = z.object({
  create: z.union([ z.lazy(() => OpenRarityCreateWithoutNftInputSchema),z.lazy(() => OpenRarityUncheckedCreateWithoutNftInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OpenRarityCreateOrConnectWithoutNftInputSchema).optional(),
  upsert: z.lazy(() => OpenRarityUpsertWithoutNftInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => OpenRarityWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => OpenRarityWhereInputSchema) ]).optional(),
  connect: z.lazy(() => OpenRarityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OpenRarityUpdateToOneWithWhereWithoutNftInputSchema),z.lazy(() => OpenRarityUpdateWithoutNftInputSchema),z.lazy(() => OpenRarityUncheckedUpdateWithoutNftInputSchema) ]).optional(),
}).strict();

export const CollectionUpdateOneRequiredWithoutNftsNestedInputSchema: z.ZodType<Prisma.CollectionUpdateOneRequiredWithoutNftsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CollectionCreateWithoutNftsInputSchema),z.lazy(() => CollectionUncheckedCreateWithoutNftsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CollectionCreateOrConnectWithoutNftsInputSchema).optional(),
  upsert: z.lazy(() => CollectionUpsertWithoutNftsInputSchema).optional(),
  connect: z.lazy(() => CollectionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CollectionUpdateToOneWithWhereWithoutNftsInputSchema),z.lazy(() => CollectionUpdateWithoutNftsInputSchema),z.lazy(() => CollectionUncheckedUpdateWithoutNftsInputSchema) ]).optional(),
}).strict();

export const OpenRarityUncheckedUpdateOneWithoutNftNestedInputSchema: z.ZodType<Prisma.OpenRarityUncheckedUpdateOneWithoutNftNestedInput> = z.object({
  create: z.union([ z.lazy(() => OpenRarityCreateWithoutNftInputSchema),z.lazy(() => OpenRarityUncheckedCreateWithoutNftInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OpenRarityCreateOrConnectWithoutNftInputSchema).optional(),
  upsert: z.lazy(() => OpenRarityUpsertWithoutNftInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => OpenRarityWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => OpenRarityWhereInputSchema) ]).optional(),
  connect: z.lazy(() => OpenRarityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OpenRarityUpdateToOneWithWhereWithoutNftInputSchema),z.lazy(() => OpenRarityUpdateWithoutNftInputSchema),z.lazy(() => OpenRarityUncheckedUpdateWithoutNftInputSchema) ]).optional(),
}).strict();

export const CollectionCreateNestedOneWithoutMint_dataInputSchema: z.ZodType<Prisma.CollectionCreateNestedOneWithoutMint_dataInput> = z.object({
  create: z.union([ z.lazy(() => CollectionCreateWithoutMint_dataInputSchema),z.lazy(() => CollectionUncheckedCreateWithoutMint_dataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CollectionCreateOrConnectWithoutMint_dataInputSchema).optional(),
  connect: z.lazy(() => CollectionWhereUniqueInputSchema).optional()
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const CollectionUpdateOneRequiredWithoutMint_dataNestedInputSchema: z.ZodType<Prisma.CollectionUpdateOneRequiredWithoutMint_dataNestedInput> = z.object({
  create: z.union([ z.lazy(() => CollectionCreateWithoutMint_dataInputSchema),z.lazy(() => CollectionUncheckedCreateWithoutMint_dataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CollectionCreateOrConnectWithoutMint_dataInputSchema).optional(),
  upsert: z.lazy(() => CollectionUpsertWithoutMint_dataInputSchema).optional(),
  connect: z.lazy(() => CollectionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CollectionUpdateToOneWithWhereWithoutMint_dataInputSchema),z.lazy(() => CollectionUpdateWithoutMint_dataInputSchema),z.lazy(() => CollectionUncheckedUpdateWithoutMint_dataInputSchema) ]).optional(),
}).strict();

export const NftCreateNestedOneWithoutOpen_rarityInputSchema: z.ZodType<Prisma.NftCreateNestedOneWithoutOpen_rarityInput> = z.object({
  create: z.union([ z.lazy(() => NftCreateWithoutOpen_rarityInputSchema),z.lazy(() => NftUncheckedCreateWithoutOpen_rarityInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NftCreateOrConnectWithoutOpen_rarityInputSchema).optional(),
  connect: z.lazy(() => NftWhereUniqueInputSchema).optional()
}).strict();

export const NftUpdateOneRequiredWithoutOpen_rarityNestedInputSchema: z.ZodType<Prisma.NftUpdateOneRequiredWithoutOpen_rarityNestedInput> = z.object({
  create: z.union([ z.lazy(() => NftCreateWithoutOpen_rarityInputSchema),z.lazy(() => NftUncheckedCreateWithoutOpen_rarityInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NftCreateOrConnectWithoutOpen_rarityInputSchema).optional(),
  upsert: z.lazy(() => NftUpsertWithoutOpen_rarityInputSchema).optional(),
  connect: z.lazy(() => NftWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => NftUpdateToOneWithWhereWithoutOpen_rarityInputSchema),z.lazy(() => NftUpdateWithoutOpen_rarityInputSchema),z.lazy(() => NftUncheckedUpdateWithoutOpen_rarityInputSchema) ]).optional(),
}).strict();

export const CollectionCreateNestedManyWithoutCreatorInputSchema: z.ZodType<Prisma.CollectionCreateNestedManyWithoutCreatorInput> = z.object({
  create: z.union([ z.lazy(() => CollectionCreateWithoutCreatorInputSchema),z.lazy(() => CollectionCreateWithoutCreatorInputSchema).array(),z.lazy(() => CollectionUncheckedCreateWithoutCreatorInputSchema),z.lazy(() => CollectionUncheckedCreateWithoutCreatorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CollectionCreateOrConnectWithoutCreatorInputSchema),z.lazy(() => CollectionCreateOrConnectWithoutCreatorInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CollectionWhereUniqueInputSchema),z.lazy(() => CollectionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WalletCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.WalletCreateNestedManyWithoutOwnerInput> = z.object({
  create: z.union([ z.lazy(() => WalletCreateWithoutOwnerInputSchema),z.lazy(() => WalletCreateWithoutOwnerInputSchema).array(),z.lazy(() => WalletUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => WalletUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WalletCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => WalletCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoleCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.RoleCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutUsersInputSchema),z.lazy(() => RoleCreateWithoutUsersInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutUsersInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutUsersInputSchema),z.lazy(() => RoleCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ConnectionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ConnectionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ConnectionCreateWithoutUserInputSchema),z.lazy(() => ConnectionCreateWithoutUserInputSchema).array(),z.lazy(() => ConnectionUncheckedCreateWithoutUserInputSchema),z.lazy(() => ConnectionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConnectionCreateOrConnectWithoutUserInputSchema),z.lazy(() => ConnectionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConnectionWhereUniqueInputSchema),z.lazy(() => ConnectionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PasswordCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.PasswordCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => PasswordCreateWithoutUserInputSchema),z.lazy(() => PasswordUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PasswordCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => PasswordWhereUniqueInputSchema).optional()
}).strict();

export const CollectionUncheckedCreateNestedManyWithoutCreatorInputSchema: z.ZodType<Prisma.CollectionUncheckedCreateNestedManyWithoutCreatorInput> = z.object({
  create: z.union([ z.lazy(() => CollectionCreateWithoutCreatorInputSchema),z.lazy(() => CollectionCreateWithoutCreatorInputSchema).array(),z.lazy(() => CollectionUncheckedCreateWithoutCreatorInputSchema),z.lazy(() => CollectionUncheckedCreateWithoutCreatorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CollectionCreateOrConnectWithoutCreatorInputSchema),z.lazy(() => CollectionCreateOrConnectWithoutCreatorInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CollectionWhereUniqueInputSchema),z.lazy(() => CollectionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WalletUncheckedCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.WalletUncheckedCreateNestedManyWithoutOwnerInput> = z.object({
  create: z.union([ z.lazy(() => WalletCreateWithoutOwnerInputSchema),z.lazy(() => WalletCreateWithoutOwnerInputSchema).array(),z.lazy(() => WalletUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => WalletUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WalletCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => WalletCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoleUncheckedCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.RoleUncheckedCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutUsersInputSchema),z.lazy(() => RoleCreateWithoutUsersInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutUsersInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutUsersInputSchema),z.lazy(() => RoleCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ConnectionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ConnectionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ConnectionCreateWithoutUserInputSchema),z.lazy(() => ConnectionCreateWithoutUserInputSchema).array(),z.lazy(() => ConnectionUncheckedCreateWithoutUserInputSchema),z.lazy(() => ConnectionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConnectionCreateOrConnectWithoutUserInputSchema),z.lazy(() => ConnectionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConnectionWhereUniqueInputSchema),z.lazy(() => ConnectionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PasswordUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.PasswordUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => PasswordCreateWithoutUserInputSchema),z.lazy(() => PasswordUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PasswordCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => PasswordWhereUniqueInputSchema).optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const CollectionUpdateManyWithoutCreatorNestedInputSchema: z.ZodType<Prisma.CollectionUpdateManyWithoutCreatorNestedInput> = z.object({
  create: z.union([ z.lazy(() => CollectionCreateWithoutCreatorInputSchema),z.lazy(() => CollectionCreateWithoutCreatorInputSchema).array(),z.lazy(() => CollectionUncheckedCreateWithoutCreatorInputSchema),z.lazy(() => CollectionUncheckedCreateWithoutCreatorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CollectionCreateOrConnectWithoutCreatorInputSchema),z.lazy(() => CollectionCreateOrConnectWithoutCreatorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CollectionUpsertWithWhereUniqueWithoutCreatorInputSchema),z.lazy(() => CollectionUpsertWithWhereUniqueWithoutCreatorInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CollectionWhereUniqueInputSchema),z.lazy(() => CollectionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CollectionWhereUniqueInputSchema),z.lazy(() => CollectionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CollectionWhereUniqueInputSchema),z.lazy(() => CollectionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CollectionWhereUniqueInputSchema),z.lazy(() => CollectionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CollectionUpdateWithWhereUniqueWithoutCreatorInputSchema),z.lazy(() => CollectionUpdateWithWhereUniqueWithoutCreatorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CollectionUpdateManyWithWhereWithoutCreatorInputSchema),z.lazy(() => CollectionUpdateManyWithWhereWithoutCreatorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CollectionScalarWhereInputSchema),z.lazy(() => CollectionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const WalletUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.WalletUpdateManyWithoutOwnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => WalletCreateWithoutOwnerInputSchema),z.lazy(() => WalletCreateWithoutOwnerInputSchema).array(),z.lazy(() => WalletUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => WalletUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WalletCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => WalletCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WalletUpsertWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => WalletUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WalletUpdateWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => WalletUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WalletUpdateManyWithWhereWithoutOwnerInputSchema),z.lazy(() => WalletUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WalletScalarWhereInputSchema),z.lazy(() => WalletScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoleUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.RoleUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutUsersInputSchema),z.lazy(() => RoleCreateWithoutUsersInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutUsersInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutUsersInputSchema),z.lazy(() => RoleCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => RoleUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => RoleUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => RoleUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ConnectionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ConnectionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ConnectionCreateWithoutUserInputSchema),z.lazy(() => ConnectionCreateWithoutUserInputSchema).array(),z.lazy(() => ConnectionUncheckedCreateWithoutUserInputSchema),z.lazy(() => ConnectionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConnectionCreateOrConnectWithoutUserInputSchema),z.lazy(() => ConnectionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ConnectionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ConnectionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ConnectionWhereUniqueInputSchema),z.lazy(() => ConnectionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ConnectionWhereUniqueInputSchema),z.lazy(() => ConnectionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ConnectionWhereUniqueInputSchema),z.lazy(() => ConnectionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConnectionWhereUniqueInputSchema),z.lazy(() => ConnectionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ConnectionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ConnectionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ConnectionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ConnectionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ConnectionScalarWhereInputSchema),z.lazy(() => ConnectionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PasswordUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.PasswordUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => PasswordCreateWithoutUserInputSchema),z.lazy(() => PasswordUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PasswordCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => PasswordUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PasswordWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PasswordWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PasswordWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PasswordUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => PasswordUpdateWithoutUserInputSchema),z.lazy(() => PasswordUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const CollectionUncheckedUpdateManyWithoutCreatorNestedInputSchema: z.ZodType<Prisma.CollectionUncheckedUpdateManyWithoutCreatorNestedInput> = z.object({
  create: z.union([ z.lazy(() => CollectionCreateWithoutCreatorInputSchema),z.lazy(() => CollectionCreateWithoutCreatorInputSchema).array(),z.lazy(() => CollectionUncheckedCreateWithoutCreatorInputSchema),z.lazy(() => CollectionUncheckedCreateWithoutCreatorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CollectionCreateOrConnectWithoutCreatorInputSchema),z.lazy(() => CollectionCreateOrConnectWithoutCreatorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CollectionUpsertWithWhereUniqueWithoutCreatorInputSchema),z.lazy(() => CollectionUpsertWithWhereUniqueWithoutCreatorInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CollectionWhereUniqueInputSchema),z.lazy(() => CollectionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CollectionWhereUniqueInputSchema),z.lazy(() => CollectionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CollectionWhereUniqueInputSchema),z.lazy(() => CollectionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CollectionWhereUniqueInputSchema),z.lazy(() => CollectionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CollectionUpdateWithWhereUniqueWithoutCreatorInputSchema),z.lazy(() => CollectionUpdateWithWhereUniqueWithoutCreatorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CollectionUpdateManyWithWhereWithoutCreatorInputSchema),z.lazy(() => CollectionUpdateManyWithWhereWithoutCreatorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CollectionScalarWhereInputSchema),z.lazy(() => CollectionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const WalletUncheckedUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.WalletUncheckedUpdateManyWithoutOwnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => WalletCreateWithoutOwnerInputSchema),z.lazy(() => WalletCreateWithoutOwnerInputSchema).array(),z.lazy(() => WalletUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => WalletUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WalletCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => WalletCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WalletUpsertWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => WalletUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WalletUpdateWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => WalletUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WalletUpdateManyWithWhereWithoutOwnerInputSchema),z.lazy(() => WalletUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WalletScalarWhereInputSchema),z.lazy(() => WalletScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoleUncheckedUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutUsersInputSchema),z.lazy(() => RoleCreateWithoutUsersInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutUsersInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutUsersInputSchema),z.lazy(() => RoleCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => RoleUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => RoleUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => RoleUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ConnectionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ConnectionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ConnectionCreateWithoutUserInputSchema),z.lazy(() => ConnectionCreateWithoutUserInputSchema).array(),z.lazy(() => ConnectionUncheckedCreateWithoutUserInputSchema),z.lazy(() => ConnectionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConnectionCreateOrConnectWithoutUserInputSchema),z.lazy(() => ConnectionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ConnectionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ConnectionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ConnectionWhereUniqueInputSchema),z.lazy(() => ConnectionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ConnectionWhereUniqueInputSchema),z.lazy(() => ConnectionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ConnectionWhereUniqueInputSchema),z.lazy(() => ConnectionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConnectionWhereUniqueInputSchema),z.lazy(() => ConnectionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ConnectionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ConnectionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ConnectionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ConnectionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ConnectionScalarWhereInputSchema),z.lazy(() => ConnectionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PasswordUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.PasswordUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => PasswordCreateWithoutUserInputSchema),z.lazy(() => PasswordUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PasswordCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => PasswordUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PasswordWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PasswordWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PasswordWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PasswordUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => PasswordUpdateWithoutUserInputSchema),z.lazy(() => PasswordUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutConnectionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutConnectionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutConnectionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutConnectionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutConnectionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutConnectionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutConnectionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutConnectionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutConnectionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutConnectionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutConnectionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutConnectionsInputSchema),z.lazy(() => UserUpdateWithoutConnectionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutConnectionsInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutPasswordInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPasswordInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPasswordInputSchema),z.lazy(() => UserUncheckedCreateWithoutPasswordInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPasswordInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutPasswordNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPasswordNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPasswordInputSchema),z.lazy(() => UserUncheckedCreateWithoutPasswordInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPasswordInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPasswordInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutPasswordInputSchema),z.lazy(() => UserUpdateWithoutPasswordInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPasswordInputSchema) ]).optional(),
}).strict();

export const WalletCreateNestedManyWithoutChainInputSchema: z.ZodType<Prisma.WalletCreateNestedManyWithoutChainInput> = z.object({
  create: z.union([ z.lazy(() => WalletCreateWithoutChainInputSchema),z.lazy(() => WalletCreateWithoutChainInputSchema).array(),z.lazy(() => WalletUncheckedCreateWithoutChainInputSchema),z.lazy(() => WalletUncheckedCreateWithoutChainInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WalletCreateOrConnectWithoutChainInputSchema),z.lazy(() => WalletCreateOrConnectWithoutChainInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WalletUncheckedCreateNestedManyWithoutChainInputSchema: z.ZodType<Prisma.WalletUncheckedCreateNestedManyWithoutChainInput> = z.object({
  create: z.union([ z.lazy(() => WalletCreateWithoutChainInputSchema),z.lazy(() => WalletCreateWithoutChainInputSchema).array(),z.lazy(() => WalletUncheckedCreateWithoutChainInputSchema),z.lazy(() => WalletUncheckedCreateWithoutChainInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WalletCreateOrConnectWithoutChainInputSchema),z.lazy(() => WalletCreateOrConnectWithoutChainInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WalletUpdateManyWithoutChainNestedInputSchema: z.ZodType<Prisma.WalletUpdateManyWithoutChainNestedInput> = z.object({
  create: z.union([ z.lazy(() => WalletCreateWithoutChainInputSchema),z.lazy(() => WalletCreateWithoutChainInputSchema).array(),z.lazy(() => WalletUncheckedCreateWithoutChainInputSchema),z.lazy(() => WalletUncheckedCreateWithoutChainInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WalletCreateOrConnectWithoutChainInputSchema),z.lazy(() => WalletCreateOrConnectWithoutChainInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WalletUpsertWithWhereUniqueWithoutChainInputSchema),z.lazy(() => WalletUpsertWithWhereUniqueWithoutChainInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WalletUpdateWithWhereUniqueWithoutChainInputSchema),z.lazy(() => WalletUpdateWithWhereUniqueWithoutChainInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WalletUpdateManyWithWhereWithoutChainInputSchema),z.lazy(() => WalletUpdateManyWithWhereWithoutChainInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WalletScalarWhereInputSchema),z.lazy(() => WalletScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const WalletUncheckedUpdateManyWithoutChainNestedInputSchema: z.ZodType<Prisma.WalletUncheckedUpdateManyWithoutChainNestedInput> = z.object({
  create: z.union([ z.lazy(() => WalletCreateWithoutChainInputSchema),z.lazy(() => WalletCreateWithoutChainInputSchema).array(),z.lazy(() => WalletUncheckedCreateWithoutChainInputSchema),z.lazy(() => WalletUncheckedCreateWithoutChainInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WalletCreateOrConnectWithoutChainInputSchema),z.lazy(() => WalletCreateOrConnectWithoutChainInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WalletUpsertWithWhereUniqueWithoutChainInputSchema),z.lazy(() => WalletUpsertWithWhereUniqueWithoutChainInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WalletWhereUniqueInputSchema),z.lazy(() => WalletWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WalletUpdateWithWhereUniqueWithoutChainInputSchema),z.lazy(() => WalletUpdateWithWhereUniqueWithoutChainInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WalletUpdateManyWithWhereWithoutChainInputSchema),z.lazy(() => WalletUpdateManyWithWhereWithoutChainInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WalletScalarWhereInputSchema),z.lazy(() => WalletScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutWalletsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutWalletsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutWalletsInputSchema),z.lazy(() => UserUncheckedCreateWithoutWalletsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWalletsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const ChainCreateNestedOneWithoutWalletInputSchema: z.ZodType<Prisma.ChainCreateNestedOneWithoutWalletInput> = z.object({
  create: z.union([ z.lazy(() => ChainCreateWithoutWalletInputSchema),z.lazy(() => ChainUncheckedCreateWithoutWalletInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ChainCreateOrConnectWithoutWalletInputSchema).optional(),
  connect: z.lazy(() => ChainWhereUniqueInputSchema).optional()
}).strict();

export const SessionCreateNestedManyWithoutWalletInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutWalletInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutWalletInputSchema),z.lazy(() => SessionCreateWithoutWalletInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutWalletInputSchema),z.lazy(() => SessionUncheckedCreateWithoutWalletInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutWalletInputSchema),z.lazy(() => SessionCreateOrConnectWithoutWalletInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedCreateNestedManyWithoutWalletInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutWalletInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutWalletInputSchema),z.lazy(() => SessionCreateWithoutWalletInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutWalletInputSchema),z.lazy(() => SessionUncheckedCreateWithoutWalletInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutWalletInputSchema),z.lazy(() => SessionCreateOrConnectWithoutWalletInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutWalletsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutWalletsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutWalletsInputSchema),z.lazy(() => UserUncheckedCreateWithoutWalletsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWalletsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutWalletsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutWalletsInputSchema),z.lazy(() => UserUpdateWithoutWalletsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutWalletsInputSchema) ]).optional(),
}).strict();

export const ChainUpdateOneRequiredWithoutWalletNestedInputSchema: z.ZodType<Prisma.ChainUpdateOneRequiredWithoutWalletNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChainCreateWithoutWalletInputSchema),z.lazy(() => ChainUncheckedCreateWithoutWalletInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ChainCreateOrConnectWithoutWalletInputSchema).optional(),
  upsert: z.lazy(() => ChainUpsertWithoutWalletInputSchema).optional(),
  connect: z.lazy(() => ChainWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ChainUpdateToOneWithWhereWithoutWalletInputSchema),z.lazy(() => ChainUpdateWithoutWalletInputSchema),z.lazy(() => ChainUncheckedUpdateWithoutWalletInputSchema) ]).optional(),
}).strict();

export const SessionUpdateManyWithoutWalletNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutWalletNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutWalletInputSchema),z.lazy(() => SessionCreateWithoutWalletInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutWalletInputSchema),z.lazy(() => SessionUncheckedCreateWithoutWalletInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutWalletInputSchema),z.lazy(() => SessionCreateOrConnectWithoutWalletInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutWalletInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutWalletInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutWalletInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutWalletInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutWalletInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutWalletInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutWalletNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutWalletNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutWalletInputSchema),z.lazy(() => SessionCreateWithoutWalletInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutWalletInputSchema),z.lazy(() => SessionUncheckedCreateWithoutWalletInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutWalletInputSchema),z.lazy(() => SessionCreateOrConnectWithoutWalletInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutWalletInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutWalletInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutWalletInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutWalletInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutWalletInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutWalletInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const WalletCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.WalletCreateNestedOneWithoutSessionsInput> = z.object({
  create: z.union([ z.lazy(() => WalletCreateWithoutSessionsInputSchema),z.lazy(() => WalletUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WalletCreateOrConnectWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => WalletWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSessionsInputSchema),z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]).optional(),
}).strict();

export const WalletUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.WalletUpdateOneRequiredWithoutSessionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => WalletCreateWithoutSessionsInputSchema),z.lazy(() => WalletUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WalletCreateOrConnectWithoutSessionsInputSchema).optional(),
  upsert: z.lazy(() => WalletUpsertWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => WalletWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WalletUpdateToOneWithWhereWithoutSessionsInputSchema),z.lazy(() => WalletUpdateWithoutSessionsInputSchema),z.lazy(() => WalletUncheckedUpdateWithoutSessionsInputSchema) ]).optional(),
}).strict();

export const RoleCreateNestedManyWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleCreateNestedManyWithoutPermissionsInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutPermissionsInputSchema),z.lazy(() => RoleCreateWithoutPermissionsInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutPermissionsInputSchema),z.lazy(() => RoleCreateOrConnectWithoutPermissionsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoleUncheckedCreateNestedManyWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleUncheckedCreateNestedManyWithoutPermissionsInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutPermissionsInputSchema),z.lazy(() => RoleCreateWithoutPermissionsInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutPermissionsInputSchema),z.lazy(() => RoleCreateOrConnectWithoutPermissionsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoleUpdateManyWithoutPermissionsNestedInputSchema: z.ZodType<Prisma.RoleUpdateManyWithoutPermissionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutPermissionsInputSchema),z.lazy(() => RoleCreateWithoutPermissionsInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutPermissionsInputSchema),z.lazy(() => RoleCreateOrConnectWithoutPermissionsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleUpsertWithWhereUniqueWithoutPermissionsInputSchema),z.lazy(() => RoleUpsertWithWhereUniqueWithoutPermissionsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleUpdateWithWhereUniqueWithoutPermissionsInputSchema),z.lazy(() => RoleUpdateWithWhereUniqueWithoutPermissionsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleUpdateManyWithWhereWithoutPermissionsInputSchema),z.lazy(() => RoleUpdateManyWithWhereWithoutPermissionsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoleUncheckedUpdateManyWithoutPermissionsNestedInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutPermissionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutPermissionsInputSchema),z.lazy(() => RoleCreateWithoutPermissionsInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutPermissionsInputSchema),z.lazy(() => RoleCreateOrConnectWithoutPermissionsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleUpsertWithWhereUniqueWithoutPermissionsInputSchema),z.lazy(() => RoleUpsertWithWhereUniqueWithoutPermissionsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleUpdateWithWhereUniqueWithoutPermissionsInputSchema),z.lazy(() => RoleUpdateWithWhereUniqueWithoutPermissionsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleUpdateManyWithWhereWithoutPermissionsInputSchema),z.lazy(() => RoleUpdateManyWithWhereWithoutPermissionsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedManyWithoutRolesInputSchema: z.ZodType<Prisma.UserCreateNestedManyWithoutRolesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRolesInputSchema),z.lazy(() => UserCreateWithoutRolesInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutRolesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutRolesInputSchema),z.lazy(() => UserCreateOrConnectWithoutRolesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PermissionCreateNestedManyWithoutRolesInputSchema: z.ZodType<Prisma.PermissionCreateNestedManyWithoutRolesInput> = z.object({
  create: z.union([ z.lazy(() => PermissionCreateWithoutRolesInputSchema),z.lazy(() => PermissionCreateWithoutRolesInputSchema).array(),z.lazy(() => PermissionUncheckedCreateWithoutRolesInputSchema),z.lazy(() => PermissionUncheckedCreateWithoutRolesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PermissionCreateOrConnectWithoutRolesInputSchema),z.lazy(() => PermissionCreateOrConnectWithoutRolesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUncheckedCreateNestedManyWithoutRolesInputSchema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutRolesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRolesInputSchema),z.lazy(() => UserCreateWithoutRolesInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutRolesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutRolesInputSchema),z.lazy(() => UserCreateOrConnectWithoutRolesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PermissionUncheckedCreateNestedManyWithoutRolesInputSchema: z.ZodType<Prisma.PermissionUncheckedCreateNestedManyWithoutRolesInput> = z.object({
  create: z.union([ z.lazy(() => PermissionCreateWithoutRolesInputSchema),z.lazy(() => PermissionCreateWithoutRolesInputSchema).array(),z.lazy(() => PermissionUncheckedCreateWithoutRolesInputSchema),z.lazy(() => PermissionUncheckedCreateWithoutRolesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PermissionCreateOrConnectWithoutRolesInputSchema),z.lazy(() => PermissionCreateOrConnectWithoutRolesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateManyWithoutRolesNestedInputSchema: z.ZodType<Prisma.UserUpdateManyWithoutRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRolesInputSchema),z.lazy(() => UserCreateWithoutRolesInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutRolesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutRolesInputSchema),z.lazy(() => UserCreateOrConnectWithoutRolesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserUpsertWithWhereUniqueWithoutRolesInputSchema),z.lazy(() => UserUpsertWithWhereUniqueWithoutRolesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithWhereUniqueWithoutRolesInputSchema),z.lazy(() => UserUpdateWithWhereUniqueWithoutRolesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserUpdateManyWithWhereWithoutRolesInputSchema),z.lazy(() => UserUpdateManyWithWhereWithoutRolesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PermissionUpdateManyWithoutRolesNestedInputSchema: z.ZodType<Prisma.PermissionUpdateManyWithoutRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PermissionCreateWithoutRolesInputSchema),z.lazy(() => PermissionCreateWithoutRolesInputSchema).array(),z.lazy(() => PermissionUncheckedCreateWithoutRolesInputSchema),z.lazy(() => PermissionUncheckedCreateWithoutRolesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PermissionCreateOrConnectWithoutRolesInputSchema),z.lazy(() => PermissionCreateOrConnectWithoutRolesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PermissionUpsertWithWhereUniqueWithoutRolesInputSchema),z.lazy(() => PermissionUpsertWithWhereUniqueWithoutRolesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PermissionUpdateWithWhereUniqueWithoutRolesInputSchema),z.lazy(() => PermissionUpdateWithWhereUniqueWithoutRolesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PermissionUpdateManyWithWhereWithoutRolesInputSchema),z.lazy(() => PermissionUpdateManyWithWhereWithoutRolesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PermissionScalarWhereInputSchema),z.lazy(() => PermissionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserUncheckedUpdateManyWithoutRolesNestedInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRolesInputSchema),z.lazy(() => UserCreateWithoutRolesInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutRolesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutRolesInputSchema),z.lazy(() => UserCreateOrConnectWithoutRolesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserUpsertWithWhereUniqueWithoutRolesInputSchema),z.lazy(() => UserUpsertWithWhereUniqueWithoutRolesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithWhereUniqueWithoutRolesInputSchema),z.lazy(() => UserUpdateWithWhereUniqueWithoutRolesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserUpdateManyWithWhereWithoutRolesInputSchema),z.lazy(() => UserUpdateManyWithWhereWithoutRolesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PermissionUncheckedUpdateManyWithoutRolesNestedInputSchema: z.ZodType<Prisma.PermissionUncheckedUpdateManyWithoutRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PermissionCreateWithoutRolesInputSchema),z.lazy(() => PermissionCreateWithoutRolesInputSchema).array(),z.lazy(() => PermissionUncheckedCreateWithoutRolesInputSchema),z.lazy(() => PermissionUncheckedCreateWithoutRolesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PermissionCreateOrConnectWithoutRolesInputSchema),z.lazy(() => PermissionCreateOrConnectWithoutRolesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PermissionUpsertWithWhereUniqueWithoutRolesInputSchema),z.lazy(() => PermissionUpsertWithWhereUniqueWithoutRolesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PermissionUpdateWithWhereUniqueWithoutRolesInputSchema),z.lazy(() => PermissionUpdateWithWhereUniqueWithoutRolesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PermissionUpdateManyWithWhereWithoutRolesInputSchema),z.lazy(() => PermissionUpdateManyWithWhereWithoutRolesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PermissionScalarWhereInputSchema),z.lazy(() => PermissionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const MintDataCreateWithoutCollectionInputSchema: z.ZodType<Prisma.MintDataCreateWithoutCollectionInput> = z.object({
  id: z.string().cuid().optional(),
  block_last_mint: z.number().int(),
  date_last_mint: z.coerce.date(),
  mints_last_1h: z.number().int(),
  mints_last_12h: z.number().int(),
  mints_last_24h: z.number().int(),
  mints_last_7d: z.number().int(),
  mints_last_1m: z.number().int(),
  mints_last_6m: z.number().int(),
  floor_price_raw: z.string(),
  floor_price_decimal: z.number(),
  all_time_raw: z.string(),
  all_time_decimal: z.number(),
  last_12h_decimal: z.number(),
  last_1h_decimal: z.number(),
  last_24h_decimal: z.number(),
  last_7d_decimal: z.number(),
  last_1m_decimal: z.number(),
  last_6m_decimal: z.number(),
  date_last_sale: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const MintDataUncheckedCreateWithoutCollectionInputSchema: z.ZodType<Prisma.MintDataUncheckedCreateWithoutCollectionInput> = z.object({
  id: z.string().cuid().optional(),
  block_last_mint: z.number().int(),
  date_last_mint: z.coerce.date(),
  mints_last_1h: z.number().int(),
  mints_last_12h: z.number().int(),
  mints_last_24h: z.number().int(),
  mints_last_7d: z.number().int(),
  mints_last_1m: z.number().int(),
  mints_last_6m: z.number().int(),
  floor_price_raw: z.string(),
  floor_price_decimal: z.number(),
  all_time_raw: z.string(),
  all_time_decimal: z.number(),
  last_12h_decimal: z.number(),
  last_1h_decimal: z.number(),
  last_24h_decimal: z.number(),
  last_7d_decimal: z.number(),
  last_1m_decimal: z.number(),
  last_6m_decimal: z.number(),
  date_last_sale: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const MintDataCreateOrConnectWithoutCollectionInputSchema: z.ZodType<Prisma.MintDataCreateOrConnectWithoutCollectionInput> = z.object({
  where: z.lazy(() => MintDataWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MintDataCreateWithoutCollectionInputSchema),z.lazy(() => MintDataUncheckedCreateWithoutCollectionInputSchema) ]),
}).strict();

export const UserCreateWithoutCollectionsInputSchema: z.ZodType<Prisma.UserCreateWithoutCollectionsInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),
  avatar_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  banner_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  username: z.string().max(64, { message: "too lengthy" }).optional().nullable(),
  description: z.string().max(512, { message: "too long" }).optional().nullable(),
  ens: z.string().optional().nullable(),
  status: z.string().optional(),
  email: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable(),
  wallets: z.lazy(() => WalletCreateNestedManyWithoutOwnerInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutUsersInputSchema).optional(),
  connections: z.lazy(() => ConnectionCreateNestedManyWithoutUserInputSchema).optional(),
  password: z.lazy(() => PasswordCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutCollectionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCollectionsInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),
  avatar_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  banner_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  username: z.string().max(64, { message: "too lengthy" }).optional().nullable(),
  description: z.string().max(512, { message: "too long" }).optional().nullable(),
  ens: z.string().optional().nullable(),
  status: z.string().optional(),
  email: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable(),
  wallets: z.lazy(() => WalletUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  connections: z.lazy(() => ConnectionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  password: z.lazy(() => PasswordUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutCollectionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCollectionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCollectionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCollectionsInputSchema) ]),
}).strict();

export const NftCreateWithoutCollectionInputSchema: z.ZodType<Prisma.NftCreateWithoutCollectionInput> = z.object({
  id: z.string().cuid().optional(),
  token_address: z.string(),
  token_address_lowercase: z.string(),
  token_id: z.string(),
  attributes: z.string(),
  block_minted: z.number().int(),
  contract_type: z.string(),
  description: z.string(),
  dna: z.string(),
  edition: z.number().int(),
  image: z.string(),
  image_url: z.string(),
  metadata: z.string(),
  name: z.string(),
  network: z.string(),
  old_image_url: z.string(),
  old_token_uri: z.string(),
  owner_of: z.string(),
  token_id_int: z.number().int(),
  token_uri: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  open_rarity: z.lazy(() => OpenRarityCreateNestedOneWithoutNftInputSchema).optional()
}).strict();

export const NftUncheckedCreateWithoutCollectionInputSchema: z.ZodType<Prisma.NftUncheckedCreateWithoutCollectionInput> = z.object({
  id: z.string().cuid().optional(),
  token_address: z.string(),
  token_address_lowercase: z.string(),
  token_id: z.string(),
  attributes: z.string(),
  block_minted: z.number().int(),
  contract_type: z.string(),
  description: z.string(),
  dna: z.string(),
  edition: z.number().int(),
  image: z.string(),
  image_url: z.string(),
  metadata: z.string(),
  name: z.string(),
  network: z.string(),
  old_image_url: z.string(),
  old_token_uri: z.string(),
  owner_of: z.string(),
  token_id_int: z.number().int(),
  token_uri: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  open_rarity: z.lazy(() => OpenRarityUncheckedCreateNestedOneWithoutNftInputSchema).optional()
}).strict();

export const NftCreateOrConnectWithoutCollectionInputSchema: z.ZodType<Prisma.NftCreateOrConnectWithoutCollectionInput> = z.object({
  where: z.lazy(() => NftWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NftCreateWithoutCollectionInputSchema),z.lazy(() => NftUncheckedCreateWithoutCollectionInputSchema) ]),
}).strict();

export const MintDataUpsertWithoutCollectionInputSchema: z.ZodType<Prisma.MintDataUpsertWithoutCollectionInput> = z.object({
  update: z.union([ z.lazy(() => MintDataUpdateWithoutCollectionInputSchema),z.lazy(() => MintDataUncheckedUpdateWithoutCollectionInputSchema) ]),
  create: z.union([ z.lazy(() => MintDataCreateWithoutCollectionInputSchema),z.lazy(() => MintDataUncheckedCreateWithoutCollectionInputSchema) ]),
  where: z.lazy(() => MintDataWhereInputSchema).optional()
}).strict();

export const MintDataUpdateToOneWithWhereWithoutCollectionInputSchema: z.ZodType<Prisma.MintDataUpdateToOneWithWhereWithoutCollectionInput> = z.object({
  where: z.lazy(() => MintDataWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MintDataUpdateWithoutCollectionInputSchema),z.lazy(() => MintDataUncheckedUpdateWithoutCollectionInputSchema) ]),
}).strict();

export const MintDataUpdateWithoutCollectionInputSchema: z.ZodType<Prisma.MintDataUpdateWithoutCollectionInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_last_mint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_last_mint: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_1h: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_12h: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_24h: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_7d: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_1m: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_6m: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  floor_price_raw: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  floor_price_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  all_time_raw: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  all_time_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_12h_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_1h_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_24h_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_7d_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_1m_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_6m_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  date_last_sale: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MintDataUncheckedUpdateWithoutCollectionInputSchema: z.ZodType<Prisma.MintDataUncheckedUpdateWithoutCollectionInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_last_mint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_last_mint: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_1h: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_12h: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_24h: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_7d: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_1m: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mints_last_6m: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  floor_price_raw: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  floor_price_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  all_time_raw: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  all_time_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_12h_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_1h_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_24h_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_7d_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_1m_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  last_6m_decimal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  date_last_sale: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUpsertWithoutCollectionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutCollectionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCollectionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCollectionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCollectionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCollectionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutCollectionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCollectionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCollectionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCollectionsInputSchema) ]),
}).strict();

export const UserUpdateWithoutCollectionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutCollectionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banner_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string().max(64, { message: "too lengthy" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string().max(512, { message: "too long" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ens: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wallets: z.lazy(() => WalletUpdateManyWithoutOwnerNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutUsersNestedInputSchema).optional(),
  connections: z.lazy(() => ConnectionUpdateManyWithoutUserNestedInputSchema).optional(),
  password: z.lazy(() => PasswordUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutCollectionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCollectionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banner_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string().max(64, { message: "too lengthy" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string().max(512, { message: "too long" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ens: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wallets: z.lazy(() => WalletUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  connections: z.lazy(() => ConnectionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  password: z.lazy(() => PasswordUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const NftUpsertWithWhereUniqueWithoutCollectionInputSchema: z.ZodType<Prisma.NftUpsertWithWhereUniqueWithoutCollectionInput> = z.object({
  where: z.lazy(() => NftWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NftUpdateWithoutCollectionInputSchema),z.lazy(() => NftUncheckedUpdateWithoutCollectionInputSchema) ]),
  create: z.union([ z.lazy(() => NftCreateWithoutCollectionInputSchema),z.lazy(() => NftUncheckedCreateWithoutCollectionInputSchema) ]),
}).strict();

export const NftUpdateWithWhereUniqueWithoutCollectionInputSchema: z.ZodType<Prisma.NftUpdateWithWhereUniqueWithoutCollectionInput> = z.object({
  where: z.lazy(() => NftWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NftUpdateWithoutCollectionInputSchema),z.lazy(() => NftUncheckedUpdateWithoutCollectionInputSchema) ]),
}).strict();

export const NftUpdateManyWithWhereWithoutCollectionInputSchema: z.ZodType<Prisma.NftUpdateManyWithWhereWithoutCollectionInput> = z.object({
  where: z.lazy(() => NftScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NftUpdateManyMutationInputSchema),z.lazy(() => NftUncheckedUpdateManyWithoutCollectionInputSchema) ]),
}).strict();

export const NftScalarWhereInputSchema: z.ZodType<Prisma.NftScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NftScalarWhereInputSchema),z.lazy(() => NftScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NftScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NftScalarWhereInputSchema),z.lazy(() => NftScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token_address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token_address_lowercase: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  attributes: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  block_minted: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  contract_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dna: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  edition: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image_url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  metadata: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  network: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  old_image_url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  old_token_uri: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  owner_of: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token_id_int: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  token_uri: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  collection_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const OpenRarityCreateWithoutNftInputSchema: z.ZodType<Prisma.OpenRarityCreateWithoutNftInput> = z.object({
  id: z.string().cuid().optional(),
  rank: z.number().int(),
  score: z.number(),
  unique_attributes: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const OpenRarityUncheckedCreateWithoutNftInputSchema: z.ZodType<Prisma.OpenRarityUncheckedCreateWithoutNftInput> = z.object({
  id: z.string().cuid().optional(),
  rank: z.number().int(),
  score: z.number(),
  unique_attributes: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const OpenRarityCreateOrConnectWithoutNftInputSchema: z.ZodType<Prisma.OpenRarityCreateOrConnectWithoutNftInput> = z.object({
  where: z.lazy(() => OpenRarityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OpenRarityCreateWithoutNftInputSchema),z.lazy(() => OpenRarityUncheckedCreateWithoutNftInputSchema) ]),
}).strict();

export const CollectionCreateWithoutNftsInputSchema: z.ZodType<Prisma.CollectionCreateWithoutNftsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  max_items: z.number().int(),
  max_batch_size: z.number().int(),
  symbol: z.string(),
  creator_address: z.string(),
  is_hidden: z.boolean(),
  sort_order: z.number().int(),
  is_mint_active: z.boolean(),
  is_archetype: z.boolean(),
  is_pending: z.boolean(),
  discounts: z.string(),
  owner_alt_payout: z.string(),
  super_affiliate_payout: z.string(),
  contract_version: z.number().int(),
  slug: z.string(),
  mint_info: z.string(),
  socials: z.string(),
  token_address: z.string(),
  token_address_lowercase: z.string(),
  trait_counts: z.string(),
  avatar_uri: z.string(),
  banner_uri: z.string(),
  description: z.string(),
  hero_uri: z.string(),
  twitter: z.string(),
  website: z.string(),
  discord: z.string(),
  num_items: z.number().int(),
  num_owners: z.number().int(),
  last_refreshed: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  mint_data: z.lazy(() => MintDataCreateNestedOneWithoutCollectionInputSchema).optional(),
  creator: z.lazy(() => UserCreateNestedOneWithoutCollectionsInputSchema)
}).strict();

export const CollectionUncheckedCreateWithoutNftsInputSchema: z.ZodType<Prisma.CollectionUncheckedCreateWithoutNftsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  max_items: z.number().int(),
  max_batch_size: z.number().int(),
  symbol: z.string(),
  creator_address: z.string(),
  is_hidden: z.boolean(),
  sort_order: z.number().int(),
  is_mint_active: z.boolean(),
  is_archetype: z.boolean(),
  is_pending: z.boolean(),
  discounts: z.string(),
  owner_alt_payout: z.string(),
  super_affiliate_payout: z.string(),
  contract_version: z.number().int(),
  slug: z.string(),
  mint_info: z.string(),
  socials: z.string(),
  token_address: z.string(),
  token_address_lowercase: z.string(),
  trait_counts: z.string(),
  avatar_uri: z.string(),
  banner_uri: z.string(),
  description: z.string(),
  hero_uri: z.string(),
  twitter: z.string(),
  website: z.string(),
  discord: z.string(),
  num_items: z.number().int(),
  num_owners: z.number().int(),
  last_refreshed: z.coerce.date(),
  user_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  mint_data: z.lazy(() => MintDataUncheckedCreateNestedOneWithoutCollectionInputSchema).optional()
}).strict();

export const CollectionCreateOrConnectWithoutNftsInputSchema: z.ZodType<Prisma.CollectionCreateOrConnectWithoutNftsInput> = z.object({
  where: z.lazy(() => CollectionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CollectionCreateWithoutNftsInputSchema),z.lazy(() => CollectionUncheckedCreateWithoutNftsInputSchema) ]),
}).strict();

export const OpenRarityUpsertWithoutNftInputSchema: z.ZodType<Prisma.OpenRarityUpsertWithoutNftInput> = z.object({
  update: z.union([ z.lazy(() => OpenRarityUpdateWithoutNftInputSchema),z.lazy(() => OpenRarityUncheckedUpdateWithoutNftInputSchema) ]),
  create: z.union([ z.lazy(() => OpenRarityCreateWithoutNftInputSchema),z.lazy(() => OpenRarityUncheckedCreateWithoutNftInputSchema) ]),
  where: z.lazy(() => OpenRarityWhereInputSchema).optional()
}).strict();

export const OpenRarityUpdateToOneWithWhereWithoutNftInputSchema: z.ZodType<Prisma.OpenRarityUpdateToOneWithWhereWithoutNftInput> = z.object({
  where: z.lazy(() => OpenRarityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OpenRarityUpdateWithoutNftInputSchema),z.lazy(() => OpenRarityUncheckedUpdateWithoutNftInputSchema) ]),
}).strict();

export const OpenRarityUpdateWithoutNftInputSchema: z.ZodType<Prisma.OpenRarityUpdateWithoutNftInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rank: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  score: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  unique_attributes: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OpenRarityUncheckedUpdateWithoutNftInputSchema: z.ZodType<Prisma.OpenRarityUncheckedUpdateWithoutNftInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rank: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  score: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  unique_attributes: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CollectionUpsertWithoutNftsInputSchema: z.ZodType<Prisma.CollectionUpsertWithoutNftsInput> = z.object({
  update: z.union([ z.lazy(() => CollectionUpdateWithoutNftsInputSchema),z.lazy(() => CollectionUncheckedUpdateWithoutNftsInputSchema) ]),
  create: z.union([ z.lazy(() => CollectionCreateWithoutNftsInputSchema),z.lazy(() => CollectionUncheckedCreateWithoutNftsInputSchema) ]),
  where: z.lazy(() => CollectionWhereInputSchema).optional()
}).strict();

export const CollectionUpdateToOneWithWhereWithoutNftsInputSchema: z.ZodType<Prisma.CollectionUpdateToOneWithWhereWithoutNftsInput> = z.object({
  where: z.lazy(() => CollectionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CollectionUpdateWithoutNftsInputSchema),z.lazy(() => CollectionUncheckedUpdateWithoutNftsInputSchema) ]),
}).strict();

export const CollectionUpdateWithoutNftsInputSchema: z.ZodType<Prisma.CollectionUpdateWithoutNftsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  max_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  max_batch_size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_hidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  sort_order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  is_mint_active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_archetype: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_pending: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  discounts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_alt_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  super_affiliate_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contract_version: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mint_info: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trait_counts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  banner_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hero_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  twitter: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discord: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  num_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  num_owners: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  last_refreshed: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mint_data: z.lazy(() => MintDataUpdateOneWithoutCollectionNestedInputSchema).optional(),
  creator: z.lazy(() => UserUpdateOneRequiredWithoutCollectionsNestedInputSchema).optional()
}).strict();

export const CollectionUncheckedUpdateWithoutNftsInputSchema: z.ZodType<Prisma.CollectionUncheckedUpdateWithoutNftsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  max_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  max_batch_size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_hidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  sort_order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  is_mint_active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_archetype: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_pending: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  discounts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_alt_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  super_affiliate_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contract_version: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mint_info: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trait_counts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  banner_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hero_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  twitter: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discord: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  num_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  num_owners: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  last_refreshed: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mint_data: z.lazy(() => MintDataUncheckedUpdateOneWithoutCollectionNestedInputSchema).optional()
}).strict();

export const CollectionCreateWithoutMint_dataInputSchema: z.ZodType<Prisma.CollectionCreateWithoutMint_dataInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  max_items: z.number().int(),
  max_batch_size: z.number().int(),
  symbol: z.string(),
  creator_address: z.string(),
  is_hidden: z.boolean(),
  sort_order: z.number().int(),
  is_mint_active: z.boolean(),
  is_archetype: z.boolean(),
  is_pending: z.boolean(),
  discounts: z.string(),
  owner_alt_payout: z.string(),
  super_affiliate_payout: z.string(),
  contract_version: z.number().int(),
  slug: z.string(),
  mint_info: z.string(),
  socials: z.string(),
  token_address: z.string(),
  token_address_lowercase: z.string(),
  trait_counts: z.string(),
  avatar_uri: z.string(),
  banner_uri: z.string(),
  description: z.string(),
  hero_uri: z.string(),
  twitter: z.string(),
  website: z.string(),
  discord: z.string(),
  num_items: z.number().int(),
  num_owners: z.number().int(),
  last_refreshed: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  creator: z.lazy(() => UserCreateNestedOneWithoutCollectionsInputSchema),
  nfts: z.lazy(() => NftCreateNestedManyWithoutCollectionInputSchema).optional()
}).strict();

export const CollectionUncheckedCreateWithoutMint_dataInputSchema: z.ZodType<Prisma.CollectionUncheckedCreateWithoutMint_dataInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  max_items: z.number().int(),
  max_batch_size: z.number().int(),
  symbol: z.string(),
  creator_address: z.string(),
  is_hidden: z.boolean(),
  sort_order: z.number().int(),
  is_mint_active: z.boolean(),
  is_archetype: z.boolean(),
  is_pending: z.boolean(),
  discounts: z.string(),
  owner_alt_payout: z.string(),
  super_affiliate_payout: z.string(),
  contract_version: z.number().int(),
  slug: z.string(),
  mint_info: z.string(),
  socials: z.string(),
  token_address: z.string(),
  token_address_lowercase: z.string(),
  trait_counts: z.string(),
  avatar_uri: z.string(),
  banner_uri: z.string(),
  description: z.string(),
  hero_uri: z.string(),
  twitter: z.string(),
  website: z.string(),
  discord: z.string(),
  num_items: z.number().int(),
  num_owners: z.number().int(),
  last_refreshed: z.coerce.date(),
  user_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  nfts: z.lazy(() => NftUncheckedCreateNestedManyWithoutCollectionInputSchema).optional()
}).strict();

export const CollectionCreateOrConnectWithoutMint_dataInputSchema: z.ZodType<Prisma.CollectionCreateOrConnectWithoutMint_dataInput> = z.object({
  where: z.lazy(() => CollectionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CollectionCreateWithoutMint_dataInputSchema),z.lazy(() => CollectionUncheckedCreateWithoutMint_dataInputSchema) ]),
}).strict();

export const CollectionUpsertWithoutMint_dataInputSchema: z.ZodType<Prisma.CollectionUpsertWithoutMint_dataInput> = z.object({
  update: z.union([ z.lazy(() => CollectionUpdateWithoutMint_dataInputSchema),z.lazy(() => CollectionUncheckedUpdateWithoutMint_dataInputSchema) ]),
  create: z.union([ z.lazy(() => CollectionCreateWithoutMint_dataInputSchema),z.lazy(() => CollectionUncheckedCreateWithoutMint_dataInputSchema) ]),
  where: z.lazy(() => CollectionWhereInputSchema).optional()
}).strict();

export const CollectionUpdateToOneWithWhereWithoutMint_dataInputSchema: z.ZodType<Prisma.CollectionUpdateToOneWithWhereWithoutMint_dataInput> = z.object({
  where: z.lazy(() => CollectionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CollectionUpdateWithoutMint_dataInputSchema),z.lazy(() => CollectionUncheckedUpdateWithoutMint_dataInputSchema) ]),
}).strict();

export const CollectionUpdateWithoutMint_dataInputSchema: z.ZodType<Prisma.CollectionUpdateWithoutMint_dataInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  max_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  max_batch_size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_hidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  sort_order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  is_mint_active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_archetype: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_pending: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  discounts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_alt_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  super_affiliate_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contract_version: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mint_info: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trait_counts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  banner_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hero_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  twitter: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discord: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  num_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  num_owners: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  last_refreshed: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  creator: z.lazy(() => UserUpdateOneRequiredWithoutCollectionsNestedInputSchema).optional(),
  nfts: z.lazy(() => NftUpdateManyWithoutCollectionNestedInputSchema).optional()
}).strict();

export const CollectionUncheckedUpdateWithoutMint_dataInputSchema: z.ZodType<Prisma.CollectionUncheckedUpdateWithoutMint_dataInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  max_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  max_batch_size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_hidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  sort_order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  is_mint_active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_archetype: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_pending: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  discounts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_alt_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  super_affiliate_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contract_version: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mint_info: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trait_counts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  banner_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hero_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  twitter: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discord: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  num_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  num_owners: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  last_refreshed: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  nfts: z.lazy(() => NftUncheckedUpdateManyWithoutCollectionNestedInputSchema).optional()
}).strict();

export const NftCreateWithoutOpen_rarityInputSchema: z.ZodType<Prisma.NftCreateWithoutOpen_rarityInput> = z.object({
  id: z.string().cuid().optional(),
  token_address: z.string(),
  token_address_lowercase: z.string(),
  token_id: z.string(),
  attributes: z.string(),
  block_minted: z.number().int(),
  contract_type: z.string(),
  description: z.string(),
  dna: z.string(),
  edition: z.number().int(),
  image: z.string(),
  image_url: z.string(),
  metadata: z.string(),
  name: z.string(),
  network: z.string(),
  old_image_url: z.string(),
  old_token_uri: z.string(),
  owner_of: z.string(),
  token_id_int: z.number().int(),
  token_uri: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  collection: z.lazy(() => CollectionCreateNestedOneWithoutNftsInputSchema)
}).strict();

export const NftUncheckedCreateWithoutOpen_rarityInputSchema: z.ZodType<Prisma.NftUncheckedCreateWithoutOpen_rarityInput> = z.object({
  id: z.string().cuid().optional(),
  token_address: z.string(),
  token_address_lowercase: z.string(),
  token_id: z.string(),
  attributes: z.string(),
  block_minted: z.number().int(),
  contract_type: z.string(),
  description: z.string(),
  dna: z.string(),
  edition: z.number().int(),
  image: z.string(),
  image_url: z.string(),
  metadata: z.string(),
  name: z.string(),
  network: z.string(),
  old_image_url: z.string(),
  old_token_uri: z.string(),
  owner_of: z.string(),
  token_id_int: z.number().int(),
  token_uri: z.string(),
  collection_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const NftCreateOrConnectWithoutOpen_rarityInputSchema: z.ZodType<Prisma.NftCreateOrConnectWithoutOpen_rarityInput> = z.object({
  where: z.lazy(() => NftWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NftCreateWithoutOpen_rarityInputSchema),z.lazy(() => NftUncheckedCreateWithoutOpen_rarityInputSchema) ]),
}).strict();

export const NftUpsertWithoutOpen_rarityInputSchema: z.ZodType<Prisma.NftUpsertWithoutOpen_rarityInput> = z.object({
  update: z.union([ z.lazy(() => NftUpdateWithoutOpen_rarityInputSchema),z.lazy(() => NftUncheckedUpdateWithoutOpen_rarityInputSchema) ]),
  create: z.union([ z.lazy(() => NftCreateWithoutOpen_rarityInputSchema),z.lazy(() => NftUncheckedCreateWithoutOpen_rarityInputSchema) ]),
  where: z.lazy(() => NftWhereInputSchema).optional()
}).strict();

export const NftUpdateToOneWithWhereWithoutOpen_rarityInputSchema: z.ZodType<Prisma.NftUpdateToOneWithWhereWithoutOpen_rarityInput> = z.object({
  where: z.lazy(() => NftWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => NftUpdateWithoutOpen_rarityInputSchema),z.lazy(() => NftUncheckedUpdateWithoutOpen_rarityInputSchema) ]),
}).strict();

export const NftUpdateWithoutOpen_rarityInputSchema: z.ZodType<Prisma.NftUpdateWithoutOpen_rarityInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attributes: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_minted: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  contract_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dna: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  edition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  network: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  old_image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  old_token_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_of: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_id_int: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  token_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  collection: z.lazy(() => CollectionUpdateOneRequiredWithoutNftsNestedInputSchema).optional()
}).strict();

export const NftUncheckedUpdateWithoutOpen_rarityInputSchema: z.ZodType<Prisma.NftUncheckedUpdateWithoutOpen_rarityInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attributes: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_minted: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  contract_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dna: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  edition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  network: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  old_image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  old_token_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_of: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_id_int: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  token_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  collection_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CollectionCreateWithoutCreatorInputSchema: z.ZodType<Prisma.CollectionCreateWithoutCreatorInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  max_items: z.number().int(),
  max_batch_size: z.number().int(),
  symbol: z.string(),
  creator_address: z.string(),
  is_hidden: z.boolean(),
  sort_order: z.number().int(),
  is_mint_active: z.boolean(),
  is_archetype: z.boolean(),
  is_pending: z.boolean(),
  discounts: z.string(),
  owner_alt_payout: z.string(),
  super_affiliate_payout: z.string(),
  contract_version: z.number().int(),
  slug: z.string(),
  mint_info: z.string(),
  socials: z.string(),
  token_address: z.string(),
  token_address_lowercase: z.string(),
  trait_counts: z.string(),
  avatar_uri: z.string(),
  banner_uri: z.string(),
  description: z.string(),
  hero_uri: z.string(),
  twitter: z.string(),
  website: z.string(),
  discord: z.string(),
  num_items: z.number().int(),
  num_owners: z.number().int(),
  last_refreshed: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  mint_data: z.lazy(() => MintDataCreateNestedOneWithoutCollectionInputSchema).optional(),
  nfts: z.lazy(() => NftCreateNestedManyWithoutCollectionInputSchema).optional()
}).strict();

export const CollectionUncheckedCreateWithoutCreatorInputSchema: z.ZodType<Prisma.CollectionUncheckedCreateWithoutCreatorInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  max_items: z.number().int(),
  max_batch_size: z.number().int(),
  symbol: z.string(),
  creator_address: z.string(),
  is_hidden: z.boolean(),
  sort_order: z.number().int(),
  is_mint_active: z.boolean(),
  is_archetype: z.boolean(),
  is_pending: z.boolean(),
  discounts: z.string(),
  owner_alt_payout: z.string(),
  super_affiliate_payout: z.string(),
  contract_version: z.number().int(),
  slug: z.string(),
  mint_info: z.string(),
  socials: z.string(),
  token_address: z.string(),
  token_address_lowercase: z.string(),
  trait_counts: z.string(),
  avatar_uri: z.string(),
  banner_uri: z.string(),
  description: z.string(),
  hero_uri: z.string(),
  twitter: z.string(),
  website: z.string(),
  discord: z.string(),
  num_items: z.number().int(),
  num_owners: z.number().int(),
  last_refreshed: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  mint_data: z.lazy(() => MintDataUncheckedCreateNestedOneWithoutCollectionInputSchema).optional(),
  nfts: z.lazy(() => NftUncheckedCreateNestedManyWithoutCollectionInputSchema).optional()
}).strict();

export const CollectionCreateOrConnectWithoutCreatorInputSchema: z.ZodType<Prisma.CollectionCreateOrConnectWithoutCreatorInput> = z.object({
  where: z.lazy(() => CollectionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CollectionCreateWithoutCreatorInputSchema),z.lazy(() => CollectionUncheckedCreateWithoutCreatorInputSchema) ]),
}).strict();

export const WalletCreateWithoutOwnerInputSchema: z.ZodType<Prisma.WalletCreateWithoutOwnerInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  chain: z.lazy(() => ChainCreateNestedOneWithoutWalletInputSchema),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutWalletInputSchema).optional()
}).strict();

export const WalletUncheckedCreateWithoutOwnerInputSchema: z.ZodType<Prisma.WalletUncheckedCreateWithoutOwnerInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string(),
  chain_id: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutWalletInputSchema).optional()
}).strict();

export const WalletCreateOrConnectWithoutOwnerInputSchema: z.ZodType<Prisma.WalletCreateOrConnectWithoutOwnerInput> = z.object({
  where: z.lazy(() => WalletWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WalletCreateWithoutOwnerInputSchema),z.lazy(() => WalletUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  expiration_date: z.coerce.date(),
  user_agent: z.string().optional(),
  locale: z.string().optional().nullable(),
  ip_address: z.string().optional().nullable(),
  nonce: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  wallet: z.lazy(() => WalletCreateNestedOneWithoutSessionsInputSchema)
}).strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  expiration_date: z.coerce.date(),
  wallet_id: z.string(),
  user_agent: z.string().optional(),
  locale: z.string().optional().nullable(),
  ip_address: z.string().optional().nullable(),
  nonce: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const RoleCreateWithoutUsersInputSchema: z.ZodType<Prisma.RoleCreateWithoutUsersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  permissions: z.lazy(() => PermissionCreateNestedManyWithoutRolesInputSchema).optional()
}).strict();

export const RoleUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutUsersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  permissions: z.lazy(() => PermissionUncheckedCreateNestedManyWithoutRolesInputSchema).optional()
}).strict();

export const RoleCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleCreateWithoutUsersInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const ConnectionCreateWithoutUserInputSchema: z.ZodType<Prisma.ConnectionCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  provider_name: z.string(),
  provider_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const ConnectionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ConnectionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  provider_name: z.string(),
  provider_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const ConnectionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ConnectionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ConnectionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ConnectionCreateWithoutUserInputSchema),z.lazy(() => ConnectionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const PasswordCreateWithoutUserInputSchema: z.ZodType<Prisma.PasswordCreateWithoutUserInput> = z.object({
  hash: z.string()
}).strict();

export const PasswordUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.PasswordUncheckedCreateWithoutUserInput> = z.object({
  hash: z.string()
}).strict();

export const PasswordCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.PasswordCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => PasswordWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PasswordCreateWithoutUserInputSchema),z.lazy(() => PasswordUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const CollectionUpsertWithWhereUniqueWithoutCreatorInputSchema: z.ZodType<Prisma.CollectionUpsertWithWhereUniqueWithoutCreatorInput> = z.object({
  where: z.lazy(() => CollectionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CollectionUpdateWithoutCreatorInputSchema),z.lazy(() => CollectionUncheckedUpdateWithoutCreatorInputSchema) ]),
  create: z.union([ z.lazy(() => CollectionCreateWithoutCreatorInputSchema),z.lazy(() => CollectionUncheckedCreateWithoutCreatorInputSchema) ]),
}).strict();

export const CollectionUpdateWithWhereUniqueWithoutCreatorInputSchema: z.ZodType<Prisma.CollectionUpdateWithWhereUniqueWithoutCreatorInput> = z.object({
  where: z.lazy(() => CollectionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CollectionUpdateWithoutCreatorInputSchema),z.lazy(() => CollectionUncheckedUpdateWithoutCreatorInputSchema) ]),
}).strict();

export const CollectionUpdateManyWithWhereWithoutCreatorInputSchema: z.ZodType<Prisma.CollectionUpdateManyWithWhereWithoutCreatorInput> = z.object({
  where: z.lazy(() => CollectionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CollectionUpdateManyMutationInputSchema),z.lazy(() => CollectionUncheckedUpdateManyWithoutCreatorInputSchema) ]),
}).strict();

export const CollectionScalarWhereInputSchema: z.ZodType<Prisma.CollectionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CollectionScalarWhereInputSchema),z.lazy(() => CollectionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CollectionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CollectionScalarWhereInputSchema),z.lazy(() => CollectionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  max_items: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  max_batch_size: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  symbol: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  creator_address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  is_hidden: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  sort_order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  is_mint_active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  is_archetype: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  is_pending: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  discounts: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  owner_alt_payout: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  super_affiliate_payout: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  contract_version: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mint_info: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  socials: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token_address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token_address_lowercase: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  trait_counts: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  avatar_uri: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  banner_uri: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hero_uri: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  twitter: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  website: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  discord: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  num_items: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  num_owners: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  last_refreshed: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const WalletUpsertWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.WalletUpsertWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => WalletWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WalletUpdateWithoutOwnerInputSchema),z.lazy(() => WalletUncheckedUpdateWithoutOwnerInputSchema) ]),
  create: z.union([ z.lazy(() => WalletCreateWithoutOwnerInputSchema),z.lazy(() => WalletUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export const WalletUpdateWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.WalletUpdateWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => WalletWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WalletUpdateWithoutOwnerInputSchema),z.lazy(() => WalletUncheckedUpdateWithoutOwnerInputSchema) ]),
}).strict();

export const WalletUpdateManyWithWhereWithoutOwnerInputSchema: z.ZodType<Prisma.WalletUpdateManyWithWhereWithoutOwnerInput> = z.object({
  where: z.lazy(() => WalletScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WalletUpdateManyMutationInputSchema),z.lazy(() => WalletUncheckedUpdateManyWithoutOwnerInputSchema) ]),
}).strict();

export const WalletScalarWhereInputSchema: z.ZodType<Prisma.WalletScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WalletScalarWhereInputSchema),z.lazy(() => WalletScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WalletScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WalletScalarWhereInputSchema),z.lazy(() => WalletScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  owner_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  chain_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SessionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateManyMutationInputSchema),z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiration_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  wallet_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user_agent: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  locale: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ip_address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nonce: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const RoleUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoleUpdateWithoutUsersInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => RoleCreateWithoutUsersInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const RoleUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoleUpdateWithoutUsersInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export const RoleUpdateManyWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.RoleUpdateManyWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => RoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoleUpdateManyMutationInputSchema),z.lazy(() => RoleUncheckedUpdateManyWithoutUsersInputSchema) ]),
}).strict();

export const RoleScalarWhereInputSchema: z.ZodType<Prisma.RoleScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ConnectionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ConnectionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ConnectionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ConnectionUpdateWithoutUserInputSchema),z.lazy(() => ConnectionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ConnectionCreateWithoutUserInputSchema),z.lazy(() => ConnectionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ConnectionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ConnectionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ConnectionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ConnectionUpdateWithoutUserInputSchema),z.lazy(() => ConnectionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const ConnectionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ConnectionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ConnectionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ConnectionUpdateManyMutationInputSchema),z.lazy(() => ConnectionUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const ConnectionScalarWhereInputSchema: z.ZodType<Prisma.ConnectionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ConnectionScalarWhereInputSchema),z.lazy(() => ConnectionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConnectionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConnectionScalarWhereInputSchema),z.lazy(() => ConnectionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const PasswordUpsertWithoutUserInputSchema: z.ZodType<Prisma.PasswordUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => PasswordUpdateWithoutUserInputSchema),z.lazy(() => PasswordUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => PasswordCreateWithoutUserInputSchema),z.lazy(() => PasswordUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => PasswordWhereInputSchema).optional()
}).strict();

export const PasswordUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.PasswordUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => PasswordWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PasswordUpdateWithoutUserInputSchema),z.lazy(() => PasswordUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const PasswordUpdateWithoutUserInputSchema: z.ZodType<Prisma.PasswordUpdateWithoutUserInput> = z.object({
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PasswordUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.PasswordUncheckedUpdateWithoutUserInput> = z.object({
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateWithoutConnectionsInputSchema: z.ZodType<Prisma.UserCreateWithoutConnectionsInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),
  avatar_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  banner_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  username: z.string().max(64, { message: "too lengthy" }).optional().nullable(),
  description: z.string().max(512, { message: "too long" }).optional().nullable(),
  ens: z.string().optional().nullable(),
  status: z.string().optional(),
  email: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable(),
  collections: z.lazy(() => CollectionCreateNestedManyWithoutCreatorInputSchema).optional(),
  wallets: z.lazy(() => WalletCreateNestedManyWithoutOwnerInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutUsersInputSchema).optional(),
  password: z.lazy(() => PasswordCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutConnectionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutConnectionsInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),
  avatar_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  banner_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  username: z.string().max(64, { message: "too lengthy" }).optional().nullable(),
  description: z.string().max(512, { message: "too long" }).optional().nullable(),
  ens: z.string().optional().nullable(),
  status: z.string().optional(),
  email: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable(),
  collections: z.lazy(() => CollectionUncheckedCreateNestedManyWithoutCreatorInputSchema).optional(),
  wallets: z.lazy(() => WalletUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  password: z.lazy(() => PasswordUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutConnectionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutConnectionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutConnectionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutConnectionsInputSchema) ]),
}).strict();

export const UserUpsertWithoutConnectionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutConnectionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutConnectionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutConnectionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutConnectionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutConnectionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutConnectionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutConnectionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutConnectionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutConnectionsInputSchema) ]),
}).strict();

export const UserUpdateWithoutConnectionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutConnectionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banner_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string().max(64, { message: "too lengthy" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string().max(512, { message: "too long" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ens: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collections: z.lazy(() => CollectionUpdateManyWithoutCreatorNestedInputSchema).optional(),
  wallets: z.lazy(() => WalletUpdateManyWithoutOwnerNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutUsersNestedInputSchema).optional(),
  password: z.lazy(() => PasswordUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutConnectionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutConnectionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banner_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string().max(64, { message: "too lengthy" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string().max(512, { message: "too long" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ens: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collections: z.lazy(() => CollectionUncheckedUpdateManyWithoutCreatorNestedInputSchema).optional(),
  wallets: z.lazy(() => WalletUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  password: z.lazy(() => PasswordUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutPasswordInputSchema: z.ZodType<Prisma.UserCreateWithoutPasswordInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),
  avatar_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  banner_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  username: z.string().max(64, { message: "too lengthy" }).optional().nullable(),
  description: z.string().max(512, { message: "too long" }).optional().nullable(),
  ens: z.string().optional().nullable(),
  status: z.string().optional(),
  email: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable(),
  collections: z.lazy(() => CollectionCreateNestedManyWithoutCreatorInputSchema).optional(),
  wallets: z.lazy(() => WalletCreateNestedManyWithoutOwnerInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutUsersInputSchema).optional(),
  connections: z.lazy(() => ConnectionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutPasswordInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPasswordInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),
  avatar_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  banner_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  username: z.string().max(64, { message: "too lengthy" }).optional().nullable(),
  description: z.string().max(512, { message: "too long" }).optional().nullable(),
  ens: z.string().optional().nullable(),
  status: z.string().optional(),
  email: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable(),
  collections: z.lazy(() => CollectionUncheckedCreateNestedManyWithoutCreatorInputSchema).optional(),
  wallets: z.lazy(() => WalletUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  connections: z.lazy(() => ConnectionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutPasswordInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPasswordInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutPasswordInputSchema),z.lazy(() => UserUncheckedCreateWithoutPasswordInputSchema) ]),
}).strict();

export const UserUpsertWithoutPasswordInputSchema: z.ZodType<Prisma.UserUpsertWithoutPasswordInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutPasswordInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPasswordInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutPasswordInputSchema),z.lazy(() => UserUncheckedCreateWithoutPasswordInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutPasswordInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPasswordInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutPasswordInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPasswordInputSchema) ]),
}).strict();

export const UserUpdateWithoutPasswordInputSchema: z.ZodType<Prisma.UserUpdateWithoutPasswordInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banner_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string().max(64, { message: "too lengthy" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string().max(512, { message: "too long" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ens: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collections: z.lazy(() => CollectionUpdateManyWithoutCreatorNestedInputSchema).optional(),
  wallets: z.lazy(() => WalletUpdateManyWithoutOwnerNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutUsersNestedInputSchema).optional(),
  connections: z.lazy(() => ConnectionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutPasswordInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutPasswordInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banner_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string().max(64, { message: "too lengthy" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string().max(512, { message: "too long" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ens: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collections: z.lazy(() => CollectionUncheckedUpdateManyWithoutCreatorNestedInputSchema).optional(),
  wallets: z.lazy(() => WalletUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  connections: z.lazy(() => ConnectionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const WalletCreateWithoutChainInputSchema: z.ZodType<Prisma.WalletCreateWithoutChainInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutWalletsInputSchema),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutWalletInputSchema).optional()
}).strict();

export const WalletUncheckedCreateWithoutChainInputSchema: z.ZodType<Prisma.WalletUncheckedCreateWithoutChainInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string(),
  owner_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutWalletInputSchema).optional()
}).strict();

export const WalletCreateOrConnectWithoutChainInputSchema: z.ZodType<Prisma.WalletCreateOrConnectWithoutChainInput> = z.object({
  where: z.lazy(() => WalletWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WalletCreateWithoutChainInputSchema),z.lazy(() => WalletUncheckedCreateWithoutChainInputSchema) ]),
}).strict();

export const WalletUpsertWithWhereUniqueWithoutChainInputSchema: z.ZodType<Prisma.WalletUpsertWithWhereUniqueWithoutChainInput> = z.object({
  where: z.lazy(() => WalletWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WalletUpdateWithoutChainInputSchema),z.lazy(() => WalletUncheckedUpdateWithoutChainInputSchema) ]),
  create: z.union([ z.lazy(() => WalletCreateWithoutChainInputSchema),z.lazy(() => WalletUncheckedCreateWithoutChainInputSchema) ]),
}).strict();

export const WalletUpdateWithWhereUniqueWithoutChainInputSchema: z.ZodType<Prisma.WalletUpdateWithWhereUniqueWithoutChainInput> = z.object({
  where: z.lazy(() => WalletWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WalletUpdateWithoutChainInputSchema),z.lazy(() => WalletUncheckedUpdateWithoutChainInputSchema) ]),
}).strict();

export const WalletUpdateManyWithWhereWithoutChainInputSchema: z.ZodType<Prisma.WalletUpdateManyWithWhereWithoutChainInput> = z.object({
  where: z.lazy(() => WalletScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WalletUpdateManyMutationInputSchema),z.lazy(() => WalletUncheckedUpdateManyWithoutChainInputSchema) ]),
}).strict();

export const UserCreateWithoutWalletsInputSchema: z.ZodType<Prisma.UserCreateWithoutWalletsInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),
  avatar_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  banner_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  username: z.string().max(64, { message: "too lengthy" }).optional().nullable(),
  description: z.string().max(512, { message: "too long" }).optional().nullable(),
  ens: z.string().optional().nullable(),
  status: z.string().optional(),
  email: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable(),
  collections: z.lazy(() => CollectionCreateNestedManyWithoutCreatorInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutUsersInputSchema).optional(),
  connections: z.lazy(() => ConnectionCreateNestedManyWithoutUserInputSchema).optional(),
  password: z.lazy(() => PasswordCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutWalletsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutWalletsInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),
  avatar_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  banner_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  username: z.string().max(64, { message: "too lengthy" }).optional().nullable(),
  description: z.string().max(512, { message: "too long" }).optional().nullable(),
  ens: z.string().optional().nullable(),
  status: z.string().optional(),
  email: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable(),
  collections: z.lazy(() => CollectionUncheckedCreateNestedManyWithoutCreatorInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  connections: z.lazy(() => ConnectionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  password: z.lazy(() => PasswordUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutWalletsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutWalletsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutWalletsInputSchema),z.lazy(() => UserUncheckedCreateWithoutWalletsInputSchema) ]),
}).strict();

export const ChainCreateWithoutWalletInputSchema: z.ZodType<Prisma.ChainCreateWithoutWalletInput> = z.object({
  id: z.number().int(),
  slug: z.string(),
  name: z.string(),
  symbol: z.string(),
  is_testnet: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable()
}).strict();

export const ChainUncheckedCreateWithoutWalletInputSchema: z.ZodType<Prisma.ChainUncheckedCreateWithoutWalletInput> = z.object({
  id: z.number().int(),
  slug: z.string(),
  name: z.string(),
  symbol: z.string(),
  is_testnet: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable()
}).strict();

export const ChainCreateOrConnectWithoutWalletInputSchema: z.ZodType<Prisma.ChainCreateOrConnectWithoutWalletInput> = z.object({
  where: z.lazy(() => ChainWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChainCreateWithoutWalletInputSchema),z.lazy(() => ChainUncheckedCreateWithoutWalletInputSchema) ]),
}).strict();

export const SessionCreateWithoutWalletInputSchema: z.ZodType<Prisma.SessionCreateWithoutWalletInput> = z.object({
  id: z.string().cuid().optional(),
  expiration_date: z.coerce.date(),
  user_agent: z.string().optional(),
  locale: z.string().optional().nullable(),
  ip_address: z.string().optional().nullable(),
  nonce: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema)
}).strict();

export const SessionUncheckedCreateWithoutWalletInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutWalletInput> = z.object({
  id: z.string().cuid().optional(),
  expiration_date: z.coerce.date(),
  user_id: z.string(),
  user_agent: z.string().optional(),
  locale: z.string().optional().nullable(),
  ip_address: z.string().optional().nullable(),
  nonce: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const SessionCreateOrConnectWithoutWalletInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutWalletInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SessionCreateWithoutWalletInputSchema),z.lazy(() => SessionUncheckedCreateWithoutWalletInputSchema) ]),
}).strict();

export const UserUpsertWithoutWalletsInputSchema: z.ZodType<Prisma.UserUpsertWithoutWalletsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutWalletsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutWalletsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutWalletsInputSchema),z.lazy(() => UserUncheckedCreateWithoutWalletsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutWalletsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWalletsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutWalletsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutWalletsInputSchema) ]),
}).strict();

export const UserUpdateWithoutWalletsInputSchema: z.ZodType<Prisma.UserUpdateWithoutWalletsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banner_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string().max(64, { message: "too lengthy" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string().max(512, { message: "too long" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ens: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collections: z.lazy(() => CollectionUpdateManyWithoutCreatorNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutUsersNestedInputSchema).optional(),
  connections: z.lazy(() => ConnectionUpdateManyWithoutUserNestedInputSchema).optional(),
  password: z.lazy(() => PasswordUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutWalletsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutWalletsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banner_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string().max(64, { message: "too lengthy" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string().max(512, { message: "too long" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ens: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collections: z.lazy(() => CollectionUncheckedUpdateManyWithoutCreatorNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  connections: z.lazy(() => ConnectionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  password: z.lazy(() => PasswordUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const ChainUpsertWithoutWalletInputSchema: z.ZodType<Prisma.ChainUpsertWithoutWalletInput> = z.object({
  update: z.union([ z.lazy(() => ChainUpdateWithoutWalletInputSchema),z.lazy(() => ChainUncheckedUpdateWithoutWalletInputSchema) ]),
  create: z.union([ z.lazy(() => ChainCreateWithoutWalletInputSchema),z.lazy(() => ChainUncheckedCreateWithoutWalletInputSchema) ]),
  where: z.lazy(() => ChainWhereInputSchema).optional()
}).strict();

export const ChainUpdateToOneWithWhereWithoutWalletInputSchema: z.ZodType<Prisma.ChainUpdateToOneWithWhereWithoutWalletInput> = z.object({
  where: z.lazy(() => ChainWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ChainUpdateWithoutWalletInputSchema),z.lazy(() => ChainUncheckedUpdateWithoutWalletInputSchema) ]),
}).strict();

export const ChainUpdateWithoutWalletInputSchema: z.ZodType<Prisma.ChainUpdateWithoutWalletInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_testnet: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ChainUncheckedUpdateWithoutWalletInputSchema: z.ZodType<Prisma.ChainUncheckedUpdateWithoutWalletInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_testnet: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SessionUpsertWithWhereUniqueWithoutWalletInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutWalletInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SessionUpdateWithoutWalletInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutWalletInputSchema) ]),
  create: z.union([ z.lazy(() => SessionCreateWithoutWalletInputSchema),z.lazy(() => SessionUncheckedCreateWithoutWalletInputSchema) ]),
}).strict();

export const SessionUpdateWithWhereUniqueWithoutWalletInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutWalletInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateWithoutWalletInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutWalletInputSchema) ]),
}).strict();

export const SessionUpdateManyWithWhereWithoutWalletInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutWalletInput> = z.object({
  where: z.lazy(() => SessionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateManyMutationInputSchema),z.lazy(() => SessionUncheckedUpdateManyWithoutWalletInputSchema) ]),
}).strict();

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),
  avatar_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  banner_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  username: z.string().max(64, { message: "too lengthy" }).optional().nullable(),
  description: z.string().max(512, { message: "too long" }).optional().nullable(),
  ens: z.string().optional().nullable(),
  status: z.string().optional(),
  email: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable(),
  collections: z.lazy(() => CollectionCreateNestedManyWithoutCreatorInputSchema).optional(),
  wallets: z.lazy(() => WalletCreateNestedManyWithoutOwnerInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutUsersInputSchema).optional(),
  connections: z.lazy(() => ConnectionCreateNestedManyWithoutUserInputSchema).optional(),
  password: z.lazy(() => PasswordCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),
  avatar_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  banner_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  username: z.string().max(64, { message: "too lengthy" }).optional().nullable(),
  description: z.string().max(512, { message: "too long" }).optional().nullable(),
  ens: z.string().optional().nullable(),
  status: z.string().optional(),
  email: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable(),
  collections: z.lazy(() => CollectionUncheckedCreateNestedManyWithoutCreatorInputSchema).optional(),
  wallets: z.lazy(() => WalletUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  connections: z.lazy(() => ConnectionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  password: z.lazy(() => PasswordUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
}).strict();

export const WalletCreateWithoutSessionsInputSchema: z.ZodType<Prisma.WalletCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutWalletsInputSchema),
  chain: z.lazy(() => ChainCreateNestedOneWithoutWalletInputSchema)
}).strict();

export const WalletUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.WalletUncheckedCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string(),
  owner_id: z.string(),
  chain_id: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const WalletCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.WalletCreateOrConnectWithoutSessionsInput> = z.object({
  where: z.lazy(() => WalletWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WalletCreateWithoutSessionsInputSchema),z.lazy(() => WalletUncheckedCreateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banner_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string().max(64, { message: "too lengthy" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string().max(512, { message: "too long" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ens: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collections: z.lazy(() => CollectionUpdateManyWithoutCreatorNestedInputSchema).optional(),
  wallets: z.lazy(() => WalletUpdateManyWithoutOwnerNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutUsersNestedInputSchema).optional(),
  connections: z.lazy(() => ConnectionUpdateManyWithoutUserNestedInputSchema).optional(),
  password: z.lazy(() => PasswordUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banner_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string().max(64, { message: "too lengthy" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string().max(512, { message: "too long" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ens: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collections: z.lazy(() => CollectionUncheckedUpdateManyWithoutCreatorNestedInputSchema).optional(),
  wallets: z.lazy(() => WalletUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  connections: z.lazy(() => ConnectionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  password: z.lazy(() => PasswordUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const WalletUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.WalletUpsertWithoutSessionsInput> = z.object({
  update: z.union([ z.lazy(() => WalletUpdateWithoutSessionsInputSchema),z.lazy(() => WalletUncheckedUpdateWithoutSessionsInputSchema) ]),
  create: z.union([ z.lazy(() => WalletCreateWithoutSessionsInputSchema),z.lazy(() => WalletUncheckedCreateWithoutSessionsInputSchema) ]),
  where: z.lazy(() => WalletWhereInputSchema).optional()
}).strict();

export const WalletUpdateToOneWithWhereWithoutSessionsInputSchema: z.ZodType<Prisma.WalletUpdateToOneWithWhereWithoutSessionsInput> = z.object({
  where: z.lazy(() => WalletWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => WalletUpdateWithoutSessionsInputSchema),z.lazy(() => WalletUncheckedUpdateWithoutSessionsInputSchema) ]),
}).strict();

export const WalletUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.WalletUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutWalletsNestedInputSchema).optional(),
  chain: z.lazy(() => ChainUpdateOneRequiredWithoutWalletNestedInputSchema).optional()
}).strict();

export const WalletUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.WalletUncheckedUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  chain_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleCreateWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleCreateWithoutPermissionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutRolesInputSchema).optional()
}).strict();

export const RoleUncheckedCreateWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutPermissionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutRolesInputSchema).optional()
}).strict();

export const RoleCreateOrConnectWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutPermissionsInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleCreateWithoutPermissionsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputSchema) ]),
}).strict();

export const RoleUpsertWithWhereUniqueWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutPermissionsInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoleUpdateWithoutPermissionsInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutPermissionsInputSchema) ]),
  create: z.union([ z.lazy(() => RoleCreateWithoutPermissionsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputSchema) ]),
}).strict();

export const RoleUpdateWithWhereUniqueWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutPermissionsInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoleUpdateWithoutPermissionsInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutPermissionsInputSchema) ]),
}).strict();

export const RoleUpdateManyWithWhereWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleUpdateManyWithWhereWithoutPermissionsInput> = z.object({
  where: z.lazy(() => RoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoleUpdateManyMutationInputSchema),z.lazy(() => RoleUncheckedUpdateManyWithoutPermissionsInputSchema) ]),
}).strict();

export const UserCreateWithoutRolesInputSchema: z.ZodType<Prisma.UserCreateWithoutRolesInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),
  avatar_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  banner_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  username: z.string().max(64, { message: "too lengthy" }).optional().nullable(),
  description: z.string().max(512, { message: "too long" }).optional().nullable(),
  ens: z.string().optional().nullable(),
  status: z.string().optional(),
  email: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable(),
  collections: z.lazy(() => CollectionCreateNestedManyWithoutCreatorInputSchema).optional(),
  wallets: z.lazy(() => WalletCreateNestedManyWithoutOwnerInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  connections: z.lazy(() => ConnectionCreateNestedManyWithoutUserInputSchema).optional(),
  password: z.lazy(() => PasswordCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutRolesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutRolesInput> = z.object({
  id: z.string().cuid().optional(),
  address: z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),
  avatar_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  banner_uri: z.string().url({ message: "Invalid url" }).optional().nullable(),
  username: z.string().max(64, { message: "too lengthy" }).optional().nullable(),
  description: z.string().max(512, { message: "too long" }).optional().nullable(),
  ens: z.string().optional().nullable(),
  status: z.string().optional(),
  email: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional().nullable(),
  collections: z.lazy(() => CollectionUncheckedCreateNestedManyWithoutCreatorInputSchema).optional(),
  wallets: z.lazy(() => WalletUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  connections: z.lazy(() => ConnectionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  password: z.lazy(() => PasswordUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutRolesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRolesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutRolesInputSchema) ]),
}).strict();

export const PermissionCreateWithoutRolesInputSchema: z.ZodType<Prisma.PermissionCreateWithoutRolesInput> = z.object({
  id: z.string().cuid().optional(),
  action: z.string(),
  entity: z.string(),
  access: z.string(),
  description: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const PermissionUncheckedCreateWithoutRolesInputSchema: z.ZodType<Prisma.PermissionUncheckedCreateWithoutRolesInput> = z.object({
  id: z.string().cuid().optional(),
  action: z.string(),
  entity: z.string(),
  access: z.string(),
  description: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const PermissionCreateOrConnectWithoutRolesInputSchema: z.ZodType<Prisma.PermissionCreateOrConnectWithoutRolesInput> = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PermissionCreateWithoutRolesInputSchema),z.lazy(() => PermissionUncheckedCreateWithoutRolesInputSchema) ]),
}).strict();

export const UserUpsertWithWhereUniqueWithoutRolesInputSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutRolesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserUpdateWithoutRolesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRolesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutRolesInputSchema) ]),
}).strict();

export const UserUpdateWithWhereUniqueWithoutRolesInputSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutRolesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserUpdateWithoutRolesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRolesInputSchema) ]),
}).strict();

export const UserUpdateManyWithWhereWithoutRolesInputSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutRolesInput> = z.object({
  where: z.lazy(() => UserScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserUpdateManyMutationInputSchema),z.lazy(() => UserUncheckedUpdateManyWithoutRolesInputSchema) ]),
}).strict();

export const UserScalarWhereInputSchema: z.ZodType<Prisma.UserScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  avatar_uri: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  banner_uri: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  username: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ens: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const PermissionUpsertWithWhereUniqueWithoutRolesInputSchema: z.ZodType<Prisma.PermissionUpsertWithWhereUniqueWithoutRolesInput> = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PermissionUpdateWithoutRolesInputSchema),z.lazy(() => PermissionUncheckedUpdateWithoutRolesInputSchema) ]),
  create: z.union([ z.lazy(() => PermissionCreateWithoutRolesInputSchema),z.lazy(() => PermissionUncheckedCreateWithoutRolesInputSchema) ]),
}).strict();

export const PermissionUpdateWithWhereUniqueWithoutRolesInputSchema: z.ZodType<Prisma.PermissionUpdateWithWhereUniqueWithoutRolesInput> = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PermissionUpdateWithoutRolesInputSchema),z.lazy(() => PermissionUncheckedUpdateWithoutRolesInputSchema) ]),
}).strict();

export const PermissionUpdateManyWithWhereWithoutRolesInputSchema: z.ZodType<Prisma.PermissionUpdateManyWithWhereWithoutRolesInput> = z.object({
  where: z.lazy(() => PermissionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PermissionUpdateManyMutationInputSchema),z.lazy(() => PermissionUncheckedUpdateManyWithoutRolesInputSchema) ]),
}).strict();

export const PermissionScalarWhereInputSchema: z.ZodType<Prisma.PermissionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PermissionScalarWhereInputSchema),z.lazy(() => PermissionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PermissionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PermissionScalarWhereInputSchema),z.lazy(() => PermissionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  action: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  entity: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  access: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const NftUpdateWithoutCollectionInputSchema: z.ZodType<Prisma.NftUpdateWithoutCollectionInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attributes: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_minted: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  contract_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dna: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  edition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  network: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  old_image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  old_token_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_of: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_id_int: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  token_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  open_rarity: z.lazy(() => OpenRarityUpdateOneWithoutNftNestedInputSchema).optional()
}).strict();

export const NftUncheckedUpdateWithoutCollectionInputSchema: z.ZodType<Prisma.NftUncheckedUpdateWithoutCollectionInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attributes: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_minted: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  contract_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dna: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  edition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  network: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  old_image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  old_token_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_of: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_id_int: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  token_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  open_rarity: z.lazy(() => OpenRarityUncheckedUpdateOneWithoutNftNestedInputSchema).optional()
}).strict();

export const NftUncheckedUpdateManyWithoutCollectionInputSchema: z.ZodType<Prisma.NftUncheckedUpdateManyWithoutCollectionInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attributes: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  block_minted: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  contract_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dna: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  edition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  network: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  old_image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  old_token_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_of: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_id_int: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  token_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CollectionUpdateWithoutCreatorInputSchema: z.ZodType<Prisma.CollectionUpdateWithoutCreatorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  max_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  max_batch_size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_hidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  sort_order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  is_mint_active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_archetype: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_pending: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  discounts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_alt_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  super_affiliate_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contract_version: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mint_info: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trait_counts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  banner_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hero_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  twitter: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discord: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  num_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  num_owners: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  last_refreshed: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mint_data: z.lazy(() => MintDataUpdateOneWithoutCollectionNestedInputSchema).optional(),
  nfts: z.lazy(() => NftUpdateManyWithoutCollectionNestedInputSchema).optional()
}).strict();

export const CollectionUncheckedUpdateWithoutCreatorInputSchema: z.ZodType<Prisma.CollectionUncheckedUpdateWithoutCreatorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  max_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  max_batch_size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_hidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  sort_order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  is_mint_active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_archetype: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_pending: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  discounts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_alt_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  super_affiliate_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contract_version: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mint_info: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trait_counts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  banner_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hero_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  twitter: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discord: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  num_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  num_owners: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  last_refreshed: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mint_data: z.lazy(() => MintDataUncheckedUpdateOneWithoutCollectionNestedInputSchema).optional(),
  nfts: z.lazy(() => NftUncheckedUpdateManyWithoutCollectionNestedInputSchema).optional()
}).strict();

export const CollectionUncheckedUpdateManyWithoutCreatorInputSchema: z.ZodType<Prisma.CollectionUncheckedUpdateManyWithoutCreatorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  max_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  max_batch_size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_hidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  sort_order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  is_mint_active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_archetype: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_pending: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  discounts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_alt_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  super_affiliate_payout: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contract_version: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mint_info: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token_address_lowercase: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trait_counts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  banner_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hero_uri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  twitter: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discord: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  num_items: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  num_owners: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  last_refreshed: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WalletUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.WalletUpdateWithoutOwnerInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  chain: z.lazy(() => ChainUpdateOneRequiredWithoutWalletNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutWalletNestedInputSchema).optional()
}).strict();

export const WalletUncheckedUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.WalletUncheckedUpdateWithoutOwnerInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  chain_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutWalletNestedInputSchema).optional()
}).strict();

export const WalletUncheckedUpdateManyWithoutOwnerInputSchema: z.ZodType<Prisma.WalletUncheckedUpdateManyWithoutOwnerInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  chain_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiration_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_agent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ip_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nonce: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  wallet: z.lazy(() => WalletUpdateOneRequiredWithoutSessionsNestedInputSchema).optional()
}).strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiration_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  wallet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_agent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ip_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nonce: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiration_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  wallet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_agent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ip_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nonce: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleUpdateWithoutUsersInputSchema: z.ZodType<Prisma.RoleUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  permissions: z.lazy(() => PermissionUpdateManyWithoutRolesNestedInputSchema).optional()
}).strict();

export const RoleUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  permissions: z.lazy(() => PermissionUncheckedUpdateManyWithoutRolesNestedInputSchema).optional()
}).strict();

export const RoleUncheckedUpdateManyWithoutUsersInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutUsersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ConnectionUpdateWithoutUserInputSchema: z.ZodType<Prisma.ConnectionUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ConnectionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.ConnectionUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ConnectionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.ConnectionUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WalletUpdateWithoutChainInputSchema: z.ZodType<Prisma.WalletUpdateWithoutChainInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutWalletsNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutWalletNestedInputSchema).optional()
}).strict();

export const WalletUncheckedUpdateWithoutChainInputSchema: z.ZodType<Prisma.WalletUncheckedUpdateWithoutChainInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutWalletNestedInputSchema).optional()
}).strict();

export const WalletUncheckedUpdateManyWithoutChainInputSchema: z.ZodType<Prisma.WalletUncheckedUpdateManyWithoutChainInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUpdateWithoutWalletInputSchema: z.ZodType<Prisma.SessionUpdateWithoutWalletInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiration_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_agent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ip_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nonce: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema).optional()
}).strict();

export const SessionUncheckedUpdateWithoutWalletInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutWalletInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiration_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_agent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ip_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nonce: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutWalletInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutWalletInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiration_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_agent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ip_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nonce: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleUpdateWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleUpdateWithoutPermissionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateManyWithoutRolesNestedInputSchema).optional()
}).strict();

export const RoleUncheckedUpdateWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutPermissionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutRolesNestedInputSchema).optional()
}).strict();

export const RoleUncheckedUpdateManyWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutPermissionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUpdateWithoutRolesInputSchema: z.ZodType<Prisma.UserUpdateWithoutRolesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banner_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string().max(64, { message: "too lengthy" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string().max(512, { message: "too long" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ens: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collections: z.lazy(() => CollectionUpdateManyWithoutCreatorNestedInputSchema).optional(),
  wallets: z.lazy(() => WalletUpdateManyWithoutOwnerNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  connections: z.lazy(() => ConnectionUpdateManyWithoutUserNestedInputSchema).optional(),
  password: z.lazy(() => PasswordUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutRolesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutRolesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banner_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string().max(64, { message: "too lengthy" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string().max(512, { message: "too long" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ens: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collections: z.lazy(() => CollectionUncheckedUpdateManyWithoutCreatorNestedInputSchema).optional(),
  wallets: z.lazy(() => WalletUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  connections: z.lazy(() => ConnectionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  password: z.lazy(() => PasswordUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateManyWithoutRolesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutRolesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string().refine((val) => getAddress(val), { message: 'is not a valid Ethereum address' }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatar_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banner_uri: z.union([ z.string().url({ message: "Invalid url" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string().max(64, { message: "too lengthy" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string().max(512, { message: "too long" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ens: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PermissionUpdateWithoutRolesInputSchema: z.ZodType<Prisma.PermissionUpdateWithoutRolesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  action: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  entity: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  access: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PermissionUncheckedUpdateWithoutRolesInputSchema: z.ZodType<Prisma.PermissionUncheckedUpdateWithoutRolesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  action: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  entity: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  access: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PermissionUncheckedUpdateManyWithoutRolesInputSchema: z.ZodType<Prisma.PermissionUncheckedUpdateManyWithoutRolesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  action: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  entity: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  access: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const CollectionFindFirstArgsSchema: z.ZodType<Prisma.CollectionFindFirstArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  where: CollectionWhereInputSchema.optional(),
  orderBy: z.union([ CollectionOrderByWithRelationInputSchema.array(),CollectionOrderByWithRelationInputSchema ]).optional(),
  cursor: CollectionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CollectionScalarFieldEnumSchema,CollectionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CollectionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CollectionFindFirstOrThrowArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  where: CollectionWhereInputSchema.optional(),
  orderBy: z.union([ CollectionOrderByWithRelationInputSchema.array(),CollectionOrderByWithRelationInputSchema ]).optional(),
  cursor: CollectionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CollectionScalarFieldEnumSchema,CollectionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CollectionFindManyArgsSchema: z.ZodType<Prisma.CollectionFindManyArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  where: CollectionWhereInputSchema.optional(),
  orderBy: z.union([ CollectionOrderByWithRelationInputSchema.array(),CollectionOrderByWithRelationInputSchema ]).optional(),
  cursor: CollectionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CollectionScalarFieldEnumSchema,CollectionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CollectionAggregateArgsSchema: z.ZodType<Prisma.CollectionAggregateArgs> = z.object({
  where: CollectionWhereInputSchema.optional(),
  orderBy: z.union([ CollectionOrderByWithRelationInputSchema.array(),CollectionOrderByWithRelationInputSchema ]).optional(),
  cursor: CollectionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CollectionGroupByArgsSchema: z.ZodType<Prisma.CollectionGroupByArgs> = z.object({
  where: CollectionWhereInputSchema.optional(),
  orderBy: z.union([ CollectionOrderByWithAggregationInputSchema.array(),CollectionOrderByWithAggregationInputSchema ]).optional(),
  by: CollectionScalarFieldEnumSchema.array(),
  having: CollectionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CollectionFindUniqueArgsSchema: z.ZodType<Prisma.CollectionFindUniqueArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  where: CollectionWhereUniqueInputSchema,
}).strict() ;

export const CollectionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CollectionFindUniqueOrThrowArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  where: CollectionWhereUniqueInputSchema,
}).strict() ;

export const NftFindFirstArgsSchema: z.ZodType<Prisma.NftFindFirstArgs> = z.object({
  select: NftSelectSchema.optional(),
  include: NftIncludeSchema.optional(),
  where: NftWhereInputSchema.optional(),
  orderBy: z.union([ NftOrderByWithRelationInputSchema.array(),NftOrderByWithRelationInputSchema ]).optional(),
  cursor: NftWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NftScalarFieldEnumSchema,NftScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NftFindFirstOrThrowArgsSchema: z.ZodType<Prisma.NftFindFirstOrThrowArgs> = z.object({
  select: NftSelectSchema.optional(),
  include: NftIncludeSchema.optional(),
  where: NftWhereInputSchema.optional(),
  orderBy: z.union([ NftOrderByWithRelationInputSchema.array(),NftOrderByWithRelationInputSchema ]).optional(),
  cursor: NftWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NftScalarFieldEnumSchema,NftScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NftFindManyArgsSchema: z.ZodType<Prisma.NftFindManyArgs> = z.object({
  select: NftSelectSchema.optional(),
  include: NftIncludeSchema.optional(),
  where: NftWhereInputSchema.optional(),
  orderBy: z.union([ NftOrderByWithRelationInputSchema.array(),NftOrderByWithRelationInputSchema ]).optional(),
  cursor: NftWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NftScalarFieldEnumSchema,NftScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NftAggregateArgsSchema: z.ZodType<Prisma.NftAggregateArgs> = z.object({
  where: NftWhereInputSchema.optional(),
  orderBy: z.union([ NftOrderByWithRelationInputSchema.array(),NftOrderByWithRelationInputSchema ]).optional(),
  cursor: NftWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NftGroupByArgsSchema: z.ZodType<Prisma.NftGroupByArgs> = z.object({
  where: NftWhereInputSchema.optional(),
  orderBy: z.union([ NftOrderByWithAggregationInputSchema.array(),NftOrderByWithAggregationInputSchema ]).optional(),
  by: NftScalarFieldEnumSchema.array(),
  having: NftScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NftFindUniqueArgsSchema: z.ZodType<Prisma.NftFindUniqueArgs> = z.object({
  select: NftSelectSchema.optional(),
  include: NftIncludeSchema.optional(),
  where: NftWhereUniqueInputSchema,
}).strict() ;

export const NftFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.NftFindUniqueOrThrowArgs> = z.object({
  select: NftSelectSchema.optional(),
  include: NftIncludeSchema.optional(),
  where: NftWhereUniqueInputSchema,
}).strict() ;

export const MintDataFindFirstArgsSchema: z.ZodType<Prisma.MintDataFindFirstArgs> = z.object({
  select: MintDataSelectSchema.optional(),
  include: MintDataIncludeSchema.optional(),
  where: MintDataWhereInputSchema.optional(),
  orderBy: z.union([ MintDataOrderByWithRelationInputSchema.array(),MintDataOrderByWithRelationInputSchema ]).optional(),
  cursor: MintDataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MintDataScalarFieldEnumSchema,MintDataScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MintDataFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MintDataFindFirstOrThrowArgs> = z.object({
  select: MintDataSelectSchema.optional(),
  include: MintDataIncludeSchema.optional(),
  where: MintDataWhereInputSchema.optional(),
  orderBy: z.union([ MintDataOrderByWithRelationInputSchema.array(),MintDataOrderByWithRelationInputSchema ]).optional(),
  cursor: MintDataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MintDataScalarFieldEnumSchema,MintDataScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MintDataFindManyArgsSchema: z.ZodType<Prisma.MintDataFindManyArgs> = z.object({
  select: MintDataSelectSchema.optional(),
  include: MintDataIncludeSchema.optional(),
  where: MintDataWhereInputSchema.optional(),
  orderBy: z.union([ MintDataOrderByWithRelationInputSchema.array(),MintDataOrderByWithRelationInputSchema ]).optional(),
  cursor: MintDataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MintDataScalarFieldEnumSchema,MintDataScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MintDataAggregateArgsSchema: z.ZodType<Prisma.MintDataAggregateArgs> = z.object({
  where: MintDataWhereInputSchema.optional(),
  orderBy: z.union([ MintDataOrderByWithRelationInputSchema.array(),MintDataOrderByWithRelationInputSchema ]).optional(),
  cursor: MintDataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MintDataGroupByArgsSchema: z.ZodType<Prisma.MintDataGroupByArgs> = z.object({
  where: MintDataWhereInputSchema.optional(),
  orderBy: z.union([ MintDataOrderByWithAggregationInputSchema.array(),MintDataOrderByWithAggregationInputSchema ]).optional(),
  by: MintDataScalarFieldEnumSchema.array(),
  having: MintDataScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MintDataFindUniqueArgsSchema: z.ZodType<Prisma.MintDataFindUniqueArgs> = z.object({
  select: MintDataSelectSchema.optional(),
  include: MintDataIncludeSchema.optional(),
  where: MintDataWhereUniqueInputSchema,
}).strict() ;

export const MintDataFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MintDataFindUniqueOrThrowArgs> = z.object({
  select: MintDataSelectSchema.optional(),
  include: MintDataIncludeSchema.optional(),
  where: MintDataWhereUniqueInputSchema,
}).strict() ;

export const OpenRarityFindFirstArgsSchema: z.ZodType<Prisma.OpenRarityFindFirstArgs> = z.object({
  select: OpenRaritySelectSchema.optional(),
  include: OpenRarityIncludeSchema.optional(),
  where: OpenRarityWhereInputSchema.optional(),
  orderBy: z.union([ OpenRarityOrderByWithRelationInputSchema.array(),OpenRarityOrderByWithRelationInputSchema ]).optional(),
  cursor: OpenRarityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OpenRarityScalarFieldEnumSchema,OpenRarityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OpenRarityFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OpenRarityFindFirstOrThrowArgs> = z.object({
  select: OpenRaritySelectSchema.optional(),
  include: OpenRarityIncludeSchema.optional(),
  where: OpenRarityWhereInputSchema.optional(),
  orderBy: z.union([ OpenRarityOrderByWithRelationInputSchema.array(),OpenRarityOrderByWithRelationInputSchema ]).optional(),
  cursor: OpenRarityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OpenRarityScalarFieldEnumSchema,OpenRarityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OpenRarityFindManyArgsSchema: z.ZodType<Prisma.OpenRarityFindManyArgs> = z.object({
  select: OpenRaritySelectSchema.optional(),
  include: OpenRarityIncludeSchema.optional(),
  where: OpenRarityWhereInputSchema.optional(),
  orderBy: z.union([ OpenRarityOrderByWithRelationInputSchema.array(),OpenRarityOrderByWithRelationInputSchema ]).optional(),
  cursor: OpenRarityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OpenRarityScalarFieldEnumSchema,OpenRarityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OpenRarityAggregateArgsSchema: z.ZodType<Prisma.OpenRarityAggregateArgs> = z.object({
  where: OpenRarityWhereInputSchema.optional(),
  orderBy: z.union([ OpenRarityOrderByWithRelationInputSchema.array(),OpenRarityOrderByWithRelationInputSchema ]).optional(),
  cursor: OpenRarityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const OpenRarityGroupByArgsSchema: z.ZodType<Prisma.OpenRarityGroupByArgs> = z.object({
  where: OpenRarityWhereInputSchema.optional(),
  orderBy: z.union([ OpenRarityOrderByWithAggregationInputSchema.array(),OpenRarityOrderByWithAggregationInputSchema ]).optional(),
  by: OpenRarityScalarFieldEnumSchema.array(),
  having: OpenRarityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const OpenRarityFindUniqueArgsSchema: z.ZodType<Prisma.OpenRarityFindUniqueArgs> = z.object({
  select: OpenRaritySelectSchema.optional(),
  include: OpenRarityIncludeSchema.optional(),
  where: OpenRarityWhereUniqueInputSchema,
}).strict() ;

export const OpenRarityFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OpenRarityFindUniqueOrThrowArgs> = z.object({
  select: OpenRaritySelectSchema.optional(),
  include: OpenRarityIncludeSchema.optional(),
  where: OpenRarityWhereUniqueInputSchema,
}).strict() ;

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const ConnectionFindFirstArgsSchema: z.ZodType<Prisma.ConnectionFindFirstArgs> = z.object({
  select: ConnectionSelectSchema.optional(),
  include: ConnectionIncludeSchema.optional(),
  where: ConnectionWhereInputSchema.optional(),
  orderBy: z.union([ ConnectionOrderByWithRelationInputSchema.array(),ConnectionOrderByWithRelationInputSchema ]).optional(),
  cursor: ConnectionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ConnectionScalarFieldEnumSchema,ConnectionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ConnectionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ConnectionFindFirstOrThrowArgs> = z.object({
  select: ConnectionSelectSchema.optional(),
  include: ConnectionIncludeSchema.optional(),
  where: ConnectionWhereInputSchema.optional(),
  orderBy: z.union([ ConnectionOrderByWithRelationInputSchema.array(),ConnectionOrderByWithRelationInputSchema ]).optional(),
  cursor: ConnectionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ConnectionScalarFieldEnumSchema,ConnectionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ConnectionFindManyArgsSchema: z.ZodType<Prisma.ConnectionFindManyArgs> = z.object({
  select: ConnectionSelectSchema.optional(),
  include: ConnectionIncludeSchema.optional(),
  where: ConnectionWhereInputSchema.optional(),
  orderBy: z.union([ ConnectionOrderByWithRelationInputSchema.array(),ConnectionOrderByWithRelationInputSchema ]).optional(),
  cursor: ConnectionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ConnectionScalarFieldEnumSchema,ConnectionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ConnectionAggregateArgsSchema: z.ZodType<Prisma.ConnectionAggregateArgs> = z.object({
  where: ConnectionWhereInputSchema.optional(),
  orderBy: z.union([ ConnectionOrderByWithRelationInputSchema.array(),ConnectionOrderByWithRelationInputSchema ]).optional(),
  cursor: ConnectionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ConnectionGroupByArgsSchema: z.ZodType<Prisma.ConnectionGroupByArgs> = z.object({
  where: ConnectionWhereInputSchema.optional(),
  orderBy: z.union([ ConnectionOrderByWithAggregationInputSchema.array(),ConnectionOrderByWithAggregationInputSchema ]).optional(),
  by: ConnectionScalarFieldEnumSchema.array(),
  having: ConnectionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ConnectionFindUniqueArgsSchema: z.ZodType<Prisma.ConnectionFindUniqueArgs> = z.object({
  select: ConnectionSelectSchema.optional(),
  include: ConnectionIncludeSchema.optional(),
  where: ConnectionWhereUniqueInputSchema,
}).strict() ;

export const ConnectionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ConnectionFindUniqueOrThrowArgs> = z.object({
  select: ConnectionSelectSchema.optional(),
  include: ConnectionIncludeSchema.optional(),
  where: ConnectionWhereUniqueInputSchema,
}).strict() ;

export const PasswordFindFirstArgsSchema: z.ZodType<Prisma.PasswordFindFirstArgs> = z.object({
  select: PasswordSelectSchema.optional(),
  include: PasswordIncludeSchema.optional(),
  where: PasswordWhereInputSchema.optional(),
  orderBy: z.union([ PasswordOrderByWithRelationInputSchema.array(),PasswordOrderByWithRelationInputSchema ]).optional(),
  cursor: PasswordWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PasswordScalarFieldEnumSchema,PasswordScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PasswordFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PasswordFindFirstOrThrowArgs> = z.object({
  select: PasswordSelectSchema.optional(),
  include: PasswordIncludeSchema.optional(),
  where: PasswordWhereInputSchema.optional(),
  orderBy: z.union([ PasswordOrderByWithRelationInputSchema.array(),PasswordOrderByWithRelationInputSchema ]).optional(),
  cursor: PasswordWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PasswordScalarFieldEnumSchema,PasswordScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PasswordFindManyArgsSchema: z.ZodType<Prisma.PasswordFindManyArgs> = z.object({
  select: PasswordSelectSchema.optional(),
  include: PasswordIncludeSchema.optional(),
  where: PasswordWhereInputSchema.optional(),
  orderBy: z.union([ PasswordOrderByWithRelationInputSchema.array(),PasswordOrderByWithRelationInputSchema ]).optional(),
  cursor: PasswordWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PasswordScalarFieldEnumSchema,PasswordScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PasswordAggregateArgsSchema: z.ZodType<Prisma.PasswordAggregateArgs> = z.object({
  where: PasswordWhereInputSchema.optional(),
  orderBy: z.union([ PasswordOrderByWithRelationInputSchema.array(),PasswordOrderByWithRelationInputSchema ]).optional(),
  cursor: PasswordWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PasswordGroupByArgsSchema: z.ZodType<Prisma.PasswordGroupByArgs> = z.object({
  where: PasswordWhereInputSchema.optional(),
  orderBy: z.union([ PasswordOrderByWithAggregationInputSchema.array(),PasswordOrderByWithAggregationInputSchema ]).optional(),
  by: PasswordScalarFieldEnumSchema.array(),
  having: PasswordScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PasswordFindUniqueArgsSchema: z.ZodType<Prisma.PasswordFindUniqueArgs> = z.object({
  select: PasswordSelectSchema.optional(),
  include: PasswordIncludeSchema.optional(),
  where: PasswordWhereUniqueInputSchema,
}).strict() ;

export const PasswordFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PasswordFindUniqueOrThrowArgs> = z.object({
  select: PasswordSelectSchema.optional(),
  include: PasswordIncludeSchema.optional(),
  where: PasswordWhereUniqueInputSchema,
}).strict() ;

export const ChainFindFirstArgsSchema: z.ZodType<Prisma.ChainFindFirstArgs> = z.object({
  select: ChainSelectSchema.optional(),
  include: ChainIncludeSchema.optional(),
  where: ChainWhereInputSchema.optional(),
  orderBy: z.union([ ChainOrderByWithRelationInputSchema.array(),ChainOrderByWithRelationInputSchema ]).optional(),
  cursor: ChainWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChainScalarFieldEnumSchema,ChainScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChainFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ChainFindFirstOrThrowArgs> = z.object({
  select: ChainSelectSchema.optional(),
  include: ChainIncludeSchema.optional(),
  where: ChainWhereInputSchema.optional(),
  orderBy: z.union([ ChainOrderByWithRelationInputSchema.array(),ChainOrderByWithRelationInputSchema ]).optional(),
  cursor: ChainWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChainScalarFieldEnumSchema,ChainScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChainFindManyArgsSchema: z.ZodType<Prisma.ChainFindManyArgs> = z.object({
  select: ChainSelectSchema.optional(),
  include: ChainIncludeSchema.optional(),
  where: ChainWhereInputSchema.optional(),
  orderBy: z.union([ ChainOrderByWithRelationInputSchema.array(),ChainOrderByWithRelationInputSchema ]).optional(),
  cursor: ChainWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChainScalarFieldEnumSchema,ChainScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChainAggregateArgsSchema: z.ZodType<Prisma.ChainAggregateArgs> = z.object({
  where: ChainWhereInputSchema.optional(),
  orderBy: z.union([ ChainOrderByWithRelationInputSchema.array(),ChainOrderByWithRelationInputSchema ]).optional(),
  cursor: ChainWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ChainGroupByArgsSchema: z.ZodType<Prisma.ChainGroupByArgs> = z.object({
  where: ChainWhereInputSchema.optional(),
  orderBy: z.union([ ChainOrderByWithAggregationInputSchema.array(),ChainOrderByWithAggregationInputSchema ]).optional(),
  by: ChainScalarFieldEnumSchema.array(),
  having: ChainScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ChainFindUniqueArgsSchema: z.ZodType<Prisma.ChainFindUniqueArgs> = z.object({
  select: ChainSelectSchema.optional(),
  include: ChainIncludeSchema.optional(),
  where: ChainWhereUniqueInputSchema,
}).strict() ;

export const ChainFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ChainFindUniqueOrThrowArgs> = z.object({
  select: ChainSelectSchema.optional(),
  include: ChainIncludeSchema.optional(),
  where: ChainWhereUniqueInputSchema,
}).strict() ;

export const WalletFindFirstArgsSchema: z.ZodType<Prisma.WalletFindFirstArgs> = z.object({
  select: WalletSelectSchema.optional(),
  include: WalletIncludeSchema.optional(),
  where: WalletWhereInputSchema.optional(),
  orderBy: z.union([ WalletOrderByWithRelationInputSchema.array(),WalletOrderByWithRelationInputSchema ]).optional(),
  cursor: WalletWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WalletScalarFieldEnumSchema,WalletScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const WalletFindFirstOrThrowArgsSchema: z.ZodType<Prisma.WalletFindFirstOrThrowArgs> = z.object({
  select: WalletSelectSchema.optional(),
  include: WalletIncludeSchema.optional(),
  where: WalletWhereInputSchema.optional(),
  orderBy: z.union([ WalletOrderByWithRelationInputSchema.array(),WalletOrderByWithRelationInputSchema ]).optional(),
  cursor: WalletWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WalletScalarFieldEnumSchema,WalletScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const WalletFindManyArgsSchema: z.ZodType<Prisma.WalletFindManyArgs> = z.object({
  select: WalletSelectSchema.optional(),
  include: WalletIncludeSchema.optional(),
  where: WalletWhereInputSchema.optional(),
  orderBy: z.union([ WalletOrderByWithRelationInputSchema.array(),WalletOrderByWithRelationInputSchema ]).optional(),
  cursor: WalletWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WalletScalarFieldEnumSchema,WalletScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const WalletAggregateArgsSchema: z.ZodType<Prisma.WalletAggregateArgs> = z.object({
  where: WalletWhereInputSchema.optional(),
  orderBy: z.union([ WalletOrderByWithRelationInputSchema.array(),WalletOrderByWithRelationInputSchema ]).optional(),
  cursor: WalletWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const WalletGroupByArgsSchema: z.ZodType<Prisma.WalletGroupByArgs> = z.object({
  where: WalletWhereInputSchema.optional(),
  orderBy: z.union([ WalletOrderByWithAggregationInputSchema.array(),WalletOrderByWithAggregationInputSchema ]).optional(),
  by: WalletScalarFieldEnumSchema.array(),
  having: WalletScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const WalletFindUniqueArgsSchema: z.ZodType<Prisma.WalletFindUniqueArgs> = z.object({
  select: WalletSelectSchema.optional(),
  include: WalletIncludeSchema.optional(),
  where: WalletWhereUniqueInputSchema,
}).strict() ;

export const WalletFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.WalletFindUniqueOrThrowArgs> = z.object({
  select: WalletSelectSchema.optional(),
  include: WalletIncludeSchema.optional(),
  where: WalletWhereUniqueInputSchema,
}).strict() ;

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithAggregationInputSchema.array(),SessionOrderByWithAggregationInputSchema ]).optional(),
  by: SessionScalarFieldEnumSchema.array(),
  having: SessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const PermissionFindFirstArgsSchema: z.ZodType<Prisma.PermissionFindFirstArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  where: PermissionWhereInputSchema.optional(),
  orderBy: z.union([ PermissionOrderByWithRelationInputSchema.array(),PermissionOrderByWithRelationInputSchema ]).optional(),
  cursor: PermissionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PermissionScalarFieldEnumSchema,PermissionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PermissionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PermissionFindFirstOrThrowArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  where: PermissionWhereInputSchema.optional(),
  orderBy: z.union([ PermissionOrderByWithRelationInputSchema.array(),PermissionOrderByWithRelationInputSchema ]).optional(),
  cursor: PermissionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PermissionScalarFieldEnumSchema,PermissionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PermissionFindManyArgsSchema: z.ZodType<Prisma.PermissionFindManyArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  where: PermissionWhereInputSchema.optional(),
  orderBy: z.union([ PermissionOrderByWithRelationInputSchema.array(),PermissionOrderByWithRelationInputSchema ]).optional(),
  cursor: PermissionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PermissionScalarFieldEnumSchema,PermissionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PermissionAggregateArgsSchema: z.ZodType<Prisma.PermissionAggregateArgs> = z.object({
  where: PermissionWhereInputSchema.optional(),
  orderBy: z.union([ PermissionOrderByWithRelationInputSchema.array(),PermissionOrderByWithRelationInputSchema ]).optional(),
  cursor: PermissionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PermissionGroupByArgsSchema: z.ZodType<Prisma.PermissionGroupByArgs> = z.object({
  where: PermissionWhereInputSchema.optional(),
  orderBy: z.union([ PermissionOrderByWithAggregationInputSchema.array(),PermissionOrderByWithAggregationInputSchema ]).optional(),
  by: PermissionScalarFieldEnumSchema.array(),
  having: PermissionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PermissionFindUniqueArgsSchema: z.ZodType<Prisma.PermissionFindUniqueArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  where: PermissionWhereUniqueInputSchema,
}).strict() ;

export const PermissionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PermissionFindUniqueOrThrowArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  where: PermissionWhereUniqueInputSchema,
}).strict() ;

export const RoleFindFirstArgsSchema: z.ZodType<Prisma.RoleFindFirstArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoleScalarFieldEnumSchema,RoleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const RoleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoleFindFirstOrThrowArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoleScalarFieldEnumSchema,RoleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const RoleFindManyArgsSchema: z.ZodType<Prisma.RoleFindManyArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoleScalarFieldEnumSchema,RoleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const RoleAggregateArgsSchema: z.ZodType<Prisma.RoleAggregateArgs> = z.object({
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const RoleGroupByArgsSchema: z.ZodType<Prisma.RoleGroupByArgs> = z.object({
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithAggregationInputSchema.array(),RoleOrderByWithAggregationInputSchema ]).optional(),
  by: RoleScalarFieldEnumSchema.array(),
  having: RoleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const RoleFindUniqueArgsSchema: z.ZodType<Prisma.RoleFindUniqueArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema,
}).strict() ;

export const RoleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RoleFindUniqueOrThrowArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema,
}).strict() ;

export const MintSaleTransactionFindFirstArgsSchema: z.ZodType<Prisma.MintSaleTransactionFindFirstArgs> = z.object({
  select: MintSaleTransactionSelectSchema.optional(),
  where: MintSaleTransactionWhereInputSchema.optional(),
  orderBy: z.union([ MintSaleTransactionOrderByWithRelationInputSchema.array(),MintSaleTransactionOrderByWithRelationInputSchema ]).optional(),
  cursor: MintSaleTransactionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MintSaleTransactionScalarFieldEnumSchema,MintSaleTransactionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MintSaleTransactionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MintSaleTransactionFindFirstOrThrowArgs> = z.object({
  select: MintSaleTransactionSelectSchema.optional(),
  where: MintSaleTransactionWhereInputSchema.optional(),
  orderBy: z.union([ MintSaleTransactionOrderByWithRelationInputSchema.array(),MintSaleTransactionOrderByWithRelationInputSchema ]).optional(),
  cursor: MintSaleTransactionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MintSaleTransactionScalarFieldEnumSchema,MintSaleTransactionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MintSaleTransactionFindManyArgsSchema: z.ZodType<Prisma.MintSaleTransactionFindManyArgs> = z.object({
  select: MintSaleTransactionSelectSchema.optional(),
  where: MintSaleTransactionWhereInputSchema.optional(),
  orderBy: z.union([ MintSaleTransactionOrderByWithRelationInputSchema.array(),MintSaleTransactionOrderByWithRelationInputSchema ]).optional(),
  cursor: MintSaleTransactionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MintSaleTransactionScalarFieldEnumSchema,MintSaleTransactionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MintSaleTransactionAggregateArgsSchema: z.ZodType<Prisma.MintSaleTransactionAggregateArgs> = z.object({
  where: MintSaleTransactionWhereInputSchema.optional(),
  orderBy: z.union([ MintSaleTransactionOrderByWithRelationInputSchema.array(),MintSaleTransactionOrderByWithRelationInputSchema ]).optional(),
  cursor: MintSaleTransactionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MintSaleTransactionGroupByArgsSchema: z.ZodType<Prisma.MintSaleTransactionGroupByArgs> = z.object({
  where: MintSaleTransactionWhereInputSchema.optional(),
  orderBy: z.union([ MintSaleTransactionOrderByWithAggregationInputSchema.array(),MintSaleTransactionOrderByWithAggregationInputSchema ]).optional(),
  by: MintSaleTransactionScalarFieldEnumSchema.array(),
  having: MintSaleTransactionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MintSaleTransactionFindUniqueArgsSchema: z.ZodType<Prisma.MintSaleTransactionFindUniqueArgs> = z.object({
  select: MintSaleTransactionSelectSchema.optional(),
  where: MintSaleTransactionWhereUniqueInputSchema,
}).strict() ;

export const MintSaleTransactionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MintSaleTransactionFindUniqueOrThrowArgs> = z.object({
  select: MintSaleTransactionSelectSchema.optional(),
  where: MintSaleTransactionWhereUniqueInputSchema,
}).strict() ;

export const InstarevealCollectionFindFirstArgsSchema: z.ZodType<Prisma.InstarevealCollectionFindFirstArgs> = z.object({
  select: InstarevealCollectionSelectSchema.optional(),
  where: InstarevealCollectionWhereInputSchema.optional(),
  orderBy: z.union([ InstarevealCollectionOrderByWithRelationInputSchema.array(),InstarevealCollectionOrderByWithRelationInputSchema ]).optional(),
  cursor: InstarevealCollectionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InstarevealCollectionScalarFieldEnumSchema,InstarevealCollectionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InstarevealCollectionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InstarevealCollectionFindFirstOrThrowArgs> = z.object({
  select: InstarevealCollectionSelectSchema.optional(),
  where: InstarevealCollectionWhereInputSchema.optional(),
  orderBy: z.union([ InstarevealCollectionOrderByWithRelationInputSchema.array(),InstarevealCollectionOrderByWithRelationInputSchema ]).optional(),
  cursor: InstarevealCollectionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InstarevealCollectionScalarFieldEnumSchema,InstarevealCollectionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InstarevealCollectionFindManyArgsSchema: z.ZodType<Prisma.InstarevealCollectionFindManyArgs> = z.object({
  select: InstarevealCollectionSelectSchema.optional(),
  where: InstarevealCollectionWhereInputSchema.optional(),
  orderBy: z.union([ InstarevealCollectionOrderByWithRelationInputSchema.array(),InstarevealCollectionOrderByWithRelationInputSchema ]).optional(),
  cursor: InstarevealCollectionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InstarevealCollectionScalarFieldEnumSchema,InstarevealCollectionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InstarevealCollectionAggregateArgsSchema: z.ZodType<Prisma.InstarevealCollectionAggregateArgs> = z.object({
  where: InstarevealCollectionWhereInputSchema.optional(),
  orderBy: z.union([ InstarevealCollectionOrderByWithRelationInputSchema.array(),InstarevealCollectionOrderByWithRelationInputSchema ]).optional(),
  cursor: InstarevealCollectionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InstarevealCollectionGroupByArgsSchema: z.ZodType<Prisma.InstarevealCollectionGroupByArgs> = z.object({
  where: InstarevealCollectionWhereInputSchema.optional(),
  orderBy: z.union([ InstarevealCollectionOrderByWithAggregationInputSchema.array(),InstarevealCollectionOrderByWithAggregationInputSchema ]).optional(),
  by: InstarevealCollectionScalarFieldEnumSchema.array(),
  having: InstarevealCollectionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InstarevealCollectionFindUniqueArgsSchema: z.ZodType<Prisma.InstarevealCollectionFindUniqueArgs> = z.object({
  select: InstarevealCollectionSelectSchema.optional(),
  where: InstarevealCollectionWhereUniqueInputSchema,
}).strict() ;

export const InstarevealCollectionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InstarevealCollectionFindUniqueOrThrowArgs> = z.object({
  select: InstarevealCollectionSelectSchema.optional(),
  where: InstarevealCollectionWhereUniqueInputSchema,
}).strict() ;

export const ReferralFindFirstArgsSchema: z.ZodType<Prisma.ReferralFindFirstArgs> = z.object({
  select: ReferralSelectSchema.optional(),
  where: ReferralWhereInputSchema.optional(),
  orderBy: z.union([ ReferralOrderByWithRelationInputSchema.array(),ReferralOrderByWithRelationInputSchema ]).optional(),
  cursor: ReferralWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReferralScalarFieldEnumSchema,ReferralScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReferralFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ReferralFindFirstOrThrowArgs> = z.object({
  select: ReferralSelectSchema.optional(),
  where: ReferralWhereInputSchema.optional(),
  orderBy: z.union([ ReferralOrderByWithRelationInputSchema.array(),ReferralOrderByWithRelationInputSchema ]).optional(),
  cursor: ReferralWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReferralScalarFieldEnumSchema,ReferralScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReferralFindManyArgsSchema: z.ZodType<Prisma.ReferralFindManyArgs> = z.object({
  select: ReferralSelectSchema.optional(),
  where: ReferralWhereInputSchema.optional(),
  orderBy: z.union([ ReferralOrderByWithRelationInputSchema.array(),ReferralOrderByWithRelationInputSchema ]).optional(),
  cursor: ReferralWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReferralScalarFieldEnumSchema,ReferralScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReferralAggregateArgsSchema: z.ZodType<Prisma.ReferralAggregateArgs> = z.object({
  where: ReferralWhereInputSchema.optional(),
  orderBy: z.union([ ReferralOrderByWithRelationInputSchema.array(),ReferralOrderByWithRelationInputSchema ]).optional(),
  cursor: ReferralWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ReferralGroupByArgsSchema: z.ZodType<Prisma.ReferralGroupByArgs> = z.object({
  where: ReferralWhereInputSchema.optional(),
  orderBy: z.union([ ReferralOrderByWithAggregationInputSchema.array(),ReferralOrderByWithAggregationInputSchema ]).optional(),
  by: ReferralScalarFieldEnumSchema.array(),
  having: ReferralScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ReferralFindUniqueArgsSchema: z.ZodType<Prisma.ReferralFindUniqueArgs> = z.object({
  select: ReferralSelectSchema.optional(),
  where: ReferralWhereUniqueInputSchema,
}).strict() ;

export const ReferralFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ReferralFindUniqueOrThrowArgs> = z.object({
  select: ReferralSelectSchema.optional(),
  where: ReferralWhereUniqueInputSchema,
}).strict() ;

export const CollectionCreateArgsSchema: z.ZodType<Prisma.CollectionCreateArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  data: z.union([ CollectionCreateInputSchema,CollectionUncheckedCreateInputSchema ]),
}).strict() ;

export const CollectionUpsertArgsSchema: z.ZodType<Prisma.CollectionUpsertArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  where: CollectionWhereUniqueInputSchema,
  create: z.union([ CollectionCreateInputSchema,CollectionUncheckedCreateInputSchema ]),
  update: z.union([ CollectionUpdateInputSchema,CollectionUncheckedUpdateInputSchema ]),
}).strict() ;

export const CollectionDeleteArgsSchema: z.ZodType<Prisma.CollectionDeleteArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  where: CollectionWhereUniqueInputSchema,
}).strict() ;

export const CollectionUpdateArgsSchema: z.ZodType<Prisma.CollectionUpdateArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  data: z.union([ CollectionUpdateInputSchema,CollectionUncheckedUpdateInputSchema ]),
  where: CollectionWhereUniqueInputSchema,
}).strict() ;

export const CollectionUpdateManyArgsSchema: z.ZodType<Prisma.CollectionUpdateManyArgs> = z.object({
  data: z.union([ CollectionUpdateManyMutationInputSchema,CollectionUncheckedUpdateManyInputSchema ]),
  where: CollectionWhereInputSchema.optional(),
}).strict() ;

export const CollectionDeleteManyArgsSchema: z.ZodType<Prisma.CollectionDeleteManyArgs> = z.object({
  where: CollectionWhereInputSchema.optional(),
}).strict() ;

export const NftCreateArgsSchema: z.ZodType<Prisma.NftCreateArgs> = z.object({
  select: NftSelectSchema.optional(),
  include: NftIncludeSchema.optional(),
  data: z.union([ NftCreateInputSchema,NftUncheckedCreateInputSchema ]),
}).strict() ;

export const NftUpsertArgsSchema: z.ZodType<Prisma.NftUpsertArgs> = z.object({
  select: NftSelectSchema.optional(),
  include: NftIncludeSchema.optional(),
  where: NftWhereUniqueInputSchema,
  create: z.union([ NftCreateInputSchema,NftUncheckedCreateInputSchema ]),
  update: z.union([ NftUpdateInputSchema,NftUncheckedUpdateInputSchema ]),
}).strict() ;

export const NftDeleteArgsSchema: z.ZodType<Prisma.NftDeleteArgs> = z.object({
  select: NftSelectSchema.optional(),
  include: NftIncludeSchema.optional(),
  where: NftWhereUniqueInputSchema,
}).strict() ;

export const NftUpdateArgsSchema: z.ZodType<Prisma.NftUpdateArgs> = z.object({
  select: NftSelectSchema.optional(),
  include: NftIncludeSchema.optional(),
  data: z.union([ NftUpdateInputSchema,NftUncheckedUpdateInputSchema ]),
  where: NftWhereUniqueInputSchema,
}).strict() ;

export const NftUpdateManyArgsSchema: z.ZodType<Prisma.NftUpdateManyArgs> = z.object({
  data: z.union([ NftUpdateManyMutationInputSchema,NftUncheckedUpdateManyInputSchema ]),
  where: NftWhereInputSchema.optional(),
}).strict() ;

export const NftDeleteManyArgsSchema: z.ZodType<Prisma.NftDeleteManyArgs> = z.object({
  where: NftWhereInputSchema.optional(),
}).strict() ;

export const MintDataCreateArgsSchema: z.ZodType<Prisma.MintDataCreateArgs> = z.object({
  select: MintDataSelectSchema.optional(),
  include: MintDataIncludeSchema.optional(),
  data: z.union([ MintDataCreateInputSchema,MintDataUncheckedCreateInputSchema ]),
}).strict() ;

export const MintDataUpsertArgsSchema: z.ZodType<Prisma.MintDataUpsertArgs> = z.object({
  select: MintDataSelectSchema.optional(),
  include: MintDataIncludeSchema.optional(),
  where: MintDataWhereUniqueInputSchema,
  create: z.union([ MintDataCreateInputSchema,MintDataUncheckedCreateInputSchema ]),
  update: z.union([ MintDataUpdateInputSchema,MintDataUncheckedUpdateInputSchema ]),
}).strict() ;

export const MintDataDeleteArgsSchema: z.ZodType<Prisma.MintDataDeleteArgs> = z.object({
  select: MintDataSelectSchema.optional(),
  include: MintDataIncludeSchema.optional(),
  where: MintDataWhereUniqueInputSchema,
}).strict() ;

export const MintDataUpdateArgsSchema: z.ZodType<Prisma.MintDataUpdateArgs> = z.object({
  select: MintDataSelectSchema.optional(),
  include: MintDataIncludeSchema.optional(),
  data: z.union([ MintDataUpdateInputSchema,MintDataUncheckedUpdateInputSchema ]),
  where: MintDataWhereUniqueInputSchema,
}).strict() ;

export const MintDataUpdateManyArgsSchema: z.ZodType<Prisma.MintDataUpdateManyArgs> = z.object({
  data: z.union([ MintDataUpdateManyMutationInputSchema,MintDataUncheckedUpdateManyInputSchema ]),
  where: MintDataWhereInputSchema.optional(),
}).strict() ;

export const MintDataDeleteManyArgsSchema: z.ZodType<Prisma.MintDataDeleteManyArgs> = z.object({
  where: MintDataWhereInputSchema.optional(),
}).strict() ;

export const OpenRarityCreateArgsSchema: z.ZodType<Prisma.OpenRarityCreateArgs> = z.object({
  select: OpenRaritySelectSchema.optional(),
  include: OpenRarityIncludeSchema.optional(),
  data: z.union([ OpenRarityCreateInputSchema,OpenRarityUncheckedCreateInputSchema ]),
}).strict() ;

export const OpenRarityUpsertArgsSchema: z.ZodType<Prisma.OpenRarityUpsertArgs> = z.object({
  select: OpenRaritySelectSchema.optional(),
  include: OpenRarityIncludeSchema.optional(),
  where: OpenRarityWhereUniqueInputSchema,
  create: z.union([ OpenRarityCreateInputSchema,OpenRarityUncheckedCreateInputSchema ]),
  update: z.union([ OpenRarityUpdateInputSchema,OpenRarityUncheckedUpdateInputSchema ]),
}).strict() ;

export const OpenRarityDeleteArgsSchema: z.ZodType<Prisma.OpenRarityDeleteArgs> = z.object({
  select: OpenRaritySelectSchema.optional(),
  include: OpenRarityIncludeSchema.optional(),
  where: OpenRarityWhereUniqueInputSchema,
}).strict() ;

export const OpenRarityUpdateArgsSchema: z.ZodType<Prisma.OpenRarityUpdateArgs> = z.object({
  select: OpenRaritySelectSchema.optional(),
  include: OpenRarityIncludeSchema.optional(),
  data: z.union([ OpenRarityUpdateInputSchema,OpenRarityUncheckedUpdateInputSchema ]),
  where: OpenRarityWhereUniqueInputSchema,
}).strict() ;

export const OpenRarityUpdateManyArgsSchema: z.ZodType<Prisma.OpenRarityUpdateManyArgs> = z.object({
  data: z.union([ OpenRarityUpdateManyMutationInputSchema,OpenRarityUncheckedUpdateManyInputSchema ]),
  where: OpenRarityWhereInputSchema.optional(),
}).strict() ;

export const OpenRarityDeleteManyArgsSchema: z.ZodType<Prisma.OpenRarityDeleteManyArgs> = z.object({
  where: OpenRarityWhereInputSchema.optional(),
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const ConnectionCreateArgsSchema: z.ZodType<Prisma.ConnectionCreateArgs> = z.object({
  select: ConnectionSelectSchema.optional(),
  include: ConnectionIncludeSchema.optional(),
  data: z.union([ ConnectionCreateInputSchema,ConnectionUncheckedCreateInputSchema ]),
}).strict() ;

export const ConnectionUpsertArgsSchema: z.ZodType<Prisma.ConnectionUpsertArgs> = z.object({
  select: ConnectionSelectSchema.optional(),
  include: ConnectionIncludeSchema.optional(),
  where: ConnectionWhereUniqueInputSchema,
  create: z.union([ ConnectionCreateInputSchema,ConnectionUncheckedCreateInputSchema ]),
  update: z.union([ ConnectionUpdateInputSchema,ConnectionUncheckedUpdateInputSchema ]),
}).strict() ;

export const ConnectionDeleteArgsSchema: z.ZodType<Prisma.ConnectionDeleteArgs> = z.object({
  select: ConnectionSelectSchema.optional(),
  include: ConnectionIncludeSchema.optional(),
  where: ConnectionWhereUniqueInputSchema,
}).strict() ;

export const ConnectionUpdateArgsSchema: z.ZodType<Prisma.ConnectionUpdateArgs> = z.object({
  select: ConnectionSelectSchema.optional(),
  include: ConnectionIncludeSchema.optional(),
  data: z.union([ ConnectionUpdateInputSchema,ConnectionUncheckedUpdateInputSchema ]),
  where: ConnectionWhereUniqueInputSchema,
}).strict() ;

export const ConnectionUpdateManyArgsSchema: z.ZodType<Prisma.ConnectionUpdateManyArgs> = z.object({
  data: z.union([ ConnectionUpdateManyMutationInputSchema,ConnectionUncheckedUpdateManyInputSchema ]),
  where: ConnectionWhereInputSchema.optional(),
}).strict() ;

export const ConnectionDeleteManyArgsSchema: z.ZodType<Prisma.ConnectionDeleteManyArgs> = z.object({
  where: ConnectionWhereInputSchema.optional(),
}).strict() ;

export const PasswordCreateArgsSchema: z.ZodType<Prisma.PasswordCreateArgs> = z.object({
  select: PasswordSelectSchema.optional(),
  include: PasswordIncludeSchema.optional(),
  data: z.union([ PasswordCreateInputSchema,PasswordUncheckedCreateInputSchema ]),
}).strict() ;

export const PasswordUpsertArgsSchema: z.ZodType<Prisma.PasswordUpsertArgs> = z.object({
  select: PasswordSelectSchema.optional(),
  include: PasswordIncludeSchema.optional(),
  where: PasswordWhereUniqueInputSchema,
  create: z.union([ PasswordCreateInputSchema,PasswordUncheckedCreateInputSchema ]),
  update: z.union([ PasswordUpdateInputSchema,PasswordUncheckedUpdateInputSchema ]),
}).strict() ;

export const PasswordDeleteArgsSchema: z.ZodType<Prisma.PasswordDeleteArgs> = z.object({
  select: PasswordSelectSchema.optional(),
  include: PasswordIncludeSchema.optional(),
  where: PasswordWhereUniqueInputSchema,
}).strict() ;

export const PasswordUpdateArgsSchema: z.ZodType<Prisma.PasswordUpdateArgs> = z.object({
  select: PasswordSelectSchema.optional(),
  include: PasswordIncludeSchema.optional(),
  data: z.union([ PasswordUpdateInputSchema,PasswordUncheckedUpdateInputSchema ]),
  where: PasswordWhereUniqueInputSchema,
}).strict() ;

export const PasswordUpdateManyArgsSchema: z.ZodType<Prisma.PasswordUpdateManyArgs> = z.object({
  data: z.union([ PasswordUpdateManyMutationInputSchema,PasswordUncheckedUpdateManyInputSchema ]),
  where: PasswordWhereInputSchema.optional(),
}).strict() ;

export const PasswordDeleteManyArgsSchema: z.ZodType<Prisma.PasswordDeleteManyArgs> = z.object({
  where: PasswordWhereInputSchema.optional(),
}).strict() ;

export const ChainCreateArgsSchema: z.ZodType<Prisma.ChainCreateArgs> = z.object({
  select: ChainSelectSchema.optional(),
  include: ChainIncludeSchema.optional(),
  data: z.union([ ChainCreateInputSchema,ChainUncheckedCreateInputSchema ]),
}).strict() ;

export const ChainUpsertArgsSchema: z.ZodType<Prisma.ChainUpsertArgs> = z.object({
  select: ChainSelectSchema.optional(),
  include: ChainIncludeSchema.optional(),
  where: ChainWhereUniqueInputSchema,
  create: z.union([ ChainCreateInputSchema,ChainUncheckedCreateInputSchema ]),
  update: z.union([ ChainUpdateInputSchema,ChainUncheckedUpdateInputSchema ]),
}).strict() ;

export const ChainDeleteArgsSchema: z.ZodType<Prisma.ChainDeleteArgs> = z.object({
  select: ChainSelectSchema.optional(),
  include: ChainIncludeSchema.optional(),
  where: ChainWhereUniqueInputSchema,
}).strict() ;

export const ChainUpdateArgsSchema: z.ZodType<Prisma.ChainUpdateArgs> = z.object({
  select: ChainSelectSchema.optional(),
  include: ChainIncludeSchema.optional(),
  data: z.union([ ChainUpdateInputSchema,ChainUncheckedUpdateInputSchema ]),
  where: ChainWhereUniqueInputSchema,
}).strict() ;

export const ChainUpdateManyArgsSchema: z.ZodType<Prisma.ChainUpdateManyArgs> = z.object({
  data: z.union([ ChainUpdateManyMutationInputSchema,ChainUncheckedUpdateManyInputSchema ]),
  where: ChainWhereInputSchema.optional(),
}).strict() ;

export const ChainDeleteManyArgsSchema: z.ZodType<Prisma.ChainDeleteManyArgs> = z.object({
  where: ChainWhereInputSchema.optional(),
}).strict() ;

export const WalletCreateArgsSchema: z.ZodType<Prisma.WalletCreateArgs> = z.object({
  select: WalletSelectSchema.optional(),
  include: WalletIncludeSchema.optional(),
  data: z.union([ WalletCreateInputSchema,WalletUncheckedCreateInputSchema ]),
}).strict() ;

export const WalletUpsertArgsSchema: z.ZodType<Prisma.WalletUpsertArgs> = z.object({
  select: WalletSelectSchema.optional(),
  include: WalletIncludeSchema.optional(),
  where: WalletWhereUniqueInputSchema,
  create: z.union([ WalletCreateInputSchema,WalletUncheckedCreateInputSchema ]),
  update: z.union([ WalletUpdateInputSchema,WalletUncheckedUpdateInputSchema ]),
}).strict() ;

export const WalletDeleteArgsSchema: z.ZodType<Prisma.WalletDeleteArgs> = z.object({
  select: WalletSelectSchema.optional(),
  include: WalletIncludeSchema.optional(),
  where: WalletWhereUniqueInputSchema,
}).strict() ;

export const WalletUpdateArgsSchema: z.ZodType<Prisma.WalletUpdateArgs> = z.object({
  select: WalletSelectSchema.optional(),
  include: WalletIncludeSchema.optional(),
  data: z.union([ WalletUpdateInputSchema,WalletUncheckedUpdateInputSchema ]),
  where: WalletWhereUniqueInputSchema,
}).strict() ;

export const WalletUpdateManyArgsSchema: z.ZodType<Prisma.WalletUpdateManyArgs> = z.object({
  data: z.union([ WalletUpdateManyMutationInputSchema,WalletUncheckedUpdateManyInputSchema ]),
  where: WalletWhereInputSchema.optional(),
}).strict() ;

export const WalletDeleteManyArgsSchema: z.ZodType<Prisma.WalletDeleteManyArgs> = z.object({
  where: WalletWhereInputSchema.optional(),
}).strict() ;

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
}).strict() ;

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
  create: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
  update: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
}).strict() ;

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema,SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const PermissionCreateArgsSchema: z.ZodType<Prisma.PermissionCreateArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  data: z.union([ PermissionCreateInputSchema,PermissionUncheckedCreateInputSchema ]),
}).strict() ;

export const PermissionUpsertArgsSchema: z.ZodType<Prisma.PermissionUpsertArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  where: PermissionWhereUniqueInputSchema,
  create: z.union([ PermissionCreateInputSchema,PermissionUncheckedCreateInputSchema ]),
  update: z.union([ PermissionUpdateInputSchema,PermissionUncheckedUpdateInputSchema ]),
}).strict() ;

export const PermissionDeleteArgsSchema: z.ZodType<Prisma.PermissionDeleteArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  where: PermissionWhereUniqueInputSchema,
}).strict() ;

export const PermissionUpdateArgsSchema: z.ZodType<Prisma.PermissionUpdateArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  data: z.union([ PermissionUpdateInputSchema,PermissionUncheckedUpdateInputSchema ]),
  where: PermissionWhereUniqueInputSchema,
}).strict() ;

export const PermissionUpdateManyArgsSchema: z.ZodType<Prisma.PermissionUpdateManyArgs> = z.object({
  data: z.union([ PermissionUpdateManyMutationInputSchema,PermissionUncheckedUpdateManyInputSchema ]),
  where: PermissionWhereInputSchema.optional(),
}).strict() ;

export const PermissionDeleteManyArgsSchema: z.ZodType<Prisma.PermissionDeleteManyArgs> = z.object({
  where: PermissionWhereInputSchema.optional(),
}).strict() ;

export const RoleCreateArgsSchema: z.ZodType<Prisma.RoleCreateArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  data: z.union([ RoleCreateInputSchema,RoleUncheckedCreateInputSchema ]),
}).strict() ;

export const RoleUpsertArgsSchema: z.ZodType<Prisma.RoleUpsertArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema,
  create: z.union([ RoleCreateInputSchema,RoleUncheckedCreateInputSchema ]),
  update: z.union([ RoleUpdateInputSchema,RoleUncheckedUpdateInputSchema ]),
}).strict() ;

export const RoleDeleteArgsSchema: z.ZodType<Prisma.RoleDeleteArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema,
}).strict() ;

export const RoleUpdateArgsSchema: z.ZodType<Prisma.RoleUpdateArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  data: z.union([ RoleUpdateInputSchema,RoleUncheckedUpdateInputSchema ]),
  where: RoleWhereUniqueInputSchema,
}).strict() ;

export const RoleUpdateManyArgsSchema: z.ZodType<Prisma.RoleUpdateManyArgs> = z.object({
  data: z.union([ RoleUpdateManyMutationInputSchema,RoleUncheckedUpdateManyInputSchema ]),
  where: RoleWhereInputSchema.optional(),
}).strict() ;

export const RoleDeleteManyArgsSchema: z.ZodType<Prisma.RoleDeleteManyArgs> = z.object({
  where: RoleWhereInputSchema.optional(),
}).strict() ;

export const MintSaleTransactionCreateArgsSchema: z.ZodType<Prisma.MintSaleTransactionCreateArgs> = z.object({
  select: MintSaleTransactionSelectSchema.optional(),
  data: z.union([ MintSaleTransactionCreateInputSchema,MintSaleTransactionUncheckedCreateInputSchema ]),
}).strict() ;

export const MintSaleTransactionUpsertArgsSchema: z.ZodType<Prisma.MintSaleTransactionUpsertArgs> = z.object({
  select: MintSaleTransactionSelectSchema.optional(),
  where: MintSaleTransactionWhereUniqueInputSchema,
  create: z.union([ MintSaleTransactionCreateInputSchema,MintSaleTransactionUncheckedCreateInputSchema ]),
  update: z.union([ MintSaleTransactionUpdateInputSchema,MintSaleTransactionUncheckedUpdateInputSchema ]),
}).strict() ;

export const MintSaleTransactionDeleteArgsSchema: z.ZodType<Prisma.MintSaleTransactionDeleteArgs> = z.object({
  select: MintSaleTransactionSelectSchema.optional(),
  where: MintSaleTransactionWhereUniqueInputSchema,
}).strict() ;

export const MintSaleTransactionUpdateArgsSchema: z.ZodType<Prisma.MintSaleTransactionUpdateArgs> = z.object({
  select: MintSaleTransactionSelectSchema.optional(),
  data: z.union([ MintSaleTransactionUpdateInputSchema,MintSaleTransactionUncheckedUpdateInputSchema ]),
  where: MintSaleTransactionWhereUniqueInputSchema,
}).strict() ;

export const MintSaleTransactionUpdateManyArgsSchema: z.ZodType<Prisma.MintSaleTransactionUpdateManyArgs> = z.object({
  data: z.union([ MintSaleTransactionUpdateManyMutationInputSchema,MintSaleTransactionUncheckedUpdateManyInputSchema ]),
  where: MintSaleTransactionWhereInputSchema.optional(),
}).strict() ;

export const MintSaleTransactionDeleteManyArgsSchema: z.ZodType<Prisma.MintSaleTransactionDeleteManyArgs> = z.object({
  where: MintSaleTransactionWhereInputSchema.optional(),
}).strict() ;

export const InstarevealCollectionCreateArgsSchema: z.ZodType<Prisma.InstarevealCollectionCreateArgs> = z.object({
  select: InstarevealCollectionSelectSchema.optional(),
  data: z.union([ InstarevealCollectionCreateInputSchema,InstarevealCollectionUncheckedCreateInputSchema ]),
}).strict() ;

export const InstarevealCollectionUpsertArgsSchema: z.ZodType<Prisma.InstarevealCollectionUpsertArgs> = z.object({
  select: InstarevealCollectionSelectSchema.optional(),
  where: InstarevealCollectionWhereUniqueInputSchema,
  create: z.union([ InstarevealCollectionCreateInputSchema,InstarevealCollectionUncheckedCreateInputSchema ]),
  update: z.union([ InstarevealCollectionUpdateInputSchema,InstarevealCollectionUncheckedUpdateInputSchema ]),
}).strict() ;

export const InstarevealCollectionDeleteArgsSchema: z.ZodType<Prisma.InstarevealCollectionDeleteArgs> = z.object({
  select: InstarevealCollectionSelectSchema.optional(),
  where: InstarevealCollectionWhereUniqueInputSchema,
}).strict() ;

export const InstarevealCollectionUpdateArgsSchema: z.ZodType<Prisma.InstarevealCollectionUpdateArgs> = z.object({
  select: InstarevealCollectionSelectSchema.optional(),
  data: z.union([ InstarevealCollectionUpdateInputSchema,InstarevealCollectionUncheckedUpdateInputSchema ]),
  where: InstarevealCollectionWhereUniqueInputSchema,
}).strict() ;

export const InstarevealCollectionUpdateManyArgsSchema: z.ZodType<Prisma.InstarevealCollectionUpdateManyArgs> = z.object({
  data: z.union([ InstarevealCollectionUpdateManyMutationInputSchema,InstarevealCollectionUncheckedUpdateManyInputSchema ]),
  where: InstarevealCollectionWhereInputSchema.optional(),
}).strict() ;

export const InstarevealCollectionDeleteManyArgsSchema: z.ZodType<Prisma.InstarevealCollectionDeleteManyArgs> = z.object({
  where: InstarevealCollectionWhereInputSchema.optional(),
}).strict() ;

export const ReferralCreateArgsSchema: z.ZodType<Prisma.ReferralCreateArgs> = z.object({
  select: ReferralSelectSchema.optional(),
  data: z.union([ ReferralCreateInputSchema,ReferralUncheckedCreateInputSchema ]),
}).strict() ;

export const ReferralUpsertArgsSchema: z.ZodType<Prisma.ReferralUpsertArgs> = z.object({
  select: ReferralSelectSchema.optional(),
  where: ReferralWhereUniqueInputSchema,
  create: z.union([ ReferralCreateInputSchema,ReferralUncheckedCreateInputSchema ]),
  update: z.union([ ReferralUpdateInputSchema,ReferralUncheckedUpdateInputSchema ]),
}).strict() ;

export const ReferralDeleteArgsSchema: z.ZodType<Prisma.ReferralDeleteArgs> = z.object({
  select: ReferralSelectSchema.optional(),
  where: ReferralWhereUniqueInputSchema,
}).strict() ;

export const ReferralUpdateArgsSchema: z.ZodType<Prisma.ReferralUpdateArgs> = z.object({
  select: ReferralSelectSchema.optional(),
  data: z.union([ ReferralUpdateInputSchema,ReferralUncheckedUpdateInputSchema ]),
  where: ReferralWhereUniqueInputSchema,
}).strict() ;

export const ReferralUpdateManyArgsSchema: z.ZodType<Prisma.ReferralUpdateManyArgs> = z.object({
  data: z.union([ ReferralUpdateManyMutationInputSchema,ReferralUncheckedUpdateManyInputSchema ]),
  where: ReferralWhereInputSchema.optional(),
}).strict() ;

export const ReferralDeleteManyArgsSchema: z.ZodType<Prisma.ReferralDeleteManyArgs> = z.object({
  where: ReferralWhereInputSchema.optional(),
}).strict() ;