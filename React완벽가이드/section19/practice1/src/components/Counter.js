import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  const handleIncrease = () => {
    dispatch({ type: 'increment' });
  };
  const handleDecrease = () => {
    dispatch({ type: 'decrement' });
  };
  const handleIncreaseAmount = () => {
    dispatch({ type: 'increase', amount: 5 });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };
  const count = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
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
