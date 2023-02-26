

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './actions';

import './App.css';




function App() {
  
  const myNumber=useSelector((state)=>state.counterNumber);
  const dispatch=useDispatch();
  return (
   <>
   <div>
      <button className='btn btn-danger' onClick={()=>dispatch(decrement())} > ➖ </button>
      <input type="text"  value={myNumber} />
      <button className='btn btn-success' onClick={()=>dispatch(increment())} > ➕ </button>
    </div>
  </>
  );
}

export default App;
