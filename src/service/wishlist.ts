import { wishlistSlice, wishlistSelectors } from "@/domain/wishlist";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { TWishlistAddDTO, TWishlistDeleteDTO } from "@/types";

const { selectWishlistProducts } = wishlistSelectors;

export const useWishlist = () => {
	const dispatch = useAppDispatch();
	const selector = useAppSelector((state) => selectWishlistProducts(state));

	const {
		addWishlistProduct: addWishlistProductAction,
		deleteWishlistProduct: deleteWishlistProductAction,
		clearWishlist: clearWishlistAction
	} = wishlistSlice.slice.actions;

	const addProduct = (data: TWishlistAddDTO) => {
		dispatch(addWishlistProductAction(data));
	};

	const deleteProduct = (data: TWishlistDeleteDTO) => {
		dispatch(deleteWishlistProductAction(data));
	};

	const clearWishlist = () => {
		dispatch(clearWishlistAction());
	};

	return [selector, { addProduct, deleteProduct, clearWishlist }] as const;
};
