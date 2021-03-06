import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppState, AppStore } from "~/redux/store";

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppStore["dispatch"]>();
