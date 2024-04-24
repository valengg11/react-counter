import React, { useState } from 'react';
import { CounterContext } from './counter-context/CounterContext';
import Buttons from './Buttons';

export default function ReduxApp() {
    const [count, setCount] = useState<number>(0);
  return (
    <CounterContext.Provider value={{ count: count, setCount: setCount }}>
        <div>
            <h1>Context Counter App</h1>
            <p>Count: {count}</p>
            <Buttons/>
        </div>
    </CounterContext.Provider>
  );
}

