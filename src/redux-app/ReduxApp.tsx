import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, increment, decrement } from './store';

export default function ReduxApp() {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
