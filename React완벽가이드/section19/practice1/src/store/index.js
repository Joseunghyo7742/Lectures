//todo: 스토어만들기
//todo: 리듀서 만들기

import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true,
};

createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + 1, showCounter: state.showCounter };
    case 'decrement':
      return { counter: state.counter - 1, showCounter: state.showCounter };
    case 'increase':
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case 'toggle':
      return {
        showCounter: !state.showCounter,
        counter: state.counter,
      };
    default:
      return state;
  }
};
const store = createStore(counterReducer);

export default store;
