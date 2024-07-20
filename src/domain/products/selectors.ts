import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/store";
import { ArrayElement } from "@/lib/utils";

type StateType = RootState["products"];
type StateElementType = ArrayElement<StateType>;
type IDType = StateElementType["id"];

export type TProductIDSelector = (state: RootState, productID: IDType) => IDType;
export type TProductSelector = (
	state: RootState,
	productID: IDType
) => StateElementType | undefined;

export type TProductIDsSelector = (state: RootState, productIDs: IDType[]) => IDType[];
export type TProductsSelector = (state: RootState) => StateType;

export const selectProductID: TProductIDSelector = (_, productID) => productID;
export const selectProductsIDs: TProductIDsSelector = (_, productIDs) => productIDs;

export const selectProducts: TProductsSelector = (state) => state.products;

export const selectProductByID = createSelector(
	[selectProducts, selectProductID],
	(products, productID) => products.find((product) => product.id == productID)
);

export const selectProductsByIDs = createSelector(
	[selectProducts, selectProductsIDs],
	(products, productsIDs) =>
		productsIDs.map((productID) => products.find((product) => product.id == productID))
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
