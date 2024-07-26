import { RootState } from "@/store";

type StateType = RootState["recommendations"];

type TRecommendProductsSelector = (state: RootState) => StateType;

export const selectRecommendProducts: TRecommendProductsSelector = (state) => state.recommendations;
