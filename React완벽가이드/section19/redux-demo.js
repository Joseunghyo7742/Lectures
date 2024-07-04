const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
  console.log('action', action.type);
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    }; //new State Object
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);
//어떤 리듀서가 저장소를 변경하는지 알아야 함.

console.log(store.getState()); //초기 리덕스 객체 상태를 출력해주긴함. {counter:1}

//리덕스를 구독하기.
const counterSubscriber = () => {
  //상태가 변경될 때마다 구독함수가 트리거됨
  const latestState = store.getState();
  console.log('latestState', latestState);
};

//Store에 구독 함수를 알려주기
store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' }); //{counter:2 }로 증가시킴 counterReducer를 실행시키긴했으나 여기서 타입 액션은 효과가 없음
store.dispatch({ type: 'decrement' });
