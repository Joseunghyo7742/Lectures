//todo: 스토어만들기
//todo: 리듀서 만들기

import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {
  value: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
      state.value = state.value + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
}); //여러개의 리듀서들을 하나로 합침

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
