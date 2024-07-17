import type { ArrayElement } from "@/lib/utils";

import { TProduct } from "@/types";

export type TWishlist = TProduct["id"][];

export type TWishlistAddDTO = ArrayElement<TWishlist>;
export type TWishlistDeleteDTO = ArrayElement<TWishlist>;

export type TWishlistProduct = Omit<TProduct, "rating">;
