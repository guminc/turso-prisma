import { z } from "zod";

export const userStatusEnums = ["active", "pending"] as const;
export const UserStatusEnum = z.enum(userStatusEnums);
