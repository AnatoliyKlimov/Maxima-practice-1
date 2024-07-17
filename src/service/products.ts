import { productsSlice, productsSelectors } from "@/domain/products";
import { RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ArrayElement } from "@/lib/utils";

import { TAddProductDTO, TDeleteProductDTO, TUpdateProductDTO } from "@/types";

const {
	selectProducts,
	selectProductsByIDs,
	selectProductByID,
	selectTodaysProducts,
	selectThisMonthProducts,
	selectOurProducts
} = productsSelectors;

type TProductsHookOptions =
	| {
			id: ArrayElement<RootState["products"]>["id"];
	  }
	| {
			ids: ArrayElement<RootState["products"]>["id"][];
	  }
	| {
			type: ArrayElement<RootState["products"]>["type"];
	  };

export const useProducts = (params?: TProductsHookOptions) => {
	let productsSelector = selectProducts;
	let productSelector = selectProductByID;

	const dispatch = useAppDispatch();

	if (params && "type" in params) {
		switch (params.type) {
			case "todays":
				productsSelector = selectTodaysProducts;
				break;

			case "this-month":
				productsSelector = selectThisMonthProducts;
				break;

			case "our-products":
				productsSelector = selectOurProducts;
				break;

			default:
				break;
		}
	}

	const selector = useAppSelector((state) =>
		params && "id" in params
			? productSelector(state, params.id)
			: params && "ids" in params
			? selectProductsByIDs(state, params.ids)
			: productsSelector(state)
	);

	const {
		addProduct: addProductAction,
		updateProduct: updateProductAction,
		deleteProduct: deleteProductAction,
		clearProducts: clearProductsAction
	} = productsSlice.slice.actions;

	const addProduct = (data: TAddProductDTO) => {
		dispatch(addProductAction(data));
	};

	const updateProduct = (data: TUpdateProductDTO) => {
		dispatch(updateProductAction(data));
	};

	const deleteProduct = (data: TDeleteProductDTO) => {
		dispatch(deleteProductAction(data));
	};

	const clearProducts = () => {
		dispatch(clearProductsAction());
	};

	return [selector, { addProduct, updateProduct, deleteProduct, clearProducts }] as const;
};
