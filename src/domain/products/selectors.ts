import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/store";
import { TProduct } from "@/types";

type StateType = RootState["products"];

export type TProductIDSelector = (state: RootState, productID: TProduct["id"]) => TProduct["id"];
export type TProductSelector = (state: RootState, productID: TProduct["id"]) => TProduct | undefined;
export type TProductsSelector = (state: RootState) => StateType;

export const selectProductID: TProductIDSelector = (_, productID) => productID;
export const selectProducts: TProductsSelector = (state) => state.products;

export const selectProductByID = createSelector(
	[selectProducts, selectProductID],
	(products, productID) => products.find((product) => product.id == productID)
);

export const selectTodaysProducts = createSelector([selectProducts], (products) =>
	products.filter((product) => product.type === "todays")
);

export const selectThisMonthProducts = createSelector([selectProducts], (products) =>
	products.filter((product) => product.type === "this-month")
);

export const selectOurProducts = createSelector([selectProducts], (products) =>
	products.filter((product) => product.type === "our-products")
);
