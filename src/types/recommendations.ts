import type { ArrayElement } from "@/lib/utils";

import { TProduct } from "@/types";

export type TRecommendations = TProduct["id"][];

export type TRecommendationAddDTO = ArrayElement<TRecommendations>;
export type TRecommendationDeleteDTO = ArrayElement<TRecommendations>;
