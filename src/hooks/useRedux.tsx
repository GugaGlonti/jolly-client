import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { Slice, SliceCaseReducers, SliceSelectors } from '@reduxjs/toolkit';

type slice<State> = Slice<State, SliceCaseReducers<State>, string, string, SliceSelectors<State>>;
type useReduxReturn<State> = { [K in keyof State]: State[K] } & { dispatch: AppDispatch };

export default function useRedux<State>(slice: slice<State>): useReduxReturn<State> {
  const dispatch = useDispatch();
  const name = slice.name as keyof RootState;
  const store = useSelector((state: RootState) => state[name]) as State;
  return { ...store, dispatch };
}
