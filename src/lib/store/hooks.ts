import { useDispatch, useSelector, useStore } from "react-redux";

import type { RootState, AppDispatch, AppStore } from "@/store";

/** @public */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

/** @public */
export const useAppSelector = useSelector.withTypes<RootState>();

/** @public */
export const useAppStore = useStore.withTypes<AppStore>();
