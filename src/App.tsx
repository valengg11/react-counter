import React from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { RootState, increment, decrement } from './store';

const App: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
