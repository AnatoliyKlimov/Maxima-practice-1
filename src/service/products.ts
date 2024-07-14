import { productsSlice, productsSelectors } from "@/domain/products";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { TProduct, TAddProductDTO, TDeleteProductDTO, TUpdateProductDTO } from "@/types";

const {
	selectProducts,
	selectProductByID,
	selectTodaysProducts,
	selectThisMonthProducts,
	selectOurProducts
} = productsSelectors;

type TProductsHookOptions =
	| {
			id: TProduct["id"];
	  }
	| {
			type: TProduct["type"];
	  };

export const useProducts = (params: TProductsHookOptions) => {
	let productsSelector = selectProducts;
	let productSelector = selectProductByID;
	const dispatch = useAppDispatch();

	if ("type" in params) {
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
		"id" in params ? productSelector(state, params.id) : productsSelector(state)
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
