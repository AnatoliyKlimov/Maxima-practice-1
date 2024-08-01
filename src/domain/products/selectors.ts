import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/store";
import { ArrayElement } from "@/lib/utils";

type StateType = RootState["products"];
type StateElementType = ArrayElement<StateType>;
type IDType = StateElementType["id"];

type TProductIDSelector = (state: RootState, productID: IDType) => IDType;

type TProductIDsSelector = (state: RootState, productIDs: IDType[]) => IDType[];
type TProductsSelector = (state: RootState) => StateType;

const selectProductID: TProductIDSelector = (_, productID) => productID;
const selectProductsIDs: TProductIDsSelector = (_, productIDs) => productIDs;

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
