import { z } from "zod";

export const CollectionSchema = z.object({
  created_at: z.union([z.string(), z.number()]),
  name: z.string(),
  slug: z.string(),
  banner_uri: z.string().url().startsWith("https://"),
  avatar_uri: z.string().url().startsWith("https://"),
  token_address: z.string().length(42),
  num_items: z.number(),
  max_items: z.union([z.number(), z.number().array()]),
  mint_info: z
    .object({
      mint_image: z.string(),
      public_mint_date: z.string(),
      featured_background_image: z.string(),
      featured_hero_image: z.string(),
    })
    .partial(),
  creator: z.string().length(42),
  contract_type: z.enum(["dutch", "ERC721", "ERC1155"]).optional(),
  num_owners: z.number(),
  num_total_items: z.number().optional(),
  is_mint_active: z.boolean(),
  mint_data: z
    .object({
      time_last_mint: z.number(),
      date_last_mint: z.union([z.number(), z.string()]),
      mints_last_1h: z.number(),
      mints_last_12h: z.number(),
      mints_last_24h: z.number(),
      mints_last_7d: z.number(),
    })
    .partial()
    .nullable(),
  floor: z
    .object({
      floorPriceRaw: z.string(),
      floorPriceDecimal: z.number(),
      updated_at: z.string(),
    })
    .optional(),
  description: z.string().optional(),
  twitter: z.string().optional(),
  website: z.string().optional(),
  discord: z.string().optional(),
});

export type ICollectionHot = z.infer<typeof CollectionSchema>;
