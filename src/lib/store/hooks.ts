import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import type { RootState, AppDispatch, AppStore } from "@/store";

// Хук для получения диспатчера с типами
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Хук для селектора с типами состояния
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Пример, если вам нужен хук для использования хранилища с типами
export const useAppStore = () => useStore<AppStore>();
