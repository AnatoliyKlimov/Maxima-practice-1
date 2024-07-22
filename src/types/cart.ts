import type { ArrayElement } from "@/lib/utils";

import { TProduct } from "@/types";

export type TCart = { id: TProduct["id"]; quantity: number }[];

export type TCartAddDTO = Omit<ArrayElement<TCart>, "quantity">;
export type TCartUpdateDTO = ArrayElement<TCart>;
export type TCartDeleteDTO = Omit<ArrayElement<TCart>, "quantity">;

export const cartMaxQuantity = 100;
