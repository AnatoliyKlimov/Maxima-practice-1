import { recommendationsSlice, recommendationsSelectors } from "@/domain/recommendations";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { TRecommendationAddDTO, TRecommendationDeleteDTO } from "@/types";

const { selectRecommendProducts } = recommendationsSelectors;

export const useRecommendations = () => {
	const dispatch = useAppDispatch();
	const selector = useAppSelector((state) => selectRecommendProducts(state));

	const {
		addRecommendProduct: addRecommendProductAction,
		deleteRecommendProduct: deleteRecommendProductAction,
		clearRecommendations: clearRecommendationsAction
	} = recommendationsSlice.slice.actions;

	const addProduct = (data: TRecommendationAddDTO) => {
		dispatch(addRecommendProductAction(data));
	};

	const deleteProduct = (data: TRecommendationDeleteDTO) => {
		dispatch(deleteRecommendProductAction(data));
	};

	const clearRecommendations = () => {
		dispatch(clearRecommendationsAction());
	};

	return [selector, { addProduct, deleteProduct, clearRecommendations }] as const;
};
