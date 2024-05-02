import useRedux from '../hooks/useRedux';
import { authSlice } from '../store/auth/authSlice';
import { counterSlice } from '../store/counter/counterSlice';

import { decrement, incrementAsync, incrementByAmount } from '../store/counter/counterSlice';

export default function Counter() {
  const { count, dispatch } = useRedux(counterSlice);
  const { isAuthenticated } = useRedux(authSlice);

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
      <div className='flex gap-8'>
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
