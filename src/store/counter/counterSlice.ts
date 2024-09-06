import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(incrementAsync.pending, (_, action) => {
      console.log(action);
    });
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.count += action.payload;
    });
    builder.addCase(incrementAsync.rejected, (_, action) => {
      console.log(action.error);
    });
  },
});

export const incrementAsync = createAsyncThunk('counter/fetchCount', async (amount: number) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return amount;
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
