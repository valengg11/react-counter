import { useContext } from "react";
import { CounterContext } from "./counter-context/CounterContext";

export default function Buttons() {
    const { count, setCount } = useContext(CounterContext);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    );
}