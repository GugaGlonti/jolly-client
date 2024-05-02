import { createSlice } from '@reduxjs/toolkit';

export interface ConsoleSlice {
  content: string[];
}

const initialState: ConsoleSlice = {
  content: [],
};

export const consoleSlice = createSlice({
  name: 'console',
  initialState,
  reducers: {
    log: (state, action) => {
      state.content.push(action.payload);
    },
    clear: state => {
      state.content = [];
    },
  },
});

export const { log, clear } = consoleSlice.actions;
export default consoleSlice.reducer;
