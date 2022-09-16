import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, ApiDispatch } from './store';

export const useAppDispatch = () => useDispatch<ApiDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
