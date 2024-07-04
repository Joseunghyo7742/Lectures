import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store';

const Counter = () => {
  const handleIncrease = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrease = () => {
    dispatch(counterActions.decrement());
  };
  const handleIncreaseAmount = () => {
    dispatch(counterActions.increase(5));
    //{type: SOME_ UNIQUE_IDENTIFIER, payload: 10 }
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  const count = useSelector((state) => state.counter.value);
  const show = useSelector((state) => state.counter.classNameshowCounter);
  const dispatch = useDispatch();
  return (
    <main className={classes.counter}>
      <h1>Redux counter</h1>
      {show && <div className={classes.value}>{count}개</div>}

      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleIncreaseAmount}>ifncrease by 5</button>

      <button onClick={handleDecrease}>decrease</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
