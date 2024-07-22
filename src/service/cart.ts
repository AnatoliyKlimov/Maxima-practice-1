import { cartSlice, cartSelectors } from "@/domain/cart";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { TCartAddDTO, TCartUpdateDTO, TCartDeleteDTO } from "@/types";

const { selectCartProducts } = cartSelectors;

export const useCart = () => {
	const dispatch = useAppDispatch();
	const selector = useAppSelector((state) => selectCartProducts(state));

	const {
		addCartProduct: addCartProductAction,
		updateCartProductQuantity: updateCartProductQuantityAction,
		deleteCartProduct: deleteCartProductAction,
		clearCart: clearCartAction
	} = cartSlice.slice.actions;

	const addProduct = (data: TCartAddDTO) => {
		dispatch(addCartProductAction(data));
	};

	const updateProductQuantity = (data: TCartUpdateDTO) => {
		dispatch(updateCartProductQuantityAction(data));
	};

	const deleteProduct = (data: TCartDeleteDTO) => {
		dispatch(deleteCartProductAction(data));
	};

	const clearCart = () => {
		dispatch(clearCartAction());
	};

	return [selector, { addProduct, updateProductQuantity, deleteProduct, clearCart }] as const;
};
