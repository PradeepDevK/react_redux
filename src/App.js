import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './redux/reducer/counterSlice'
import { useState } from 'react';

function App() {

  const count = useSelector((state) => state.counter && state.counter.value)
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div className="App">
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        <input value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Add Count</button>
      </div>
    </div>
  );
}

export default App;
