import useRedux from '../hooks/useRedux';
import { counterSlice, decrement, incrementAsync, incrementByAmount } from '../store/counter/counterSlice';

export default function Counter() {
  const { count, dispatch } = useRedux(counterSlice);

  function handleIncrement() {
    dispatch({ type: 'counter/increment' });
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleIncrementBy5() {
    dispatch(incrementByAmount(5));
  }

  function handleIncrementAsync() {
    dispatch(incrementAsync(10));
  }

  return (
    <>
      <div className='bg-gray-200 p-2 flex gap-8'>
        <div>Counter</div>
        <h2>{count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrementBy5}>Increment by 5</button>
        <button onClick={handleIncrementAsync}>Increment Async 1s</button>
      </div>
    </>
  );
}
